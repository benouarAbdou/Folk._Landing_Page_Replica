import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Ratings from "./components/ratings.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Ratings />
      </div>
    </BrowserRouter>
  );
}

export default App;
