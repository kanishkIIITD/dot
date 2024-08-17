import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

export const Product = ({ post }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    function addToCartHandler() {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    function removeFromCartHandler() {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    }
    console.log(post.description.length);

    return (
        <div
            className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
        >
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                    {post.title}
                </p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                    {post.description.length > 100
                        ? post.description.slice(0, 100) + "..."
                        : post.description}
                </p>
            </div>
            <div className="h-[180px]">
                <img
                    src={post.image}
                    alt="Product"
                    className="h-full w-full "
                />
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <p className="text-green-600 font-semibold">${post.price}</p>
                {cart.some((p) => p.id === post.id) ? (
                    <button
                        onClick={removeFromCartHandler}
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
                    >
                        Remove Item
                    </button>
                ) : (
                    <button
                        onClick={addToCartHandler}
                        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};
