import { createContext, useCallback, useContext, useState } from 'react';


interface DrawerContextData {
  isDrawerOpen: boolean;
  toggleDrowerOpen: () => void;
}

const DrawerContext = createContext({} as DrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface DrawerProps {
  children: React.ReactNode
}

export const DrawerProvider: React.FC<DrawerProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrowerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrowerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};