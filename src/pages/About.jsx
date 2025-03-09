import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-8 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-amber-500 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg mb-10 leading-relaxed text-gray-300">
          Welcome to{" "}
          <span className="font-semibold text-blue-400">CryptoInvest</span>,
          your trusted partner in cryptocurrency investments. We are a team of
          passionate blockchain enthusiasts, financial experts, and tech
          innovators dedicated to providing top-tier insights and tools for the
          evolving crypto market.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-5xl bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold mb-6 text-amber-500">Our Mission</h2>
        <p className="text-lg mb-6 text-gray-300">
          At <span className="text-blue-400 font-semibold">CryptoInvest</span>,
          we strive to empower individuals and businesses with knowledge and
          resources to make informed crypto investment decisions. We believe in
          financial inclusion and the transformative power of blockchain
          technology.
        </p>
      </div>

      {/* What We Offer */}
      <div className="max-w-5xl bg-gray-800 bg-opacity-60 p-8 mt-10 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold mb-6 text-amber-500">
          What We Offer
        </h2>
        <ul className="list-none text-lg space-y-4 text-gray-300">
          {[
            {
              icon: "📈",
              title: "Market Insights & Analysis",
              desc: "Real-time updates, expert analysis, and trend predictions.",
            },
            {
              icon: "💡",
              title: "Investment Strategies",
              desc: "Tailored strategies to navigate market volatility.",
            },
            {
              icon: "🔒",
              title: "Secure Portfolio Management",
              desc: "Reliable tools for managing digital assets.",
            },
            {
              icon: "📚",
              title: "Educational Resources",
              desc: "Learn about blockchain, DeFi, NFTs, and more.",
            },
            {
              icon: "👥",
              title: "Community & Support",
              desc: "Join a thriving investor network.",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-blue-400 text-2xl">{item.icon}</span>
              <span className="font-semibold">{item.title}</span> – {item.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl bg-gray-800 bg-opacity-60 p-8 mt-10 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold mb-6 text-amber-500">
          Why Choose CryptoInvest?
        </h2>
        <ul className="list-none text-lg space-y-4 text-gray-300">
          {[
            {
              icon: "🔐",
              title: "Security First",
              desc: "Your investments are our top priority.",
            },
            {
              icon: "⚖",
              title: "Transparency",
              desc: "No hidden fees, just honest guidance.",
            },
            {
              icon: "🚀",
              title: "Expertise & Innovation",
              desc: "Cutting-edge investment solutions.",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-blue-400 text-2xl">{item.icon}</span>
              <span className="font-semibold">{item.title}</span> – {item.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* Closing Statement */}
      <div className="text-center mt-16">
        <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Invest smart. Invest with confidence. Invest with CryptoInvest.
        </p>
      </div>
    </div>
  );
}

export default About;
