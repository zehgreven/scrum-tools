import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Sidebar } from './shared/components';
import { AppThemeProvider, SidebarProvider } from './shared/contexts';

export const App = () => {
  return (
    <AppThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Sidebar>
            <AppRoutes />
          </Sidebar>
        </BrowserRouter>
      </SidebarProvider>
    </AppThemeProvider>
  );
};
