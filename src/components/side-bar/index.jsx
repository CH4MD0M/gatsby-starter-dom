import React from "react";
import Links from "../Links";
import Categories from "../categories";
import { IoMdClose } from "react-icons/io";
import "./style.scss";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
      </div>
    </aside>
  );
};

export default Sidebar;
