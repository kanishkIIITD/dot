import React from "react";

export const Card = ({ post }) => {
    return (
        <div>
            <p className="font-bold text-lg ">{post.title}</p>
            <p className="text-sm mt-[4px]">
                By <span className="italic">{post.author}</span> on{" "}
                <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
                {post.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-blue-700 underline font-bold text-xs mt-[5px]"
                    >{`#${tag}`}</span>
                ))}
            </div>
        </div>
    );
};
