import React, { createContext, useState, useContext } from "react";

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

const AppContext = createContext<ContextProps>(defaultValues);

const AppProvider: React.FC = ({ children }) => {
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
