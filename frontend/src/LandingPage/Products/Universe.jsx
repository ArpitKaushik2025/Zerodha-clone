import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center p-5">
      <div className="row">
        <h1 className="mt-5 text-muted">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mb-3">
          <div className="col p-3">
            <img src="/images/zerodhaFundhouse.png" width={200} height={60} />
            <p className="text-small text-muted mt-3 px-5">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col p-3">
            <img src="/images/sensibullLogo.svg" width={200} height={60} />
            <p className="text-small text-muted mt-3 px-5">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col p-3">
            <img src="/images/tijori.svg" width={200} height={60} />
            <p className="text-small text-muted mt-3 px-5">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col p-3">
            <img src="/images/streakLogo.png" width={200} height={60} />
            <p className="text-small text-muted mt-3 px-5">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col p-3">
            <img src="/images/smallcaseLogo.png" width={200} height={60} />
            <p className="text-small text-muted mt-3 px-5">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col p-3">
            <img src="/images/dittoLogo.png" width={200} height={60} />
            <p className="text-small text-muted mt-3 px-5">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <button
            className="p-2 btn btn-primary fs-5 mb-5 mt-4"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
