import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import heroImage from "../assets/images/hero1.webp";
import grain from "../assets/images/grain.png"; // Import the grain image
import "../styles/heroStyle.css"; // Assuming you have a CSS file for additional styles

function Hero() {
  return (
    <section
      className="relative text-center bg-[#f7f3ef] pb-[40%] px-4"
      style={{
        backgroundImage: `url(${grain})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }}
    >
      {" "}
      {/* Added relative positioning and padding-bottom to create space for absolute image */}
      <div className="mx-auto">
        <h1 className="pt-32 font-uxum normal font-semibold text-4xl md:text-6xl mb-6 md:leading-15">
          Like the{" "}
          <span className="font-instrument italic font-normal">
            sales assistant
          </span>
          <br />
          your team never had
        </h1>

        <p className="font-inter text-md   mb-8">
          Folk CRM does the busy work for you, so you <br /> can focus on
          growing your service business.
        </p>

        <div className="flex justify-center ">
          <Button to="/try-free" variant="filled">
            Try for Free
          </Button>
          <Button to="/demo" variant="outline">
            Get a Demo
          </Button>
        </div>
      </div>
      <img
        src={heroImage}
        alt="Hero"
        className="absolute bottom-0 left-0 w-full h-auto "
      />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black z-10" />
    </section>
  );
}

export default Hero;
