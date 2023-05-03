import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import BackGroundImg from "../../components/BackGroundImg";
import Footer from "../../components/Footer";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import openCLOption from "../../utils/openCheckList";

function CheckList() {
  const [checkOptions, setCheckOptions] = useState(openCLOption);

  const handleChange = (checkListIndex) => {
    // check the prop we pass in
    // console.log("index", checkListIndex);

    // change the boolean value when click and pass the object back
    checkOptions[checkListIndex].checked =
      !checkOptions[checkListIndex].checked;
    setCheckOptions({ ...checkOptions });

    // call out the table of objects from the openCLOption array
    console.table(checkOptions);
  };

  return (
    <Wrapper>
      <Header />
      <BackGroundImg />
      <FormGroup>
        {openCLOption.map((option) => (
          <FormControlLabel
            key={option.id}
            label={option.title}
            control={<Checkbox checked={option.checked} />}
            onChange={() => {
              handleChange(option.id);
            }}
          />
        ))}
      </FormGroup>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default CheckList;
