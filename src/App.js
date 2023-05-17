import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              index
              exact
              path="/"
              element={
                <Home
                  isDarkMode={isDarkMode}
                  handleThemeChange={handleThemeChange}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <div className={isDarkMode ? "App-dark" : "App-light"}>
        <h1>Light and Dark Theme Example</h1>
        <button onClick={handleThemeChange}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <p>
          This is some sample text that demonstrates the use of light and dark
          themes in a React app.
        </p>
      </div> */}
    </>
  );
}

export default App;
