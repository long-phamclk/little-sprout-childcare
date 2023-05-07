import styled from "styled-components";

function BackGroundImg() {
  return (
    <Wrapper>
      <Img src="src\assets\backgroundimg.png" alt="" />
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
