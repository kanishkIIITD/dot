import React from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [form, setForm] = React.useState({
        firsName: "",
        lastName: "",
        email: "",
        createPassword: "",
        confirmPassword: "",
    });

    const [accountType, setAccountType] = React.useState("student");

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    function changeHandler(event) {
        setForm((prev) => {
            return { ...prev, [event.target.name]: event.target.value };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        if (form.createPassword !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created Up");
        navigate("/dashboard");
    }

    return (
        <div>
            <div className="border-b border-richblack-700 flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                    className={`${
                        accountType === "student"
                            ? "bg-richblack-900 text-richblack-5"
                            : "bg-transparent text-richblack-200"
                    } py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}
                >
                    Student
                </button>
                <button
                    onClick={() => setAccountType("instructor")}
                    className={`${
                        accountType === "instructor"
                            ? "bg-richblack-900 text-richblack-5"
                            : "bg-transparent text-richblack-200"
                    } py-2 px-5 rounded-full transition-all duration-200`}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* First and Last Name */}
                <div className="flex gap-x-4 mt-[24px]">
                    <label htmlFor="firsName" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name <sup className="text-pink-200">*</sup>{" "}
                        </p>
                        <input
                            type="text"
                            required
                            placeholder="Enter First Name"
                            value={form.firsName}
                            id="firsName"
                            name="firsName"
                            onChange={changeHandler}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700"
                        />
                    </label>

                    <label htmlFor="lastName" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name <sup className="text-pink-200">*</sup>{" "}
                        </p>
                        <input
                            type="text"
                            required
                            placeholder="Enter Last Name"
                            value={form.lastName}
                            id="lastName"
                            name="lastName"
                            onChange={changeHandler}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700"
                        />
                    </label>
                </div>

                {/* Email and Password */}
                <div className="w-full mt-[24px]">
                    <label htmlFor="email">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Email Address <sup className="text-pink-200">*</sup>{" "}
                        </p>
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="Enter email address"
                        value={form.email}
                        id="email"
                        name="email"
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700"
                    />
                </div>

                {/* Create Password and Confirm Password */}
                <div className="flex gap-x-4 mt-[24px]">
                    <label htmlFor="createPassword" className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password{" "}
                            <sup className="text-pink-200">*</sup>{" "}
                        </p>

                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Enter Password"
                            value={form.createPassword}
                            id="createPassword"
                            name="createPassword"
                            onChange={changeHandler}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700"
                        />

                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[50%]  cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible
                                    fontSize={24}
                                    fill="#AFB2BF"
                                />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>

                    <label
                        htmlFor="confirmPassword"
                        className="w-full relative"
                    >
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password{" "}
                            <sup className="text-pink-200">*</sup>{" "}
                        </p>

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={changeHandler}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-700"
                        />

                        <span
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-3 top-[50%] cursor-pointer"
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible
                                    fontSize={24}
                                    fill="#AFB2BF"
                                />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                </div>

                <button className="mt-6 bg-yellow-50 rounded-[8px] text-richblack-900 w-full font-medium py-[8px] px-[8px]">
                    Create Account
                </button>
            </form>
        </div>
    );
};
