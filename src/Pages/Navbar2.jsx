import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImCart } from "react-icons/im";

const Navbar2 = () => {
  let basket = useSelector(state => state.reducer.basket);
  return (
    <section className="  bg-[#222222] h-20 w-full">
      <article className="w-[95%] m-auto flex items-center h-20">
        <div className=" basis-[25%]">
          <Link to="/">
            <img
              src="logo12.png"
              alt="logo"
              className=" invert-[1] w-[280px]"
            />
          </Link>
        </div>
        <div className="basis-[45%] p-4  ">
          <input
            type="search"
            placeholder="Search your products"
            className="w-full h-10 p-3 rounded-md relative"
          />
          <BsSearch className=" absolute top-[27px] text-black right-[500px] text-[22px]" />
        </div>
        <div className=" basis-[30%]">
          <ul className="flex p-5">
            <li className="mx-2 text-white flex ">
              <FaUserAlt className="text-3xl mx-4 -m-2 fill-yellow-400" />
              <Link to="/register">SignUp</Link>
            </li>
            <li className="mx-2 text-white flex">
              <AiOutlineLogin className="text-3xl mx-4 -m-2 fill-yellow-400" />
              <Link to="/login"> LogIn</Link>
            </li>
            <li className="mx-2 text-white flex">
              <Link to="/checkout">
                <ImCart className="font-bold text-3xl mx-4 -m-2  fill-yellow-400" />
              </Link>
              <sup className=" text-sm">{basket && basket.length}</sup>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar2;
