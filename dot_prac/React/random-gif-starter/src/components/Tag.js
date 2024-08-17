import React, { useState } from "react";
import { Spinner } from "./Spinner";
import { useGif } from "../hooks/useGif";

export const Tag = () => {
    const [tag, setTag] = useState("");

    const { gif, loading, fetch } = useGif(tag);

    return (
        <div className="mt-[15px] flex flex-col items-center w-1/2  bg-blue-400 gap-y-10  rounded-lg border border-black">
            <h1 className="text-2xl underline uppercase font-bold">
                Random {tag} Gif
            </h1>

            {loading ? <Spinner /> : <img src={gif} alt="" width="450px" />}

            <input
                type="text"
                className="w-10/12 py-2 text-lg rounded-lg mb-[3px] text-center"
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button
                onClick={() => fetch(tag)}
                className="w-10/12 bg-yellow-500 py-2 text-lg rounded-lg mb-[20px] hover:bg-yellow-400"
            >
                Generate
            </button>
        </div>
    );
};
