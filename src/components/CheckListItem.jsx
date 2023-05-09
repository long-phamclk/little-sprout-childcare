import styled from "styled-components";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Checkbox from "@radix-ui/react-checkbox";

export default function CheckListItem({ checkList, onCheck }) {
  return (
    <>
      <Wrapper>
        {checkList.map((item) => (
          <li key={item.id}>
            <CheckBoxWrapper>
              <CheckBox>
                <CheckIcon />
              </CheckBox>
            </CheckBoxWrapper>
            {item.title}
          </li>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.ul``;

const CheckBoxWrapper = styled(Checkbox.Root)`
  display: inline-block;
  width: 15px;
  height: 15px;
`;

const CheckBox = styled(Checkbox.Indicator)`
  width: 100%;
`;
