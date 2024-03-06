import React from "react";
import productsData from "../data/productsData";
import ProductsCard from "../components/ProductsCard";
import { CardProd } from "../components/CardProd";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home_content">
            {/* <CardProd/> */}
            {productsData.map((item) => (
              // <ProductsCard key={item.id} {...item} />   
              <CardProd key={item.id} {...item} />   

            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
