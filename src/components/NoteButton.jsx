import React, { useState } from "react";
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
import noteService from "../helpers/noteService";

function NoteButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [note, setNote] = useState("");

  const noteChanged = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    noteService.addNote(note);
    handleClose();
  };

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
            onChange={noteChanged}
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

export default NoteButton;
