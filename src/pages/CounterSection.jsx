const CounterSection = ({ stats }) => {
  return (
    <div className="py-12 bg-gradient-to-r from-amber-500 to-yellow-400">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Crypto Investment Stats
          </h2>
          <p className="text-lg text-white/80">
            An overview of our latest financial performance
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] p-6 bg-white shadow-lg rounded-2xl text-center transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-extrabold text-gray-800">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage with dynamic data:
const statsData = [
  { value: "$20M", label: "Total deposit in October 2022" },
  { value: "20K", label: "Total investors in 2022" },
  { value: "$102.5M", label: "Total withdraw in October 2022" },
];

export default function App() {
  return <CounterSection stats={statsData} />;
}
