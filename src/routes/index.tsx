import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrowerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Home',
        icon: 'home',
        path: '/home',
      },
      {
        label: 'Planning Poker',
        icon: 'star',
        path: '/planning-poker',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={
        <>
          <Button variant='contained' color='primary' onClick={toggleDrowerOpen}>Toggle Sidebar</Button>
          <Button variant='contained' color='primary' onClick={toggleTheme}>Toggle Theme</Button>
        </>
      } />
      <Route path="/planning-poker" element={
        <>
          <Button variant='contained' color='primary' onClick={toggleDrowerOpen}>Toggle Sidebar</Button>
          <Button variant='contained' color='primary' onClick={toggleTheme}>Toggle Theme</Button>
        </>
      } />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};
