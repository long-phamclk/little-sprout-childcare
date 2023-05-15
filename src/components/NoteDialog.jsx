import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import NoteForm from "./NoteForm";

export default function NoteDialog() {
  return (
    <>
      <Wrapper>
        <TriggerButton>Leave a note</TriggerButton>
        <Portal>
          <Overlay />
          <Content>
            {/* <Title>This is the title</Title> */}
            <NoteForm />
            <CloseButton>Close</CloseButton>
          </Content>
        </Portal>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(Dialog.Root)``;

const TriggerButton = styled(Dialog.Trigger)`
  margin: auto;
  padding: 5px 45px;
  width: max-content;
  border: none;
  background-color: hsl(0deg 0% 85%);
  cursor: pointer;
  font-weight: 600;
  font-size: ${20 / 16}rem;
  border-radius: 10px;
`;

const Portal = styled(Dialog.Portal)`
  width: 100%;

  /* does not auto centering the div
  margin: 500px auto 0 auto;   */
`;

const Overlay = styled(Dialog.Overlay)``;

const Content = styled(Dialog.Content)`
  display: block;
  width: 600px;
  min-height: 300px;
  position: fixed;
  margin: auto;
  top: 150px;
  left: 300px;

  /* left: 250px; */
  background-color: HSL(16deg, 36%, 86%);
`;

const Title = styled(Dialog.Title)`
  font-size: ${26 / 16}rem;
`;

const CloseButton = styled(Dialog.Close)``;
