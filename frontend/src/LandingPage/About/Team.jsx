import React from "react";

function Team() {
  return (
    <div className="container mt-5 px-5">
      <hr />
      <div className="row mt-5 text-center mb-4">
        <h1 className="mt-5">People</h1>
      </div>
      <div className="row mb-5 text-muted px-5">
        <div className="col mt-5 mb-5 text-center">
          <img
            src="images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h5 className="text-muted mt-2">Founder, CEO</h5>
        </div>
        <div className="col fs-6 mt-5 mb-5 pe-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
