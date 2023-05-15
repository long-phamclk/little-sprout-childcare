import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";

function Login() {
  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper></Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  min-height: 22vh;
`;
export default Login;
