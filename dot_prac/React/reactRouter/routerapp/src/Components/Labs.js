import React from "react";
import { useNavigate } from "react-router-dom";

export const Labs = () => {
    const navigate = useNavigate();

    function clickHandler() {
        navigate("/about");
    }
    return (
        <div>
            <div>Labs Page</div>
            <button onClick={clickHandler}>Move to about Page</button>
        </div>
    );
};
