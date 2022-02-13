import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsData";
import { useDispatch } from "react-redux";
import { AddBasket } from "../../Redux/Action/action";

const SingleProducts = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let addTOcart = () => {
    let item = {
      id: singleProduct.id,
      title: singleProduct.title,
      rating: singleProduct.rating,
      price: singleProduct.price,
      image: singleProduct.image,
      specification: singleProduct.specification,
      detail: singleProduct.detail,
    };
    dispatch(AddBasket(item));
  };
  let singleProduct = products.find(item => item.id === id);
  return (
    <div className="flex mb-[10px] p-[20px] border-4 border-solid border-[#ccc]">
      <img className="w-1/5 h-1/5 mt-6" src={singleProduct.image} alt="" />
      <div className="block mt-2 ml-10">
        <div className="font-bold text-2xl">{singleProduct.title}</div>
        <div className="mt-6 text-[18px] font-bold">
          <span>Rs.</span>
          {singleProduct.price}
        </div>
        <div className="flex mt-6">
          {Array(singleProduct.rating)
            .fill()
            .map((_, index) => (
              <p
                className="text-yellow-500 font-extrabold text-lg flex"
                key={index}
              >
                ⭐
              </p>
            ))}
        </div>
        <div>
          <h1 className="mt-6 font-bold text-[18px]">Specification</h1>
          {singleProduct.specification &&
            singleProduct.specification.map((item, index) => (
              <li className=" font-normal text-[18px] " key={index}>
                {item}
              </li>
            ))}
        </div>
        <div className=" font-normal text-[18px]">
          <h1 className="mt-6 font-bold text-[18px]">Description</h1>
          {singleProduct.detail}
        </div>
        <button
          className="bg-zinc-800 text-white text-[16px] w-32 h-10 mt-6 rounded-md"
          onClick={addTOcart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProducts;
