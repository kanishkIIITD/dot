import React from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [form, setForm] = React.useState({ email: "", password: "" });

    const [showPassword, setShowPassword] = React.useState(false);

    function changeHandler(event) {
        setForm((prev) => {
            return { ...prev, [event.target.name]: event.target.value };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6"
        >
            <label htmlFor="email" className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>{" "}
                </p>
            </label>
            <input
                type="email"
                required
                value={form.email}
                name="email"
                id="email"
                onChange={changeHandler}
                placeholder="Enter email address"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700"
            />

            <label htmlFor="password" className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-200">*</sup>{" "}
                </p>

                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={form.password}
                    name="password"
                    id="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700"
                />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer"
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 ml-auto max-w-max">
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className="mt-6 bg-yellow-50 rounded-[8px] text-richblack-900 w-full font-medium py-[8px] px-[8px]">
                Sign In
            </button>
        </form>
    );
};
