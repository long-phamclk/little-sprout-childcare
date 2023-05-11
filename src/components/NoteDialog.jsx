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

const Wrapper = styled(Dialog.Root)`
  display: block;
`;

const TriggerButton = styled(Dialog.Trigger)``;

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
