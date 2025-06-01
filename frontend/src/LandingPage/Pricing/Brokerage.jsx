import React from "react";

function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row mt-5">
        <div className="col-8 mt-4 mb-5">
          <a href="" style={{ textDecoration: "none", opacity: 0.8 }}>
            <h3 className="fs-5 text-center">Brokerage calculator</h3>
          </a>
          <ul className="text-muted mt-5">
            <li className="mb-3" style={{ fontSize: "0.9rem" }}>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mb-3" style={{ fontSize: "0.9rem" }}>
              Digital contract notes will be sent via e-mail
            </li>
            <li className="mb-3" style={{ fontSize: "0.9rem" }}>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-3" style={{ fontSize: "0.9rem" }}>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-3" style={{ fontSize: "0.9rem" }}>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-5" style={{ fontSize: "0.9rem" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 mt-4 mb-5">
          <a href="" style={{ textDecoration: "none", opacity: 0.8 }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
