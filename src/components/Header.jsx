import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

function Nav() {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="A logo" />
      </Logo>
      <MenuWrapper>
        <DropBtn>
          <img src={menu} alt="Menu logo" />
        </DropBtn>
        <DropContent>
          <Content>
            <StyledNavlink to="/">Home</StyledNavlink>
          </Content>
          <Content>
            <StyledNavlink to="/openchecklist">Open Checklist</StyledNavlink>
          </Content>
          <Content>
            <StyledNavlink to="/closechecklist">Close Checklist</StyledNavlink>
          </Content>
          <Content>
            <StyledNavlink to="/notes">Notes</StyledNavlink>
          </Content>
          <Content>
            <StyledNavlink to="/history">History</StyledNavlink>
          </Content>
          <Content>
            <StyledNavlink to="/login">Login</StyledNavlink>
          </Content>
        </DropContent>
      </MenuWrapper>
      <NavButtonWrapper>
        <NavButton>
          <StyledNavlink to="/">Home</StyledNavlink>
        </NavButton>
        <DropDown>
          <DropBtn>Checklist</DropBtn>
          <DropContent>
            <Content>
              <StyledNavlink to="/openchecklist">Open Checklist</StyledNavlink>
            </Content>
            <Content>
              <StyledNavlink to="/closechecklist">
                Close Checklist
              </StyledNavlink>
            </Content>
          </DropContent>
        </DropDown>
        <NavButton>
          <StyledNavlink to="/notes">Notes</StyledNavlink>
        </NavButton>
        <NavButton>
          <StyledNavlink to="/history">History</StyledNavlink>
        </NavButton>
        <NavButton>
          <StyledNavlink to="/login">Login</StyledNavlink>
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

  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    font-size: ${25 / 16}rem;
    font-family: "Dosis", sans-serif;
    font-weight: 600;
    color: hsl(190deg 67% 4%);
    padding-right: 50px;
    float: left;
    overflow: hidden;
    position: relative;

    &:hover {
      cursor: pointer;
      overflow: visible;
    }
  }
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
  font-weight: 500;
  padding: 0 25px 0 0;
  border: 0;
  line-height: 1;
  background-color: HSL(16deg, 36%, 86%);
  cursor: pointer;
`;

const DropContent = styled.div`
  position: absolute;
  top: 100%;
  left: -30px;
  z-index: 1;
  padding: 0;
  margin: 0;
`;

const Content = styled.div`
  float: none;
  padding: 6px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: ${23 / 16}rem;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  width: max-content;

  &:hover {
    background-color: #877c5bf6;
    color: white;
  }
`;

const StyledNavlink = styled(NavLink)`
  &.active {
    color: #a63434cf;
  }
`;

export default Nav;
