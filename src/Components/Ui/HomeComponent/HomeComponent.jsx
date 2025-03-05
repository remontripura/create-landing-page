import React, { use, useEffect, useState } from "react";
import Banner from "./Banner";
import ImageGallery from "./ImageGallery";

const HomeComponent = () => {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Banner />
      <ImageGallery />
      <div>
        {data?.map(() => (
          <p></p>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
