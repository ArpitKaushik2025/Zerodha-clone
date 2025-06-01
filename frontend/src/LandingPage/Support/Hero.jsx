import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportSection">
      <div className="d-flex justify-content-between">
        <h3 className="fs-4">Support Portal</h3>
        <a href="" style={{ textUnderlineOffset: "5px" }}>
          Track Tickets
        </a>
      </div>
      <div className="row mt-5 mb-5" id="supportContent">
        <div className="col-7">
          <p className="fs-5 mb-4">
            Search for an answer or browse help topics to create a <br />
            ticket
          </p>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            style={{
              width: "100%",
              paddingLeft: "1rem",
              paddingBlock: "0.75rem",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <div className="row mt-3 mb-4">
            <div className="col">
              <a href="">Track account opening</a>
            </div>
            <div className="col">
              <a href="">Track segment activation</a>
            </div>
            <div className="col">
              <a href="">Intraday margins</a>
            </div>
          </div>
          <a href="" className="mb-5">
            Kite user manual
          </a>
        </div>
        <div className="col-5 ps-5 mt-2">
          <p className="fs-5 mb-4">Featured</p>
          <ol>
            <li>
              <a href="" style={{ textUnderlineOffset: 0 }}>
                Introduction of new F&O contracts on 9 individual securities
              </a>
            </li>
            <li>
              <a href="" style={{ lineHeight: 4, textUnderlineOffset: 0 }}>
                Rights Entitlements listing in May 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
