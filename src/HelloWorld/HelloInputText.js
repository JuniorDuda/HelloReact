import React from "react";

const HelloInputText = (props) => {
    return <div>
            <input type="text" value={props.text} readOnly />
        </div>;
};

export default HelloInputText;
