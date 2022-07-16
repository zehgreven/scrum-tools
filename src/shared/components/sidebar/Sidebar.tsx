import { Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useSidebarContext } from '../../contexts';

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

  const { toggleTheme, isDark } = useAppThemeContext();

  return (
    <>
      <Drawer open={isSidebarOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleSidebar}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box flex={1}>
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
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>{isDark ? 'light_mode' : 'dark_mode'}</Icon>
                </ListItemIcon>
                <ListItemText primary={isDark ? 'Use light theme' : 'Use dark theme'} />
              </ListItemButton>
            </List>
          </Box>
        </Box>

      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
