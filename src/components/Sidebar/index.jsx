import React from "react";
import Links from "../Links";

// CSS
import { IoMdClose } from "react-icons/io";
import { Wrapper, SidebarContainer } from "./style";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <SidebarContainer isOpen={isOpen}>
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
      </SidebarContainer>
    </Wrapper>
  );
};

export default Sidebar;
