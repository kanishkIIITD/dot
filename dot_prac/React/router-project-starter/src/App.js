import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="w-screen h-screen bg-richblack-900 flex flex-col">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route element={<Home isLoggedIn={isLoggedIn} />} path="/" />
                <Route
                    element={<Login setIsLoggedIn={setIsLoggedIn} />}
                    path="/login"
                />
                <Route
                    element={<Signup setIsLoggedIn={setIsLoggedIn} />}
                    path="/signup"
                />
                <Route
                    element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </PrivateRoute>
                    }
                    path="/dashboard"
                />
            </Routes>
        </div>
    );
}

export default App;
