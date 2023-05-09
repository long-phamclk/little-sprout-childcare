import * as Form from "@radix-ui/react-form";
import noteService from "../helpers/noteService";
import { useState } from "react";

export default function NoteForm() {
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    if (note.length >= 10) {
      noteService.addNote(note);
    }
  };

  return (
    <Form.Root>
      <Form.Field>
        <Form.FormMessage>Please leave a note here</Form.FormMessage>
        <Form.Control asChild>
          <input type="text" onChange={handleChange} minLength={10} />
        </Form.Control>
        <Form.Message match="tooShort">
          Please provide a valid note
        </Form.Message>
      </Form.Field>
      <Form.Submit onClick={() => handleSubmit()}>Submit</Form.Submit>
    </Form.Root>
  );
}
