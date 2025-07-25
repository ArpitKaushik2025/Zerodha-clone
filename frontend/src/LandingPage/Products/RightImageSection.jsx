import React from "react";

function RightImageSection({
  imageURL,
  productName,
  productDescription,
  link1,
  link1_URL,
  link2,
  link2_URL,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col p-5 mt-5">
          <h1 className="text-muted">{productName}</h1>
          <p className="text-muted mt-3">{productDescription}</p>
          <div>
            {link1 != "" ? (
              <a
                href={link1_URL}
                style={{ textDecoration: "none", marginRight: "5rem" }}
              >
                {link1} <i class="fa-solid fa-arrow-right"></i>
              </a>
            ) : (
              <></>
            )}
            {link2 != "" ? (
              <a href={link2_URL} style={{ textDecoration: "none" }}>
                {link2} <i class="fa-solid fa-arrow-right"></i>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightImageSection;
