import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";

function History() {
  const checkListHistory = JSON.parse(localStorage.getItem("SubmitList")) || [];
  console.log(checkListHistory);

  // const [checkList, setCheckList] = useState(checkListHistory);

  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <h2>History</h2>
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
  height: auto;
`;

const ListWrapper = styled.ul`
  display: block;
`;

const ListItem = styled.li`
  width: max-content;
  height: auto;
`;

export default History;
