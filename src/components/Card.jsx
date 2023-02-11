import React from "react";
import img from "./img/meal-1.jpg";

const Card = ({ heading, para }) => {
  return (
    <>
      <div className="meal">
        <img src={img} className="meal-img" alt="Japanese Gyozas" />
        <div className="meal-content">
          <p className="meal-title">{heading}</p>

          <p className="meal-para">{para}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
