import React from "react";

function Hero() {
  return (
    <div className="container text-center mb-5">
      <div className="row border-bottom mt-5 mb-5 p-5">
        <h1>Pricing</h1>
        <h3 className="mt-3 mb-5 fs-5 text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row mt-5">
        <div className="col p-3">
          <img src="/images/pricingEquity.svg" />
          <h2>Free equity delivery</h2>
          <p className="px-5 text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-3">
          <img src="/images/intradayTrades.svg" />
          <h2>Intraday & F&O trades</h2>
          <p className="px-5 text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-3">
          <img src="/images/pricingEquity.svg" />
          <h2>Free direct MF</h2>
          <p className="px-5 text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
