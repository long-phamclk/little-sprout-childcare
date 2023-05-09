import { MinusCircledIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

export default function NoteList({ notes, onClick }) {
  return (
    <Wrapper>
      <NoteWrapper>
        {notes.map((note, index) => (
          <ListItem key={note.id}>
            {note.savedNote}
            <IconWrapper>
              <MinusCircledIcon onClick={() => onClick(note.id, index)} />
            </IconWrapper>
          </ListItem>
        ))}
      </NoteWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const NoteWrapper = styled.ul`
  width: 100%;
`;

const ListItem = styled.li``;

const IconWrapper = styled.div`
  float: right;
`;
