import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5 mb-5">
        <div className="col-4 mt-3">
          <h1>Unbeatable pricing</h1>
          <p className="text-muted mt-4 mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6 offset-2">
          <div className="row text-center mb-5">
            <div className="col p-4 border">
              <h1 className="mb-4">&#8377;0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-4 border">
              <h1 className="mb-4">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
