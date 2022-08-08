import React from "react";
import Links from "../Links";

// CSS
import { IoMdClose } from "react-icons/io";
import { Wrapper } from "./style";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <button
        className="close-btn"
        onClick={() => {
          toggle();
        }}
      >
        <IoMdClose />
      </button>
      <div>
        <Links styleClass="sidebar-links" />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
