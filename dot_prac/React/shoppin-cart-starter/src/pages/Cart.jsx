import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div>
            {cart.length > 0 ? (
                <div className="flex max-w-[1200px] mx-auto flex-col md:flex-row justify-center">
                    <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                        {cart.map((item, index) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                itemIndex={index}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col mt-5 w-[100%] md:w-[40%] justify-between max-h-[500px]">
                        <div className="flex flex-col gap-5">
                            <div className="font-semibold text-xl text-green-800">
                                Your Cart
                            </div>
                            <div className="font-semibold text-5xl text-green-700 -mt-5">
                                Summary
                            </div>
                            <p className="text-xl">
                                <span className="text-gray-700 font-semibold text-xl">
                                    Total Items: {cart.length}
                                </span>
                            </p>
                        </div>
                        <div className="text-xl font-bold">
                            <p className="text-gray-700 font-semibold">
                                Total Amount: ${totalAmount}
                            </p>
                            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <h1 className=" text-gray-700 font-semibold text-xl mb-2">
                        Your cart is empty!
                    </h1>
                    <NavLink to={"/"}>
                        <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                            SHOP NOW
                        </button>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Cart;
