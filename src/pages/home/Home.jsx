import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Welcome to Little Sprouts Childcare Center</Heading>
        <Article>
          Welcome, Educators! At Little Sprouts Childcare Child Care Center, we
          provide a nurturing environment for children to learn, grow, and
          thrive. Our experienced staff is dedicated to helping each child reach
          their full potential through engaging activities, hands-on learning,
          and play. As an educator, you play a critical role in shaping young
          minds, and we're excited to work with you to provide the best possible
          care for the children in our community.
        </Article>
        <LineBox></LineBox>
        <ListButtonWrapper>
          <ListButton to="/openchecklist">Opening Checklist</ListButton>
          <ListButton to="/closechecklist">Closing Checklist</ListButton>
        </ListButtonWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  display: block;
`;

const Heading = styled.h2`
  display: block;
  font-size: ${35 / 16}rem;
  font-weight: 600;
  color: hsl(148deg 45% 68%);
  margin: 0 auto;
  margin-top: 50px;
  width: fit-content;
`;

const Article = styled.article`
  display: flex;
  font-size: 1rem;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  line-height: ${26 / 16};
`;

const LineBox = styled.div`
  width: 265px;
  height: 110px;
  border-bottom: 2px solid black;
  margin: auto;
`;

const ListButtonWrapper = styled.div`
  display: flex;
  max-width: 650px;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 50px;
`;

const ListButton = styled(Link)`
  font-family: "Dosis", sans-serif;
  font-size: ${25 / 16}rem;
  font-weight: 600;
  padding: 15px 40px;
  background-color: hsl(0deg 0% 85%);
  width: 285px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
`;

export default Body;
