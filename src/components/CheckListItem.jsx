import styled from "styled-components";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function CheckListItem({ checkList, onCheck }) {
  return (
    <>
      <Wrapper>
        {checkList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.ul``;
