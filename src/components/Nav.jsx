import styled from "styled-components";
import React from "react";

function Nav() {
  return (
    <NavBar>
      <Logo>
        <img src="src\assets\logo.png" alt="This is a logo" />
      </Logo>
      <NavButtonWrapper>
        <NavButton>Home</NavButton>
        <NavButton>Checklist</NavButton>
        <NavButton>Notes</NavButton>
        <NavButton>History</NavButton>
        <NavButton>Login</NavButton>
      </NavButtonWrapper>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  background-color: HSL(16deg, 36%, 86%);
  width: 100%;
  height: 120px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  height: 120px;
  width: 120px;
  margin-left: 20px;
`;

const NavButtonWrapper = styled.ul`
  display: flex;
  width: auto;
`;

const NavButton = styled.li`
  font-size: ${25 / 16}rem;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  color: hsl(190deg 67% 4%);
  padding-right: 25px;
`;

export default Nav;
