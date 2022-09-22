import React, { createContext, useCallback, useContext, useState } from 'react';


interface IDrawerContextData {
  isDrawerOpen: boolean
  drawerOptions: IDrawerOptions[]
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
  toggleDrawerOpen: () => void

}

interface IDrawerProviderProps {
  children: React.ReactNode
}

interface IDrawerOptions {
  icon: string
  label: string
  path: string
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }: IDrawerProviderProps) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions}}>
      {children}
    </DrawerContext.Provider>
  );
};

