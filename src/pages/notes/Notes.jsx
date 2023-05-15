import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";
import { useState } from "react";
import noteService from "../../helpers/noteService";
import NoteList from "../../components/NoteList";
// import dataService from "../../helpers/dataService";

function Notes() {
  const storedNotes = noteService.getNotes();
  // const storedNotes = dataService.getData();
  const [notes, setNotes] = useState(storedNotes);

  const handleRemoveItem = (id, index) => {
    setNotes(notes.filter((note) => note.id !== id));

    // if the item is found, remove it from the array and save the update array
    if (index !== -1) {
      notes.splice(index, 1);
      localStorage.setItem("NoteList", JSON.stringify(notes));
    }
  };

  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Notes</Heading>
        <NoteList notes={notes} onClick={handleRemoveItem} />
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 25px;
  height: 100%;
`;

const Heading = styled.h2`
  font-family: "Dosis", sans-serif;
  font-size: ${30 / 16}rem;
  font-weight: 600;
  color: hsl(148deg 45% 68%);
`;

export default Notes;
