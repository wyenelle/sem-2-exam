import React, { useEffect, useReducer } from "react";
import Navbar from "../navbar/Navbar";
import car from '../../assets/cars/photo-car.png'
import "./Header.css";
import {
  SiAudi,
  SiToyota,
  SiNissan,
  SiTesla,
  SiFord,
  SiChevrolet,
  SiFerrari,
  SiLamborghini,
  SiMclaren,
} from "react-icons/si";

const reducer = (state, action) => {
  switch (action.type) {
    case "move":
      return state == value.length - 1 ? (state = 0) : state + 1;
    default:
      throw new Error("nothing as such ");
  }
};
let count = 0;

const value = ["Car Hire Services", "Auto Dealers", "WorkShop"];
const value_lg = ['We offer the best Car Hire Services in the whole of West Africa ',
'We are also the best Auto Dealers in the region',
'Well equipped WorkShop for Car fixes '
]
const Header = () => {
  const [state, dispatch] = useReducer(reducer, count);
  const change = () => {
    let val = document.querySelector(".value");
    val.classList.add("slide-in");
    console.log(val);
    dispatch({ type: "move" });
  };
const bgColor = 'transparent'
const textColor = 'black'
  useEffect(() => {
    let interval = setInterval(() => {
      change();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="header w-full h-screen  md:h-auto md:bg-none h-screen  ">
      <div className=" flex flex-col   w-full sub-header h-screen md:h-auto">
        <div className="header-nav  w-full">
          <Navbar bgColor={bgColor} textColor={textColor} />
        </div>

        <div className="grid grid-cols-3 relative md:text-black md:h-4/5">
          <div className="hidden md:block col-span-2  header-bg">
            <img src={car} className='car-logo' />
          </div>

          <div className=" col-span-3 md:col-span-1 ">
          <div className="header-text flex flex-col gap-4 justify-center items-center md:items-start h-60 md:h-full m-auto w-11/12  text-center text-white p-4  ">
              <h1 className="text-5xl md:text-black head  md:hidden">
                Welcome to{" "}
                <span className="text-red-500  text-5xl">AutoZone</span>
              </h1>
              <h1
              data-aos="zoom-in"
              data-aos-delay="7000"
              data-aos-duration="9000"
              className="text-5xl md:text-black head hidden md:block w-4/5 text-start head-carousel">
                 {value_lg[state]}
                
              </h1>

              <h3
                className="text-3xl m-4 md:hidden  font-bold md:text-black capitalize value"
                data-aos="zoom-in"
                data-aos-delay="7000"
                data-aos-duration="9000"
              >
                {value[state]}
              </h3>
            </div>
          </div>

          <div className="col-span-3 w-full     px-6  h-20">
                <div className="flex justify-between items-center gap-6 py-3">
                <SiAudi size={40} className='text-black ' />
                <SiNissan size={40} className='text-black ' />
                <SiToyota size={40} className='text-black ' />
                <SiChevrolet size={40} className='text-black ' />
                <SiFord size={40} className='text-black ' />
                <SiTesla size={40} className='text-black ' />
                <SiFerrari size={40} className='text-black ' />
                <SiLamborghini size={40} className='text-black ' />
                <SiMclaren size={40} className='text-black ' />
                </div>
            </div>
        </div>

          
      </div>
    </header>
  );
};

export default Header;
