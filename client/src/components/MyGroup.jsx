import React from "react";
import Button from "./Button.jsx";
import MyText from "./MyText.jsx";

function MyGroup(props) {
	return (
		<div>
			<MyText text={props.text} link={props.link} />
			<Button fcn={props.fcn} buttonLabel={props.buttonLabel} />
		</div>
	);
}

export default MyGroup;