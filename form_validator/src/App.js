import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css"; 
import FormValidator from "./components/FormValidator";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <FormValidator />
      <Footer />
    </div>
  );
}

export default App;
