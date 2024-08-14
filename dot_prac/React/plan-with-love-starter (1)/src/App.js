import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "./data";

const App = () => {
    function removeTour(id) {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    const [tours, setTours] = useState(data);

    function refreshHandler() {
        setTours(data);
    }

    if (tours.length === 0) {
        return (
            <div className="refresh">
                <h2>No Tours Left</h2>
                <button className="btn-white" onClick={refreshHandler}>
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div>
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    );
};

export default App;
