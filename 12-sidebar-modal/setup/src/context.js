import React, { useState, useContext, createContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};
export const useGlobalCOntext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
