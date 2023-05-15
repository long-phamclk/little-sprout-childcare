import styled from "styled-components";
import submitService from "../helpers/submitService";
import { useNavigate } from "react-router-dom";
// import dataService from "../helpers/dataService";

export default function SubmitButton({ checkList, listName }) {
  const allChecked = checkList.every((option) => option.checked === true);

  const navigate = useNavigate();
  const handleCLick = (event) => {
    submitService.addSubmit(
      listName + " checklist is submitted at " + new Date()
    );

    navigate("/home");
  };

  return (
    <Wrapper>
      <Button onClick={handleCLick} disabled={!allChecked}>
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
  overflow: hidden;
`;

const Button = styled.button`
  margin: auto;
  padding: 5px 69px;
  width: max-content;
  border: none;
  background-color: hsl(0deg 0% 85%);
  font-weight: 600;
  font-size: ${20 / 16}rem;
  border-radius: 10px;
  color: black;
  cursor: pointer;

  :disabled {
    color: grey;
    cursor: auto;
  }
`;
