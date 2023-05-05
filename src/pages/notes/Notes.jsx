import React from "react";
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

function Notes() {
  // const storedNotes = JSON.parse(localStorage.getItem("notelist"));
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("notelist");
    if (storedItems) {
      setNotes(JSON.parse(storedItems));
    }
  }, []);

  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Notes</Heading>
        <NoteWrapper>
          {notes.length === 0 ? (
            <p>There is no note</p>
          ) : (
            <List aria-labelledby="basic-list-demo">
              {notes.map((note, index) => (
                <ListItem key={index}>
                  <ListItemText primary={note.savedNotes} />
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
          )}
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
