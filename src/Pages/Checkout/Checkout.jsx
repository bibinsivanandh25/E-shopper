import React from "react";
import { useSelector } from "react-redux";
import SubTotal from "../../Components/Subtotal/SubTotal";
import CheckoutProduct from "./../../Components/CheckoutProduct/CheckoutProduct";

const Checkout = () => {
  let { basket, user } = useSelector(state => state.reducer);
  return (
    <div className="flex border-8 border-solid border-[#ccc] p-[20px]">
      <div className="left">
        <h3 className=" text-[16px] font-bold">Hello,{user?.email}</h3>
        <h2 className=" text-[16px] font-semibold">
          {basket.length === 0 ? "your cart is empty" : "your cart"}
        </h2>
        {basket &&
          basket.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>
      <div className="right w-3/6 h-32 ml-6  shadow-2xl">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
