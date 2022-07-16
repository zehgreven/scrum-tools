import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrowerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route path="/start" element={
        <>
          <Button variant='contained' color='primary' onClick={toggleDrowerOpen}>Toggle Sidebar</Button>
          <Button variant='contained' color='primary' onClick={toggleTheme}>Toggle Theme</Button>
        </>
      } />
      <Route path="*" element={<Navigate to="/start" />} />
    </Routes>
  );
};
