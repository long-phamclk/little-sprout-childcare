import CheckListItem from "./CheckListItem";
import { useState } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

export default function CheckList({ template }) {
  const [checklist, setCheckList] = useState(
    template.map((x) => {
      return { ...x, checked: false };
    })
  );

  function handleCheck(item) {
    const nextChecklist = checklist.map((x, i) => {
      if (x.id === item.id) return { ...x, checked: !x.checked };
      return x;
    });

    setCheckList(nextChecklist);
  }
  return (
    <>
      {checklist.map((c) => (
        <CheckListItem
          key={c.id}
          item={c}
          onCheck={handleCheck}
        ></CheckListItem>
      ))}
      <ButtonWrapper>
        <NoteButton />
        <Button disabled={!allChecked} onClick={handleCLick}>
          Submit
        </Button>
      </ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;
