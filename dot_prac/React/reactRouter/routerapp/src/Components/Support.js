import React from "react";
import { useNavigate } from "react-router-dom";

export const Support = () => {
    const navigate = useNavigate();
    function goBackHandler() {
        navigate(-1);
    }
    return (
        <div>
            <div>Support Page</div>
            <button onClick={goBackHandler}>Go back</button>
        </div>
    );
};
