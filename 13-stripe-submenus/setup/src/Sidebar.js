import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-sublinks">
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h4>{page} </h4>
                {links.map((link, index) => {
                  const { label, icon, url } = link;
                  return (
                    <a href={url} key={index}>
                      {icon}
                      {label}{" "}
                    </a>
                  );
                })}
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
