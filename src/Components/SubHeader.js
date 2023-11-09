import React from "react";

export default function subHeader(props) {
  return (
    <div>
      <div class="w3l-about-breadcrumb w3l-search-results py-5 text-center">
        <div class="container py-lg-4 py-md-3">
          <ul class="breadcrumbs-custom-path mb-sm-3 mb-2 text-center">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">
              <span class="fa fa-arrow-right mx-2" aria-hidden="true"></span>{" "}
              {props.headerName}{" "}
            </li>
          </ul>
          <h3 class="title-big">{props.headerName}</h3>
        </div>
      </div>
    </div>
  );
}
