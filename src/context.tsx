import React, { createContext, useState, useContext, ReactNode } from "react";

type ContextProps = {
  showSideBar: boolean;
  showModal: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
  openModal: () => void;
  closeModal: () => void;
};

const defaultValues: ContextProps = {
  showSideBar: false,
  showModal: false,
  openSideBar: () => {},
  closeSideBar: () => {},
  openModal: () => {},
  closeModal: () => {},
};

type AppProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<ContextProps>(defaultValues);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openSideBar = () => {
    setShowSideBar(true);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        openSideBar,
        closeSideBar,
        showSideBar,
        openModal,
        closeModal,
        showModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
