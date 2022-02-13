import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import BacktoTop from "../BackToTop/BacktoTop";

const Footer = () => {
  return (
    <footer className=" bg-[#222222] w-full h-[600px]">
      <nav className=" w-[90%] m-auto  items-center border-b-2 border-solid border-b-[#4e4e4e]">
        <div className=" flex">
          <div className=" basis-[70%]">
            <img
              src="logo12.png"
              alt="logo"
              className=" invert-[1] w-[250px]"
            />
          </div>
          <div className=" flex basis-[30%] justify-end items-center mt-[93px]">
            <span className=" p-[10px]">
              {
                <BsInstagram className=" text-[30px] invert-[1] hover:text-yellow-300" />
              }
            </span>
            <span className=" p-[10px]">
              {
                <BsFacebook className=" text-[30px] invert-[1] hover:text-yellow-300" />
              }
            </span>
            <span className=" p-[10px]">
              {
                <FaTwitter className=" text-[30px] invert-[1] hover:text-yellow-300" />
              }
            </span>
          </div>
        </div>
      </nav>

      <section>
        <article className=" w-[90%] m-auto flex items-center justify-evenly mt-[50px]">
          <div className=" basis-[30%] ">
            <ul>
              <h2 className=" text-[18px] text-white py-[8px]">My Account</h2>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                My Account
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Order History
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Wish List
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Newsletter
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Returns
              </li>
            </ul>
          </div>
          <div className=" basis-[30%] ">
            <ul>
              <h2 className=" text-[18px] text-white py-[8px]">Information</h2>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                About Us
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Delivery Information
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Privacy Policy
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Terms & Conditions
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Site Map
              </li>
            </ul>
          </div>
          <div className=" basis-[30%] ">
            <ul>
              <h2 className=" text-[18px] text-white py-[8px]">USEFUL LINKS</h2>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                Support
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                About Us
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                {" "}
                Our stores
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                {" "}
                Track Order
              </li>
              <li className=" text-[#888888] py-[6px] hover:text-yellow-300">
                {" "}
                Transfer
              </li>
            </ul>
          </div>
        </article>
      </section>

      <main className="  flex py-[20px] flex-col">
        <div className=" flex justify-end w-[80%] m-auto">
          <span className=" text-[#919496]">
            {<BiGlobe className=" invert-[1] text-[20px]" />}
          </span>
          <h3 className=" text-white mr-[-121px] hover:text-yellow-300">
            India (English)
          </h3>
        </div>
        <div className=" flex justify-between">
          <div className=" ml-[175px]">
            <ul className=" flex">
              <li className=" pl-[10px]">
                <a
                  href="/"
                  className=" text-[18px] text-[#919496] hover:text-yellow-300  "
                >
                  Legal
                </a>
              </li>
              <li className=" pl-[10px]">
                <a
                  href="/"
                  className=" text-[18px] text-[#919496] border-l-2 border-solid border-l-[#ccc] pl-[10px] hover:text-yellow-300"
                >
                  Privacy Center
                </a>
              </li>
              <li className=" pl-[10px]">
                <a
                  href="/"
                  className=" text-[18px] text-[#919496] border-l-2 border-solid border-l-[#ccc] pl-[10px] hover:text-yellow-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li className=" pl-[10px]">
                <a
                  href="/"
                  className=" text-[18px] text-[#919496] border-l-2 border-solid border-l-[#ccc] pl-[10px] hover:text-yellow-300"
                >
                  Cookies
                </a>
              </li>
              <li className=" pl-[10px]">
                <a
                  href="/"
                  className=" text-[18px] text-[#919496] border-l-2 border-solid border-l-[#ccc] pl-[10px] hover:text-yellow-300"
                >
                  About Ads
                </a>
              </li>
            </ul>
          </div>
          <div className=" mr-[29px]">
            <div className=" flex">
              <span className=" px-[8px]">
                {
                  <AiOutlineCopyrightCircle className=" invert-[1] text-[20px]" />
                }
              </span>
              <h2 className=" text-[18px] text-[#919496] hover:text-yellow-300">
                2021 E-Shopper
              </h2>
            </div>
          </div>
        </div>
      </main>
      <BacktoTop />
    </footer>
  );
};

export default Footer;
