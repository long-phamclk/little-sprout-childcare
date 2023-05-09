import styled from "styled-components";
import buttonStyle from "../utils/buttonStyle";
import { Button } from "@mui/material";
import openCLOption from "../utils/openCheckList";
import submitService from "../helpers/submitService";

function SubmitButton() {
  const allChecked = openCLOption.every((option) => option.checked === true);

  const handleCLick = (event) => {
    submitService.addSubmit("Open checklist is submitted at " + new Date());
  };

  return (
    <Wrapper>
      <Button sx={buttonStyle} disabled={!allChecked} onClick={handleCLick}>
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

export default SubmitButton;
