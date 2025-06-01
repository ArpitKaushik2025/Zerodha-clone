import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5 border-bottom">
      <div className="text-center text-muted mt-5 py-1">
        <h1 className="mt-5">Zerodha Products</h1>
        <h3 className="fs-5 mb-4 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
