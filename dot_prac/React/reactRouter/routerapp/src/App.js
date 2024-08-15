import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Support } from "./Components/Support";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Labs } from "./Components/Labs";
import { NotFound } from "./Components/NotFound";
import { MainHeader } from "./Components/MainHeader";

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support">Support</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/labs">Labs</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<MainHeader />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/support" element={<Support />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/labs" element={<Labs />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
