import React from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

export const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <h2>
                    Blogs On{" "}
                    <span>
                        <div id={category}></div>
                    </span>{" "}
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
};
