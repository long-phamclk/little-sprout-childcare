import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import noteService from "../../helpers/noteservices";

function Notes() {
  const storedNotes = noteService.getNotes();
  const [notes, setNotes] = useState(storedNotes);

  const handleRemoveItem = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Notes</Heading>
        <NoteWrapper>
          <List aria-labelledby="basic-list-demo">
            {notes.map((note) => (
              <ListItem key={note.id}>
                <ListItemText primary={note.savedNote} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveItem(note.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </NoteWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  max-width: 900px;
  height: auto;
  margin: auto;
  margin-top: 25px;
`;

const Heading = styled.h2`
  font-family: "Dosis", sans-serif;
  font-size: ${30 / 16}rem;
  font-weight: 600;
  color: hsl(148deg 45% 68%);
`;

const NoteWrapper = styled.ul``;

export default Notes;
