import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    useEffect(() => {}, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route
                    path="/home"
                    element={<HomePage isLoggedIn={isLoggedIn} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
