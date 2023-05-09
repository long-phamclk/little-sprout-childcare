import * as Form from "@radix-ui/react-form";
import noteService from "../helpers/noteService";
import { useState } from "react";

export default function NoteForm() {
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    noteService.addNote(note);
    handleClose();
  };

  return (
    <Form.Root>
      <Form.Field>
        <Form.FormMessage>Please leave a note here</Form.FormMessage>
        <Form.Control asChild>
          <input type="text" onChange={handleChange} />
        </Form.Control>
        {/* <Form.ValidityState /> */}
      </Form.Field>

      {/* <Form.ValidityState /> */}
      <Form.Submit onClick={() => handleSubmit()}>Submit</Form.Submit>
    </Form.Root>
  );
}
