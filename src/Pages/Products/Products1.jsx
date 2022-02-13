import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddBasket } from "../../Redux/Action/action";
import { toast } from "react-toastify";
const Products1 = ({
  id,
  title,
  price,
  rating,
  specification,
  detail,
  image,
}) => {
  let dispatch = useDispatch();
  let basket = useSelector(state => state.reducer.basket);
  let onAddItem = () => {
    let item = {
      id,
      title,
      price,
      rating,
      specification,
      detail,
      image,
    };
    dispatch(AddBasket(item));
    toast.success(`Successfully added  ${basket && basket.length} to the cart`);
  };

  return (
    <div className="bg-white rounded-md w-[26%] items-center mt-[80px]">
      <div>
        <div className=" ml-[5px]">
          <Link to={`/products/${id}`}>
            <p className=" text-lg text-[20px] mb-[10px] font-bold">{title}</p>
          </Link>
          <p className=" text-[16px]">
            <strong>Rs.</strong>
            <strong>{price}</strong>
          </p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p
                  className="text-yellow-500 font-extrabold text-[18px] mb-[10px]  "
                  key={index}
                >
                  ⭐
                </p>
              ))}
          </div>
        </div>
        <div className="pb-[10px] mb-[20px] bg-[#efefef]">
          <Link to={`/products/${id}`}>
            <img
              className="  h-[300px] m-auto object-contain p-[17px]"
              src={image}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <button
          className="w-full h-10 rounded-md text-white font-bold text-[18px] bg-zinc-800"
          onClick={onAddItem}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Products1;
