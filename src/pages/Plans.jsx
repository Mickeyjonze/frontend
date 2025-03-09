import React from "react";

const Plans = () => {
  const plans = [
    {
      name: "Gold Invest",
      status: "Every Hour",
      minAmount: "100.00 USD",
      maxAmount: "1,000.00 USD",
      duration: "1 Time",
      capitalBack: "Yes",
      roi: "1.00%",
      affiliateBonus: [],
      link: "/login",
    },
    {
      name: "Platinum Max",
      status: "Every Day",
      minAmount: "10.00 USD",
      maxAmount: "100.00 USD",
      duration: "90 Times",
      capitalBack: "No",
      roi: "10.00%",
      affiliateBonus: [],
      link: "/login",
    },
    {
      name: "Investing",
      status: "Every Week",
      minAmount: "1,000.00 USD",
      maxAmount: "2,000.00 USD",
      duration: "Lifetime",
      capitalBack: "No",
      roi: "20.00%",
      affiliateBonus: [],
      link: "/login",
    },
    {
      name: "Gold Invest",
      status: "Every Hour",
      minAmount: "100.00 USD",
      maxAmount: "1,000.00 USD",
      duration: "1 Time",
      capitalBack: "Yes",
      roi: "1.00%",
      affiliateBonus: [
        { level: 1, percentage: "8%" },
        { level: 2, percentage: "12%" },
        { level: 3, percentage: "16%" },
        { level: 4, percentage: "20%" },
        { level: 5, percentage: "30%" },
      ],
      link: "/login",
    },
    {
      name: "Platinum Max",
      status: "Every Day",
      minAmount: "10.00 USD",
      maxAmount: "100.00 USD",
      duration: "90 Times",
      capitalBack: "No",
      roi: "10.00%",
      affiliateBonus: [
        { level: 1, percentage: "8%" },
        { level: 2, percentage: "12%" },
        { level: 3, percentage: "16%" },
        { level: 4, percentage: "20%" },
        { level: 5, percentage: "30%" },
      ],
      link: "/login",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-amber-500 to-gray-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Our Best Plans</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
              <p className="text-amber-400 font-medium">{plan.status}</p>
              <ul className="my-4 space-y-2 text-gray-300 text-left">
                <li>
                  <strong>Minimum:</strong> {plan.minAmount}
                </li>
                <li>
                  <strong>Maximum:</strong> {plan.maxAmount}
                </li>
                <li>
                  <strong>Duration:</strong> {plan.duration}
                </li>
                <li>
                  <strong>Capital Back:</strong> {plan.capitalBack}
                </li>
              </ul>
              <h5 className="text-lg font-medium text-white">Investment ROI</h5>
              <p className="text-3xl font-bold text-amber-400">{plan.roi}</p>
              {plan.affiliateBonus.length > 0 && (
                <div className="mt-6 bg-gray-700 p-4 rounded-lg">
                  <h6 className="text-lg font-semibold mb-2">
                    Affiliate Bonus
                  </h6>
                  <div className="flex flex-wrap justify-center gap-4">
                    {plan.affiliateBonus.map((bonus, i) => (
                      <div
                        key={i}
                        className="text-center bg-gray-800 px-3 py-2 rounded-lg"
                      >
                        <span className="block text-lg font-bold text-amber-400">
                          {bonus.percentage}
                        </span>
                        <p className="text-sm text-gray-400">
                          Level {bonus.level}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <a
                href={plan.link}
                className="block mt-6 px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-500 transition-all duration-300"
              >
                Invest Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
