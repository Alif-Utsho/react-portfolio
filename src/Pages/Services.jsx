import React from "react";
import Card from "../Component/Card";
import Sdata from "../Component/Sdata"

const Services = () => {
  return (
    <>
      <div className="text-center mb-5">
        <h1>Skills and Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((val, ind) => {
                  return <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    tittle={val.tittle}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
