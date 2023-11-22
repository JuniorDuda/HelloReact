import React from "react";
import './HelloDanger.css';

const HelloDanger = (props) => {
    return <div className="alert">{props.text}</div>
}

export default HelloDanger;