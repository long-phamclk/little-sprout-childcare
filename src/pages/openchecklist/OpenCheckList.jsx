import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";
import { openTemplate } from "../../utils/template";
import CheckList from "../../components/CheckList";

function OpenCheckList() {
  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Opening checklist</Heading>
        <CheckListWrapper>
          <CheckList template={openTemplate}></CheckList>
        </CheckListWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  max-width: 900px;
  height: auto;
  margin: auto;
  margin-top: 25px;
`;

const Heading = styled.h2`
  font-family: "Dosis", sans-serif;
  font-size: ${30 / 16}rem;
  font-weight: 600;
  color: hsl(148deg 45% 68%);
`;

const CheckListWrapper = styled.div``;

export default OpenCheckList;
