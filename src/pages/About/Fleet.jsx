import React from "react";
import "./Fleet.css";
import { data } from "./data";
import car1 from "../../assets/cars/car-png-1.png";

const Fleet = () => {
  return (
    <section>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {
              data.map((car,idx) => (
                <div key={idx} className="col-span-1">
                <div className="grid grid-cols-3">
                <div className="col-span-2 bg-black">
                            <div className="car-1 h-80 flex items-center justify-center ">
                              <img src={car.name} alt="img" />
                            </div>
                          </div>
                          <div className="col-span-1 bg-black flex items-center text-white justify-center">
                            <div className=" w-full mx-auto  h-4/5  text-center p-2 rounded-md ">
                              {car.details}
                            </div>
                          </div>
          
                </div>
                    </div>         
                 
          
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default Fleet;
