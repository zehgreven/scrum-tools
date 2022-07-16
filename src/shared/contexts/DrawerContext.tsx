import { createContext, useCallback, useContext, useState } from 'react';


interface DrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: DrawerOption[];
  toggleDrowerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: DrawerOption[]) => void;
}

const DrawerContext = createContext({} as DrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface DrawerProps {
  children: React.ReactNode
}

interface DrawerOption {
  icon: string;
  label: string;
  path: string;
}

export const DrawerProvider: React.FC<DrawerProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<DrawerOption[]>([]);

  const toggleDrowerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: DrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrowerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};