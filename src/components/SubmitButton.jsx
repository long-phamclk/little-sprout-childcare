import styled from "styled-components";
import buttonStyle from "../utils/buttonStyle";
import { Button } from "@mui/material";
import openCLOption from "../utils/openCheckList";
import { useState, useEffect } from "react";

function SubmitButton() {
  const [isDisabled, setIsDisabled] = useState(true);

  // make the submit button available when all the options is ticked
  useEffect(() => {
    if (openCLOption.every((option) => option.checked === true)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  });

  const handleCLick = (event) => {
    console.log(event);
  };

  return (
    <Wrapper>
      <Button sx={buttonStyle} disabled={isDisabled} onClick={handleCLick}>
        Submit
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
  max-height: 40px;
  background-color: hsl(0deg 0% 85%);
  border-radius: 10px;
  display: flex;
  margin-left: 50px;
`;

// try to work with html button tag

// const StyledButton = styled.button`
//   font-family: "Dosis", sans-serif;
//   font-size: ${20 / 16}rem;
//   font-weight: 600;
//   margin: auto;
//   line-height: ${26 / 16};
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   width: 100%;
// `;

export default SubmitButton;
