import React from "react";
import Switch from "react-switch";
import styled from "styled-components";

import useTheme from "../../hooks/useTheme";

const ToggleButton = () => {
  const { theme, themeToggleHandler } = useTheme();

  const handleChange = () => {
    themeToggleHandler();
  };

  return (
    <Wrapper>
      <div className="switch-container">
        <label htmlFor="normal-switch">
          <Switch
            onChange={handleChange}
            checked={theme === "dark" ? true : false}
            id="normal-switch"
            height={24}
            width={50}
            checkedIcon={<div className="icon checkedIcon">D</div>}
            uncheckedIcon={<div className="icon uncheckedIcon">L</div>}
            offColor={"#d9dfe2"}
            offHandleColor={"#fff"}
            onColor={"#4a5568"}
            onHandleColor={"#1a212d"}
          />
        </label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }
`;

export default ToggleButton;
