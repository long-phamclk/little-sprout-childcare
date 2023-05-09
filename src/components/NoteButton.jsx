import React, { useState } from "react";
import styled from "styled-components";

import NoteDialog from "./NoteDialog";

function NoteButton() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <NoteDialog />
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
