import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/support");
    }
    return (
        <div>
            <div>About Page</div>
            <button onClick={clickHandler}>Move to support Page</button>
        </div>
    );
};
