import React from "react";

const Container = () => {
  return (
    <main className="bg-[#efefef] w-full h-[400px]">
      <aside className="w-[95%] mx-auto mt-[70px] bg-white  h-[330px] p-[20px]">
        <div className=" border-b-2 border-b-solid border-b-[#d9d9d9]">
          <h2 className=" text-[26px] font-[500] leading-[30px] tracking-widest-[0.2px] mb-[16px]">
            Top Categories
          </h2>
        </div>
        <div className=" flex items-center justify-around bg-text-[#ffd21d]">
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category1.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Head Phone
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category2.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Smart Phone
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category3.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Smart Watch
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category4.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Light Lamb
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category5.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Digital Camera
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category6.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Kitchen Products
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category7.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Music Products
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="border-2 border-solid border-[#efefef] bg-[#efefef] p-[20px]">
              <img src="/category8.png" alt="category" />
            </div>
            <h3 className=" text-center text-[15px] font-bold mt-[10px] hover:text-yellow-300">
              Video Game
            </h3>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Container;
