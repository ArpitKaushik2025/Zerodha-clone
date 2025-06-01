import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5 mb-5">
        <div className="col">
          <img src="/images/education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col mt-5">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
