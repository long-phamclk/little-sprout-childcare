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
              <StyledIcon onClick={() => onClick(note.id, index)} />
            </IconWrapper>
          </ListItem>
        ))}
      </NoteWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const NoteWrapper = styled.div`
  width: 100%;
`;

const ListItem = styled.li`
  font-size: ${20 / 16}rem;
  margin-top: 5px;
`;

const IconWrapper = styled.div`
  float: right;
`;

const StyledIcon = styled(MinusCircledIcon)`
  width: 20px;
  height: 20px;
`;
