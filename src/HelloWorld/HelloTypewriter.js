import React from "react";
import './HelloTypewriter.css';

const HelloTypewriter = (props) => {
    return <div className="text_box">
                <div className="typewriter"><h1>{props.text}</h1></div>
            </div>
}

export default HelloTypewriter;