import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import buttonStyle from "../utils/buttonStyle";

function NoteButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [note, setNote] = useState([]);
  const [value, setValue] = useState({});

  const handleChange = (event) => {
    const savedNotes = event.target.value;
    setValue({ ...value, savedNotes });
  };

  const handleSubmit = () => {
    const newNote = [...note, value];
    localStorage.setItem("notelist", JSON.stringify(newNote));

    setNote(newNote);
    handleClose();
  };

  // useEffect(() => {
  //   const storedValue = localStorage.getItem("notes");
  //   if (storedValue) {
  //     setValue(storedValue);
  //   }
  // }, []);

  return (
    <Wrapper>
      <Button sx={buttonStyle} onClick={handleOpen}>
        Leave a note
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please leave a note here if there is any concerns to raise
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
  max-height: 40px;
  background-color: hsl(0deg 0% 85%);
  border-radius: 10px;
  display: flex;
  margin-left: 30px;
`;

//  attempt to style modal button with styled component

// const StyledButton = styled(Button)`
//   font-family: "Dosis", sans-serif;
//   font-size: ${20 / 16}rem;
//   font-weight: 600;
//   line-height: ${26 / 16};
//   width: 100%;
//   color: black;
// `;

export default NoteButton;
