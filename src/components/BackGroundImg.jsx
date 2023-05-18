import styled from "styled-components";
import backgroundimg from "../assets/backgroundimg.png";

function BackGroundImg() {
  return (
    <Wrapper>
      <Img src={backgroundimg} alt="Background IMG" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default BackGroundImg;
