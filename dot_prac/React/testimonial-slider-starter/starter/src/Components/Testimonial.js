import React, { useState } from "react";
import { Card } from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const Testimonial = (props) => {
    let reviews = props.reviews;

    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) setIndex(reviews.length - 1);
        else setIndex(index - 1);
    }

    function rightShiftHandler() {
        if (index + 1 > reviews.length - 1) setIndex(0);
        else setIndex(index + 1);
    }

    function surpriseHandler() {
        setIndex(Math.floor(Math.random() * reviews.length));
    }

    return (
        <div className="rounded-md hover:shadow-xl w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700">
            <Card review={reviews[index]} />
            <div className="flex text-xl mt-9 gap-3 text-violet-400 font-bold mx-auto">
                <button
                    onClick={leftShiftHandler}
                    className="cursor-pointer hover:text-violet-500"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className="cursor-pointer hover:text-violet-500"
                >
                    <FaChevronRight />
                </button>
            </div>
            <div className="mt-6">
                <button
                    onClick={surpriseHandler}
                    className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
};
