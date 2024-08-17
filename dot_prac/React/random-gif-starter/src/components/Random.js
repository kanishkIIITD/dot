import React from "react";
import { Spinner } from "./Spinner";
import { useGif } from "../hooks/useGif";

export const Random = () => {
    const { gif, loading, fetch } = useGif();
    // function clickHandler() {
    //     fetch();
    // }

    return (
        <div className="mt-[15px] flex flex-col items-center w-1/2  bg-green-400 gap-y-10 rounded-lg border border-black">
            <h1 className="text-2xl underline uppercase font-bold">
                A Random Gif
            </h1>

            {loading ? <Spinner /> : <img src={gif} alt="" width="450px" />}

            <button
                onClick={() => fetch()}
                className="w-10/12 bg-yellow-500 py-2 text-lg rounded-lg mb-[20px] hover:bg-yellow-400"
            >
                Generate
            </button>
        </div>
    );
};
