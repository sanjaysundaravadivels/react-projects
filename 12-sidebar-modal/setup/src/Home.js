import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalCOntext } from "./context";
const Home = () => {
  const { openSidebar, openModal } = useGlobalCOntext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;
