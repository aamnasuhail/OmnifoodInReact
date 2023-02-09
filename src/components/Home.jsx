import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HeroImg from "./img/hero.png";
const Home = () => {
  return (
    <>
      <Navbar />

      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p class="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>

            <Link to="/" class="btn btn--full margin-right-sm">
              Start Eating Well
            </Link>
            <Link to="/contact" class="btn btn--outline">
              Learn More &darr;{" "}
            </Link>
          </div>
          <div class="hero-img-box">
            <img
              src={HeroImg}
              alt="Woman enjoying food, meals in storage container and food bowls on a table"
              class="hero-img"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
