import React from "react";
import Container from "../../Shared/Container/Container";
import { Images } from "../../../lib/store/image";

const Banner = () => {
  return (
    <div className="w-full">
      <Container>
        <h1>Welcome to our Website</h1>
      <img src={Images.banner} alt="img" />
        <button>Learn More</button>
      </Container>
    </div>
  );
};

export default Banner;
