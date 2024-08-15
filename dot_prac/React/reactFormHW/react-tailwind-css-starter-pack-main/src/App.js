import { React, useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        comments: false,
        candidates: false,
        offers: false,
        push_noti: "",
    });

    function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prev) => {
            return { ...prev, [name]: type === "checkbox" ? checked : value };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
            <form onSubmit={submitHandler} className="space-y-2 flex flex-col">
                <label
                    htmlFor="firstName"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    First Name
                </label>

                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    onChange={changeHandler}
                    name="firstName"
                    value={formData.firstName}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
                />

                <label
                    htmlFor="lastName"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    Last Name
                </label>

                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={changeHandler}
                    name="lastName"
                    value={formData.lastName}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
                />

                <label
                    htmlFor="email"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    Email address
                </label>

                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    name="email"
                    value={formData.email}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
                />

                <label
                    htmlFor="country"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    Country
                </label>

                <select
                    name="country"
                    id="country"
                    onChange={changeHandler}
                    value={formData.country}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 bg-white"
                >
                    <option value="india">India</option>
                    <option value="us">United States</option>
                    <option value="canada">Canada</option>
                    <option value="mexico">Mexico</option>
                </select>

                <label
                    htmlFor="address"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    Street address
                </label>

                <input
                    type="text"
                    id="address"
                    placeholder="Street address"
                    onChange={changeHandler}
                    name="address"
                    value={formData.address}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
                />

                <label
                    htmlFor="city"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    City
                </label>

                <input
                    type="text"
                    id="city"
                    placeholder="City"
                    onChange={changeHandler}
                    name="city"
                    value={formData.city}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
                />

                <label
                    htmlFor="state"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    State / Province
                </label>

                <input
                    type="text"
                    id="state"
                    placeholder="State"
                    onChange={changeHandler}
                    name="state"
                    value={formData.state}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
                />

                <label
                    htmlFor="zip"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                    ZIP / Postal code
                </label>

                <input
                    type="text"
                    id="zip"
                    placeholder="ZIP"
                    onChange={changeHandler}
                    name="zip"
                    value={formData.zip}
                    className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
                />

                <div className="text-sm font-semibold leading-6 text-gray-900">
                    By Email
                </div>

                <div className="mt-4 space-y-2">
                    <div className="flex">
                        <input
                            type="checkbox"
                            name="comments"
                            id="comments"
                            onChange={changeHandler}
                            checked={formData.checked}
                            className="h-4 w-4 rounded"
                        />
                        <div className="ml-3 text-sm leading-6">
                            <label
                                htmlFor="comments"
                                className="font-medium text-gray-900"
                            >
                                Comments
                            </label>
                            <div className="text-gray-500">
                                Get notified when someones posts a comment on a
                                posting.
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <input
                            type="checkbox"
                            name="candidates"
                            id="candidates"
                            onChange={changeHandler}
                            checked={formData.candidates}
                            className="h-4 w-4 rounded"
                        />
                        <div className="ml-3 text-sm leading-6">
                            <label
                                htmlFor="candidates"
                                className="font-medium text-gray-900"
                            >
                                Candidates
                            </label>
                            <div className="text-gray-500">
                                Get notified when a candidate applies for a job.
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <input
                            type="checkbox"
                            name="offers"
                            id="offers"
                            onChange={changeHandler}
                            checked={formData.offers}
                            className="h-4 w-4 rounded"
                        />
                        <div className="ml-3 text-sm leading-6">
                            <label
                                htmlFor="offers"
                                className="font-medium text-gray-900"
                            >
                                Offers
                            </label>
                            <div className="text-gray-500">
                                Get notified when a candidate accepts or rejects
                                an offer.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className=" text-gray-900 text-sm font-semibold contents leading-6">
                        Push Notifications
                    </p>
                    <p className="text-gray-500 text-sm">
                        These are delivered via SMS to your mobile phone.
                    </p>
                </div>

                <div>
                    <input
                        type="radio"
                        name="push_noti"
                        id="Everything"
                        value="Everything"
                        onChange={changeHandler}
                        checked={formData.push_noti === "Everything"}
                        className="h-4 w-4"
                    />
                    <label
                        htmlFor="Everything"
                        className="ml-3 text-sm font-medium leading-6 text-gray-900"
                    >
                        Everything
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        name="push_noti"
                        id="Same-as-email"
                        value="Same-as-email"
                        onChange={changeHandler}
                        checked={formData.push_noti === "Same-as-email"}
                        className="h-4 w-4"
                    />
                    <label
                        htmlFor="Same-as-email"
                        className="ml-3 text-sm font-medium leading-6 text-gray-900"
                    >
                        Same as email
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        name="push_noti"
                        id="No-push-notificatinos"
                        value="No-push-notificatinos"
                        onChange={changeHandler}
                        checked={formData.push_noti === "No-push-notificatinos"}
                        className="h-4 w-4"
                    />
                    <label
                        htmlFor="No-push-notificatinos"
                        className="ml-3 text-sm font-medium leading-6 text-gray-900"
                    >
                        No push notificatinos
                    </label>
                </div>

                <div className="my-3">
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
