import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

function Loading() {
  return (
    <div>
      <h4>Loading rooms ... </h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}

export default Loading;
