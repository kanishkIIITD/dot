import { React, useState } from "react";
import "./App.css";

function App() {
    // const [firstName, setFirstName] = useState("");
    // const [secondName, setSecondName] = useState("");
    // function changeFirstNameHandler(event) {
    //     console.log(event.target.value);
    //     setFirstName(event.target.value);
    // }
    // function changeSecondNameHandler(event) {
    //     console.log(event.target.value);
    //     setSecondName(event.target.value);
    // }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isVisible: true,
        mode: "",
        favCar: "",
    });

    function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("Printing form data:");
        console.log(formData);
    }

    return (
        <div className="App">
            <form onSubmit={submitHandler}>
                <br />
                <br />

                <input
                    onChange={changeHandler}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                />

                <br />
                <br />

                <input
                    onChange={changeHandler}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                />

                <br />
                <br />

                <input
                    onChange={changeHandler}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                />

                <br />
                <br />

                <textarea
                    placeholder="Enter your comments here"
                    onChange={changeHandler}
                    name="comment"
                    value={formData.comment}
                ></textarea>

                <br />
                <br />

                <input
                    type="checkbox"
                    name="isVisible"
                    onChange={changeHandler}
                    id="isVisible"
                    checked={formData.isVisible}
                />

                <label htmlFor="isVisible">Am I Visible?</label>

                <br />
                <br />

                <fieldset>
                    <legend>Mode:</legend>
                    <input
                        type="radio"
                        name="mode"
                        onChange={changeHandler}
                        id="Online-Mode"
                        value="Online-Mode"
                        checked={formData.mode === "Online-Mode"}
                    />

                    <label htmlFor="Online-Mode">Online Mode</label>

                    <br />
                    <br />

                    <input
                        type="radio"
                        name="mode"
                        onChange={changeHandler}
                        id="Offline-Mode"
                        value="Offline-Mode"
                        checked={formData.mode === "Offline-Mode"}
                    />

                    <label htmlFor="Online-Mode">Offline Mode</label>
                </fieldset>

                <br />
                <br />

                <label htmlFor="favCar">Tell me your favourite car </label>
                <select
                    name="favCar"
                    id="favCar"
                    value={formData.favCar}
                    onChange={changeHandler}
                >
                    <option value="car1">Car1</option>
                    <option value="car2">Car2</option>
                    <option value="car3">Car3</option>
                    <option value="car4">Car4</option>
                    <option value="car5">Car5</option>
                </select>

                <br />
                <br />

                {/* <input type="submit" value="Submit" /> */}

                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
