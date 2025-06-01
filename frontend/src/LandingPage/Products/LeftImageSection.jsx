import React from "react";

function LeftImageSection({
  imageURL,
  productName,
  productDescription,
  link1,
  link2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col p-5">
          <img src={imageURL} />
        </div>
        <div className="col p-5 mt-5">
          <h1 className="text-muted">{productName}</h1>
          <p className="text-muted mt-3">{productDescription}</p>
          <div>
            {link1 != "" ? (
              <a
                href=""
                style={{ textDecoration: "none", marginRight: "5rem" }}
              >
                {link1} <i class="fa-solid fa-arrow-right"></i>
              </a>
            ) : (
              <></>
            )}
            {link2 != "" ? (
              <a href="" style={{ textDecoration: "none" }}>
                {link2} <i class="fa-solid fa-arrow-right"></i>
              </a>
            ) : (
              <></>
            )}
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{ marginRight: "2rem" }}>
              <img src="images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImageSection;
