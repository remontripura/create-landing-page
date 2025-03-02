import React from "react";
import Container from "../../Shared/Container/Container";
import { Images } from "../../../lib/store/image";

const Banner = () => {
  return (
    <div className="w-full py-12 px-3">
      <Container>
        <div className="md:w-1/2 w-full mx-auto text-center">
          <h1 className="font-bold lg:text-[64px] md:text-[48px] text-[44px] leading-[60px]">
            Brand New Group of Architects
          </h1>
          <p className="text-[#727272] my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            eligendi hic, cupiditate praesentium consequatur voluptates magnam
            nam tempore. Minus officia sint vitae nemo sapiente recusandae.
          </p>
          <button className="bg-[#FF900E] px-6 py-4 rounded-lg font-semibold text-white text-[20px]">
            Explore More
          </button>
        </div>
        <img className="mt-12" src={Images.banner} alt="img" />
      </Container>
    </div>
  );
};

export default Banner;
