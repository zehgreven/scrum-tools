import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useSidebarContext } from '../contexts';

interface BasePageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BasePageLayout: React.FC<BasePageLayoutProps> = ({ children, title }) => {
  const { toggleSidebar } = useSidebarContext();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" gap={1} height={smDown ? theme.spacing(6) : mdDown ? theme.spacing(8) : theme.spacing(12)}>
        {smDown && <IconButton onClick={toggleSidebar}>
          <Icon>menu</Icon>
        </IconButton>}
        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {title}
        </Typography>
      </Box>

      <Box flex={1} overflow="auto">
        {children}
      </Box>

    </Box>
  );
};
