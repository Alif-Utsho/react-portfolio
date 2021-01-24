import React from "react";
import web from '../Images/img (2).png'
import Common from '../Component/Common'

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/Contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;