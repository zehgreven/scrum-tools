import { createContext, useCallback, useContext, useState } from 'react';

interface SidebarContextData {
  isSidebarOpen: boolean;
  sidebarOptions: SidebarOptions[];
  toggleSidebar: () => void;
  setSidebarOptions: (newSidebarOptions: SidebarOptions[]) => void;
}

const SidebarContext = createContext({} as SidebarContextData);

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

interface SidebarProps {
  children: React.ReactNode;
}

interface SidebarOptions {
  icon: string;
  label: string;
  path: string;
}

export const SidebarProvider: React.FC<SidebarProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarOptions, setSidebarOptions] = useState<SidebarOptions[]>([]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(oldSidebarState => !oldSidebarState);
  }, []);

  const handleSetSidebarOptions = useCallback(
    (newSidebarOptions: SidebarOptions[]) => {
      setSidebarOptions(newSidebarOptions);
    },
    [],
  );

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        sidebarOptions,
        toggleSidebar,
        setSidebarOptions: handleSetSidebarOptions,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
