import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <FooterBox>
        <Company>
          Copy right 2023 <br /> Little Sprout Childcare
        </Company>
        <Contact>
          <img src="src\assets\phone.png" alt="this is a phone icon" />
          0497 xx xxx
          <br />
          <img src="src\assets\email.png" alt="this is an email icon" />
          chiliki.long@gmail.com
        </Contact>
      </FooterBox>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: 100px;
  background-color: hsl(16deg 36% 86%);
  margin-top: 50px;
  padding-top: 25px;
  bottom: 0;
`;

const FooterBox = styled.div`
  max-width: 900px;
  height: 50px;
  margin: auto;
  justify-content: space-between;
  display: flex;
`;

const Company = styled.div`
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  line-height: ${26 / 16};
`;

const Contact = styled.div`
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  line-height: ${26 / 16};

  img {
    margin-right: 5px;
  }
`;

export default Footer;
