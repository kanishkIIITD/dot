import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card } from "./Card";
import { Spinner } from "./Spinner";

export const Blogs = () => {
    const { loading, posts } = useContext(AppContext);
    return (
        <div className="w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[160px] mb-[160px]  justify-center items-center">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div>No posts yet</div>
            ) : (
                posts.map((post) => <Card post={post} key={post.id} />)
            )}
        </div>
    );
};
