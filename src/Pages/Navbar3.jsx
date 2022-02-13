import React from "react";
import { Link } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
const Navbar3 = () => {
  return (
    <section className=" bg-[#333333] h-16 w-full ">
      <article className="w-[95%] m-auto flex">
        <div className="basis-[75%] ">
          <ul className="flex  items-center  justify-start h-16 list-none text-white">
            <li className="mx-2 text-[14px] font-bold ml-[35px]">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 text-[15px] font-bold ml-[30px]">
              <Link to="/">Electronics</Link>
            </li>
            <li className="mx-2 text-[15px] font-bold  ml-[30px]">
              <Link to="/">Home Sensor</Link>
            </li>
            <li className="mx-2 text-[15px] font-bold  ml-[30px]">
              <Link to="/">Laptop </Link>
            </li>
            <li className="mx-2 text-[15px] font-bold  ml-[30px]">
              <Link to="/">Speakers</Link>
            </li>
            <li className="mx-2 text-[15px] font-bold  ml-[30px]">
              <Link to="/">Drones</Link>
            </li>
            <li className="mx-2 text-[15px] font-bold  ml-[30px]">
              <Link to="/">Head Phone</Link>
            </li>
            <li className="mx-2 text-[15px] font-bold  ml-[30px]">
              <Link to="/">More</Link>
            </li>
          </ul>
        </div>
        <div className=" basis-[25%] justify-end flex">
          <ul className="flex p-3 text-white">
            <li className="text-3xl mx-4">
              <BsSuitHeart />
            </li>
            <li className="text-3xl mx-4">
              <FaUserAlt />
            </li>
            <li className="text-3xl mx-4">
              <HiOutlineShoppingBag />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar3;
