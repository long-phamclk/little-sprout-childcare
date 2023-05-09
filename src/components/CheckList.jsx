import CheckListItem from "./CheckListItem";
import { useState } from "react";
import styled from "styled-components";
import NoteButton from "./NoteButton";
import SubmitButton from "./SubmitButton";

export default function CheckList({ template, allChecked, handleCLick }) {
  const [checkList, setCheckList] = useState(
    template.map((x) => {
      return { ...x, checked: false };
    })
  );

  function handleCheck(item) {
    const nextChecklist = checkList.map((x, i) => {
      if (x.id === item.id) return { ...x, checked: !x.checked };
      return x;
    });
    setCheckList(nextChecklist);
  }
  // console.log(checklist);
  return (
    <>
      {/* {checklist.map((c) => (
        <CheckListItem
          key={c.id}
          item={c}
          onCheck={handleCheck}
        ></CheckListItem>
      ))} */}

      <CheckListItem checkList={checkList} />
      <ButtonWrapper>
        <NoteButton />
        <SubmitButton onClick={() => handleCLick} disabled={!allChecked} />
      </ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

const Button = styled.button``;
