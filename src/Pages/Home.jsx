import React from "react";
import web from "../Images/img (7).png";
import Common from '../Component/Common'

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/Services"
        btnname="Get Started"
      />

    </>
  );
};

export default Home;
