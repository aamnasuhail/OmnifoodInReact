import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Product = () => {
  const product = [
    {
      heading: "Japanese Gyozas",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam dolorem ex laborum nihil veniam, distinctio saepe illum at cupiditate ut minima. Ad cupiditate voluptatibus mollitia odit at repellendus veniam. ",
    },

    {
      heading: "Avocado Salad",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam dolorem ex laborum nihil veniam, distinctio saepe illum at cupiditate ut minima. Ad cupiditate voluptatibus mollitia odit at repellendus veniam. act",
    },
    {
      heading: "Japanese Gyozas",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam dolorem ex laborum nihil veniam, distinctio saepe illum at cupiditate ut minima. Ad cupiditate voluptatibus mollitia odit at repellendus veniam. ",
    },

    {
      heading: "Avocado Salad",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam dolorem ex laborum nihil veniam, distinctio saepe illum at cupiditate ut minima. Ad cupiditate voluptatibus mollitia odit at repellendus veniam. act",
    },
    {
      heading: "Japanese Gyozas",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam dolorem ex laborum nihil veniam, distinctio saepe illum at cupiditate ut minima. Ad cupiditate voluptatibus mollitia odit at repellendus veniam. ",
    },

    {
      heading: "Avocado Salad",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam dolorem ex laborum nihil veniam, distinctio saepe illum at cupiditate ut minima. Ad cupiditate voluptatibus mollitia odit at repellendus veniam. act",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="product">
        <div className="container grid grid--3--cols ">
          {product.map((item, idx) => {
            return <Card key={idx} heading={item.heading} para={item.para} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
