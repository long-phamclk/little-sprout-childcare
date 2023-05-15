import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";
import { closeTemplate } from "../../utils/template";
import CheckList from "../../components/CheckList";

function CloseCheckList() {
  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Closing checklist</Heading>
        <CheckListWrapper>
          <CheckList template={closeTemplate}></CheckList>
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
  font-size: ${30 / 16}rem;
  font-weight: 600;
  color: hsl(148deg 45% 68%);
`;

const CheckListWrapper = styled.div``;

export default CloseCheckList;
