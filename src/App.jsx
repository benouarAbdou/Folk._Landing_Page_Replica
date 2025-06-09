import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Ratings from "./components/ratings.jsx";
import Tips from "./components/tips.jsx";
import Advantages from "./components/advantages.jsx";
import Qr from "./components/qr.jsx";
import Safety from "./components/safety.jsx";
import ColorfulLine from "./components/colorfulLine.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Ratings />
        <Tips />
        <Advantages />
        <Qr />
        <Safety />
        <ColorfulLine />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
