import React, { createContext, useState, useContext } from "react";

type ContextProps = {
  showSideBar: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
};

const defaultValues: ContextProps = {
  showSideBar: false,
  openSideBar: () => {},
  closeSideBar: () => {},
};

const AppContext = createContext<ContextProps>(defaultValues);

const AppProvider: React.FC = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const openSideBar = () => {
    setShowSideBar(true);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <AppContext.Provider value={{ openSideBar, closeSideBar, showSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
