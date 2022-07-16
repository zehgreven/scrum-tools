import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PlanningPoker } from '../pages/planning-poker/PlanningPoker';
import { useSidebarContext } from '../shared/contexts';
import { BasePageLayout } from '../shared/layouts';

export const AppRoutes = () => {
  const { setSidebarOptions: setDrawerOptions } = useSidebarContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Home',
        icon: 'home',
        path: '/home',
      },
      {
        label: 'Planning Poker',
        icon: 'handshake',
        path: '/planning-poker',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path='/home'
        element={
          <BasePageLayout>
            <h1>HOME</h1>
          </BasePageLayout>
        }
      />
      <Route
        path='/planning-poker'
        element={<PlanningPoker />}
      />
      <Route
        path='*'
        element={<Navigate to='/not-found' />}
      />
    </Routes>
  );
};
