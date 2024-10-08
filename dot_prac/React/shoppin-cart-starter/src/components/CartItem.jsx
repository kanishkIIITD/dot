import { MdDelete } from "react-icons/md";
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();
    function removeFromCartHandler() {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }
    return (
        <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5">
            <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
                <div>
                    <img
                        src={item.image}
                        alt=""
                        className="object-cover"
                        width={"300px"}
                    />
                </div>
                <div>
                    <h1 className="text-xl text-slate-700 font-semibold">
                        {item.title}
                    </h1>
                    <h1 className="text-base text-slate-700 font-medium">
                        {item.description.length > 100
                            ? item.description.slice(0, 100) + "..."
                            : item.description}
                    </h1>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-lg text-green-600">
                            ${item.price}
                        </p>
                        <div
                            onClick={removeFromCartHandler}
                            className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3 "
                        >
                            <MdDelete className="text-red-800 group-hover:text-white:" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
