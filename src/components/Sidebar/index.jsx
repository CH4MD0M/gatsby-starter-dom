import React from "react";
import Links from "../Links";

// CSS
import * as S from "./style";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SidebarContainer isOpen={isOpen}>
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
      </S.SidebarContainer>
    </S.Wrapper>
  );
};

export default Sidebar;
