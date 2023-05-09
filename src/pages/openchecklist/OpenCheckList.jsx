import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import openCLOption from "../../utils/openCheckList";
import SubmitButton from "../../components/SubmitButton";
import NoteButton from "../../components/NoteButton";
import { openTemplate } from "../../utils/template";
import CheckList from "../../components/CheckList";

function OpenCheckList() {
  return (
    <>
      <Header />
      <BackGroundImg />
      <Wrapper>
        <Heading>Opening checklist</Heading>
        <StyledFormGroup>
          <CheckList template={openTemplate}></CheckList>
        </StyledFormGroup>
        <ButtonWrapper>
          <NoteButton />
          <SubmitButton />
        </ButtonWrapper>
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

// trying to remove the clickable whitespace around the options

// const FormGroupWrapper = styled.div`
//   display: contents;
//   width: 100%;
// `;

const StyledFormGroup = styled(FormGroup)`
  margin: auto;
  margin-top: 25px;
  width: max-content;
`;

export default OpenCheckList;
