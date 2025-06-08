import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
