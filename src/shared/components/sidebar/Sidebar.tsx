import { Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useSidebarContext } from '../../contexts';

interface SidebarProps {
  children: React.ReactNode
}

interface ListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  onClick: (() => void) | undefined;
}

const ListItemLink : React.FC<ListItemLinkProps> = ({ label, icon, to, onClick }) => {

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);

  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick && onClick();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      {icon && 
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
      }
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isSidebarOpen, toggleSidebar, sidebarOptions } = useSidebarContext();

  return (
    <>
      <Drawer open={isSidebarOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleSidebar}>
        <Box width={theme.spacing(28)}>
          <List component="nav">
            {sidebarOptions.map((drawerOption) => (
              <ListItemLink
                key={drawerOption.path}
                label={drawerOption.label}
                icon={drawerOption.icon}
                to={drawerOption.path}
                onClick={smDown ? toggleSidebar : undefined}
              />
            ))}
          </List>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
