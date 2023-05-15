import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";

function History() {
  const checkListHistory = JSON.parse(localStorage.getItem("SubmitList")) || [];

  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>History</Heading>
        <ListWrapper>
          {checkListHistory.map((submit) => {
            return <ListItem key={submit.id}>{submit.savedSubmit}</ListItem>;
          })}
        </ListWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  width: 900px;
  height: 100%;
  margin: auto;
  margin-top: 25px;
`;

const Heading = styled.h2`
  font-family: "Dosis", sans-serif;
  font-size: ${30 / 16}rem;
  font-weight: 600;
  color: hsl(148deg 45% 68%);
`;

const ListWrapper = styled.ul``;

const ListItem = styled.li`
  width: max-content;
  height: auto;
  margin-top: 5px;
`;

export default History;
