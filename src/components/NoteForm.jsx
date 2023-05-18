import * as Form from "@radix-ui/react-form";
import noteService from "../helpers/noteService";
import { useState } from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
// import dataService from "../helpers/dataService";

export default function NoteForm() {
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    if (note.length >= 10) {
      noteService.addNote(note);
      // dataService.addData(note);
    }
  };

  return (
    <StyledFormRoot>
      <StyledFormField>
        <StyledFormFormMessage>Please leave a note here</StyledFormFormMessage>
        <StyledFormControl asChild>
          <input type="text" onChange={handleChange} minLength={10} />
        </StyledFormControl>
        <StyledFormMessage match="tooShort">
          Please provide a valid note
        </StyledFormMessage>
      </StyledFormField>
      <StyledFormSubmit onClick={() => handleSubmit()}>Submit</StyledFormSubmit>
      <CloseButton>Close</CloseButton>
    </StyledFormRoot>
  );
}

const StyledFormRoot = styled(Form.Root)``;

const StyledFormField = styled(Form.Field)`
  display: grid;
`;

const StyledFormFormMessage = styled(Form.FormMessage)`
  margin: auto;
  margin-top: 20px;
  font-weight: 600;
`;

const StyledFormControl = styled(Form.Control)`
  width: 300px;
  margin: auto;
  margin-top: 20px;
`;

const StyledFormMessage = styled(Form.Message)`
  margin: auto;
  margin-top: 10px;
`;

const StyledFormSubmit = styled(Form.Submit)`
  margin: 10px 0 0 90px;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled(Dialog.Close)`
  margin-left: 90px;
  border-radius: 5px;
  cursor: pointer;
`;
