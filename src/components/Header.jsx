import styled from "styled-components";

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
        <NavButton>
          <a href="/checklist">Checklist</a>
        </NavButton>
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

export default Nav;
