import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutCard from "./AboutCard";

const About = () => {
  const aboutData = [
    {
      icon: "infinite-outline",
      heading: "Never cook again!",
      info: "Our subscriptions cover 365 days per year, even including major holidays.",
    },
    {
      icon: "nutrition-outline",
      heading: "Local and organic",
      info: " Our cooks only use local, fresh, and organic products to prepare your meals.",
    },
    {
      icon: "leaf-outline",
      heading: "No waste",
      info: "All our partners only use reusable containers to package all your meals.",
    },
    {
      icon: "pause-outline",
      heading: "Pause anytime",
      info: " Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container grid grid--4--cols">
        {aboutData.map((item, idx) => {
          return (
            <AboutCard
              key={idx}
              icon={item.icon}
              heading={item.heading}
              info={item.info}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default About;
