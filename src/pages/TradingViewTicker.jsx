import { useEffect, useRef } from "react";

const TradingViewTicker = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100" },
        { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });

    containerRef.current.innerHTML = ""; // Prevents duplicate scripts
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      <div className="tradingview-widget-container__widget w-full"></div>
      <div className="tradingview-widget-copyright text-gray-400 text-sm mt-2">
        <a
          href="https://www.tradingview.com/markets/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Markets today
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
};

export default TradingViewTicker;
