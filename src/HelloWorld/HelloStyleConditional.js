import React from "react";
import './HelloStyleConditional.css';

const HelloStyleConditional = (props) => {
    console.log(props.result);
    return <div className={props.result === "error" ? "error" : "success"}>{props.text}</div>
}

export default HelloStyleConditional;