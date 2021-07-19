import React from "react";
import emptyImage from "../assets/static/images/empty.png";
import "../assets/styles/components/Empty.scss";

const Empty = () => (
  <div className="empty">
    <img className="empty-img" src={emptyImage} alt="Rick" />
    <span className="empty-text">
      Yo haven't favorites. 
      <br/>
      Go and select your favorite characters
    </span>
  </div>
);

export default Empty;
