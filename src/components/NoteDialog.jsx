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

const TriggerButton = styled(Dialog.Trigger)``;

const Portal = styled(Dialog.Portal)`
  position: relative;
  width: 600px;

  /* does not auto centering the div
  margin: 500px auto 0 auto;   */
`;

const Overlay = styled(Dialog.Overlay)`
  background-color: red;
`;

const Content = styled(Dialog.Content)`
  display: block;
  width: 600px;
  min-height: 300px;
  position: absolute;
  margin: auto;
  top: 300px;
  background-color: HSL(16deg, 36%, 86%);
`;

const Title = styled(Dialog.Title)`
  font-size: ${26 / 16}rem;
`;

const CloseButton = styled(Dialog.Close)``;
