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
        comments: true,
        candidates: true,
        offers: true,
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <p className="bg-red-800">dfhdsfsfd</p>
            <form onSubmit={submitHandler}>
                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    onChange={changeHandler}
                    name="firstName"
                    value={formData.firstName}
                />

                <br />

                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={changeHandler}
                    name="lastName"
                    value={formData.lastName}
                />

                <br />

                <label htmlFor="email">Email address</label>
                <br />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    name="email"
                    value={formData.email}
                />

                <br />

                <label htmlFor="country">Country</label>
                <br />
                <select
                    name="country"
                    id="country"
                    onChange={changeHandler}
                    value={formData.country}
                >
                    <option value="india">India</option>
                    <option value="us">United States</option>
                    <option value="canada">Canada</option>
                    <option value="mexico">Mexico</option>
                </select>

                <br />

                <label htmlFor="address">Street address</label>
                <br />
                <input
                    type="text"
                    id="address"
                    placeholder="Street address"
                    onChange={changeHandler}
                    name="address"
                    value={formData.address}
                />

                <br />

                <label htmlFor="city">City</label>
                <br />
                <input
                    type="text"
                    id="city"
                    placeholder="City"
                    onChange={changeHandler}
                    name="city"
                    value={formData.city}
                />

                <br />

                <label htmlFor="state">State / Province</label>
                <br />
                <input
                    type="text"
                    id="state"
                    placeholder="State"
                    onChange={changeHandler}
                    name="state"
                    value={formData.state}
                />

                <br />

                <label htmlFor="zip">ZIP / Postal code</label>
                <br />
                <input
                    type="text"
                    id="zip"
                    placeholder="ZIP"
                    onChange={changeHandler}
                    name="zip"
                    value={formData.zip}
                />
            </form>
        </div>
    );
}

export default App;
