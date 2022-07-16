import { Button, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useAppThemeContext, useSidebarContext } from '../contexts';

interface BasePageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BasePageLayout : React.FC<BasePageLayoutProps> = ({ children, title }) => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleSidebar } = useSidebarContext();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} height={theme.spacing(12)} display="flex" alignItems="center" gap={1}>
        {smDown && <IconButton onClick={toggleSidebar}>
          <Icon>menu</Icon>
        </IconButton>}
        <Typography variant="h5">
          {title}
        </Typography>
      </Box>

      <Box>
        <Button variant='contained' color='primary' onClick={toggleTheme}>Toggle Theme</Button>
      </Box>

      <Box>
        {children}
      </Box>

    </Box>    
  );
};
