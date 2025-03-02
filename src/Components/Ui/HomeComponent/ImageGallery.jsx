import React from "react";
import Container from "../../Shared/Container/Container";
import image1 from "../../../assets/Image/Gallery/image-1.png";
import image2 from "../../../assets/Image/Gallery/image-2.png";
import image3 from "../../../assets/Image/Gallery/image-3.png";
import image4 from "../../../assets/Image/Gallery/image-4.png";

const ImageGallery = () => {
  return (
    <div className="w-full mb-10">
      <Container>
        <div className="py-[80px] px-3 md:w-11/12 w-full mx-auto">
          <div className="grid grid-cols-12 md:gap-12 gap-0 items-center">
            <div className="md:col-span-7 col-span-12 grid grid-cols-2 gap-4">
             <div className="w-full h-[300px] overflow border">
             <img
                className="rounded-lg h-full w-full object-cover"
                src="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="img"
              />
             </div>
              <img
                className="w full -[300px] border rounded-lg"
                src={image2}
                alt="img"
              />
              <img
                className="w full -[300px] border rounded-lg"
                src={image3}
                alt="img"
              />
              <img
                className="w full -[300px] border rounded-lg"
                src={image4}
                alt="img"
              />
            </div>
            <div className="md:col-span-5 col-span-12 md:mt-0 mt-5">
              <h6 className="text-[45px] text-[#FF900E] font-bold leading-[55px]">
                <span className=" text-[#727272] font-medium ">Quick list</span>{" "}
                <span className="text-black font-bold">of Our</span> Features
              </h6>
              <p className="text-[#727272] my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                eligendi hic, cupiditate praesentium consequatur voluptates
                magnam nam tempore. Minus officia sint vitae nemo sapiente
                recusandae.
              </p>
              <button className="bg-[#FF900E] px-6 py-4 rounded-lg font-semibold text-white text-[20px]">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageGallery;
