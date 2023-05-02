import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterBox>
      <Wrapper>
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
      </Wrapper>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  width: 100%;
  height: 100px;
  background-color: hsl(16deg 36% 86%);
  margin-top: 50px;
  padding-top: 25px;
`;

const Wrapper = styled.div`
  width: 900px;
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
