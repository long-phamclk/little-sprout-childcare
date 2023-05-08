import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Wrapper>
      <Logo>
        <img src="src\assets\logo.png" alt="This is a logo" />
      </Logo>
      <NavButtonWrapper>
        <NavButton>
          <a href="/">Home</a>
        </NavButton>
        <DropDown>
          <DropBtn>Checklist</DropBtn>
          <DropContent>
            <Content to="/openchecklist">Open Checklist</Content>
            <Content to="/closechecklist">Close Checklist</Content>
          </DropContent>
        </DropDown>
        <NavButton>
          <a href="/notes">Notes</a>
        </NavButton>
        <NavButton>
          <a href="/history">History</a>
        </NavButton>
        <NavButton>
          <a href="/login">Login</a>
        </NavButton>
      </NavButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  background-color: HSL(16deg, 36%, 86%);
  width: 100%;
  height: 120px;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  display: flex;
  height: 120px;
  width: 120px;
  margin-left: 20px;
`;

const NavButtonWrapper = styled.ul`
  display: flex;
  max-width: 100%;
`;

const NavButton = styled.li`
  font-size: ${25 / 16}rem;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  color: hsl(190deg 67% 4%);
  padding-right: 25px;
`;

const DropDown = styled.div`
  float: left;
  overflow: hidden;
  position: relative;

  &:hover {
    overflow: visible;
  }
`;

const DropBtn = styled.button`
  font-size: ${25 / 16}rem;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  padding: 0 25px 0 0;
  border: 0;
  line-height: 1;
  background-color: HSL(16deg, 36%, 86%);
  cursor: pointer;
  color: #551a8b;
`;

const DropContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  padding: 0;
  margin: 0;
`;

const Content = styled(Link)`
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: ${23 / 16}rem;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  width: max-content;
  color: #551a8b;

  &:hover {
    background-color: #3a3012f6;
    color: white;
  }
`;

export default Nav;
