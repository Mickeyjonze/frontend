import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/Images/hero-bg.jpg";
import TradingViewTicker from "./TradingViewTicker";
import CounterSection from "./CounterSection";
import Plans from "./Plans";
import InvestmentCalculator from "../components/InvestmentCalculator";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center md:justify-start">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>

        {/* Content */}
        <div className="relative p-6 md:p-10 lg:p-16 max-w-2xl text-white z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Welcome to <span className="text-amber-500">CryptoInvest</span>
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed">
            Plan and invest in your future with our tailored investment
            opportunities. Choose a plan and start your journey to success
            today!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/Register")}
              className="px-6 py-3 bg-amber-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-transparent border border-amber-500 text-amber-500 font-bold rounded-lg hover:bg-amber-500 hover:text-black transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <TradingViewTicker />
      <CounterSection />
      <Plans />
      <InvestmentCalculator />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
