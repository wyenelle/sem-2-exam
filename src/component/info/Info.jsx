import React, { useContext, useEffect } from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Info = ({ obj, isLoading }) => {
  const { name, id, language,visibility } = obj;
  useEffect(() => {
    AOS.init();
  });
  return (
    <header data-aos="zoom-in" data-aos-duration="600" className="info">
      {!isLoading ? (
        <div className="grid grid-cols-5 ">
          <div className="w-full py-4 col-span-4  px-3">
            <div className="flex items-center">
              <h1 className=" my-2 h-auto capitalize">{name} </h1>
              <p className=" ml-3 h-auto border rounded-lg px-2 py-1"> {visibility} </p>
            </div>
            <div className="flex items-center">
              <p className=" mt-1 ">{language} </p>
             
            </div>
          </div>

          <div className="col-span-1 py-4  ">
            <div className="flex items-center text-start py-2 pr-2">
              <Link to={`/repo/${id}`} className="border rounded-lg px-2 py-1">Open</Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Info;
