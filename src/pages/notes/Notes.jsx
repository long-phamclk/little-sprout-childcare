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
  // add notes from localStorage if there is any
  // const [notes, setNotes] = useState([]);
  // useEffect(() => {
  //   const storedItems = localStorage.getItem("notelist");
  //   if (storedItems) {
  //     setNotes(JSON.parse(storedItems));
  //   }
  // }, []);

  // function handleRemoveItem(index) {
  //   notes.splice(index, 1);
  //   setNotes([...notes]);
  // }

  const storedNotes = noteService.getNotes();
  const [notes, setNotes] = useState(storedNotes);

  const handleRemoveItem = (index) => {
    setNotes(notes.splice(index, 1));
  };

  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Notes</Heading>
        <NoteWrapper>
          <List aria-labelledby="basic-list-demo">
            {storedNotes.map((note, index) => (
              <ListItem key={note.id}>
                <ListItemText primary={note.savedNote} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveItem(index)}
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
