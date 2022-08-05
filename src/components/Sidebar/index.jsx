import React from "react";
import Links from "../Links";
import Categories from "../categories";

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
        <Links styleClass="sidebar-links">
          <Categories />
        </Links>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
