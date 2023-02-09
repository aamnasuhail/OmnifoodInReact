import React from "react";

const AboutCard = ({ heading, info, icon }) => {
  return (
    <>
      <div className="feature">
        <ion-icon name={icon}></ion-icon>
        <p className="feature-title">{heading}</p>
        <p className="feature-text">{info}</p>
      </div>
    </>
  );
};

export default AboutCard;
