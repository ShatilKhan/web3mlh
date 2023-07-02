import React from "react";
import styled from "styled-components";
import Button from "./Button.jsx";
import MyText from "./MyText.jsx";

const MyGroupWrapper = styled.div`
  margin-top: 20px;
`;

function MyGroup(props) {
  return (
    <MyGroupWrapper>
      <MyText text={props.text} link={props.link} />
      <Button fcn={props.fcn} buttonLabel={props.buttonLabel} />
    </MyGroupWrapper>
  );
}

export default MyGroup;