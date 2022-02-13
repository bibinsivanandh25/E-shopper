import React, { Fragment } from "react";
import Slider from "../Components/Slider/Slider";
import { products } from "../productsData";
import Products1 from "./Products/Products1";
import Container from "./Container1/Container";
import Container2 from "./Container2/Container2";
import Footer from "./FooterComponent/Footer";
const Home = () => {
  return (
    <Fragment>
      <div>
        <Slider />
        <Container />
        <div className="bg-[#efefef] w-full h-auto relative">
          <h3 className=" ml-[66px] className= text-[26px] font-[500] leading-[30px] tracking-widest-[0.2px] mb-[20px] ">
            Latest Products
          </h3>
          <div className=" flex flex-wrap justify-around w-[95%] m-auto bg-white border-t-2 border-solid border-t-[#ccc] pb-[20px] ">
            {products.slice(0, 6).map(item => (
              <Products1
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <Container2 />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
