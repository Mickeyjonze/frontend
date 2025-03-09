import { useState } from "react";

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");

  const handleCalculate = () => {
    if (!amount || !plan) {
      alert("Please enter an amount and select a plan.");
      return;
    }
    alert(`Calculating earnings for ${amount} with plan ${plan}`);
  };

  return (
    <div className="calculate-area p-4 bg-gray-800 text-white rounded-xl">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block mb-2 ">Amount</label>
            <input
              type="text"
              className="form-input w-full p-2 rounded-lg text-white bg-gray-700"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">Investment Plan</label>
            <select
              className="form-select w-full p-2 rounded-lg text-white bg-gray-700"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              <option value="" disabled>
                Select a plan
              </option>
              <option value="Gold Invest">Gold Invest</option>
              <option value="Platinum Max">Platinum Max</option>
              <option value="Investing">Investing</option>
              <option value="VIP">VIP</option>
              <option value="Binance MAX">Binance MAX</option>
              <option value="BIP MAX">BIP MAX</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleCalculate}
              className="bg-gray-500 text-white py-2 px-4 w-full rounded-lg hover:bg-amber-500"
            >
              Calculate Earning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
