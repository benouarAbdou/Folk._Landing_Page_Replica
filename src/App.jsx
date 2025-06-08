import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Ratings from "./components/ratings.jsx";
import Tips from "./components/tips.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Ratings />
        <Tips />
      </div>
    </BrowserRouter>
  );
}

export default App;
