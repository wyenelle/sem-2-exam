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
  

const bgColor = 'transparent'
const textColor = 'black'
  useEffect(() => {
    let interval = setInterval(() => {
    dispatch({ type: "move" })

    }, 10000);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <header className="header-b w-full h-screen  relative ">
      <div className=" flex flex-col   w-full sub-header md:backdrop-blur-sm h-full">
        <div className="header-nav z-10  w-full">
          <Navbar bgColor={bgColor} textColor={textColor} />
        </div>

        <div className="grid grid-cols-3 h-full relative md:text-black md:h-4/5">
          <div className="hidden md:block col-span-2  " data-aos='fade-right' data-aos-offset='400' data-aos-easing='ease-in-sine'>
            <img src={car} className='car-logo '  />
          </div>

          <div className=" col-span-3 md:col-span-1 header-carousel ">
          <div className="header-text flex flex-col gap-4 justify-center items-center md:items-start h-full md:h-full m-auto w-11/12  text-center text-white p-4  ">
             
              <h1
              data-aos="zoom-in"
              data-aos-delay="7000"
              data-aos-duration="9000"
              className="text-4xl md:text-5xl md:text-black head  w-4/5 text-start head-carousel">
                 {value_lg[state]}
                
              </h1>

              
            </div>
          </div>

          <div className="col-span-3 w-full   absolute bottom-0 header-icon x-10   px-6  h-20">
                <div className="flex justify-between items-center gap-6 py-3">
                <SiAudi size={60} className='text-gray-200   ' />
                <SiNissan size={60} className='text-gray-200   ' />
                <SiToyota size={60} className='text-gray-200   ' />
                <SiChevrolet size={60} className='text-gray-200   ' />
                <SiFord size={60} className='text-gray-200    ' />
                <SiTesla size={60} className='text-gray-200 md:text-black' />
                <SiFerrari size={60} className='text-gray-200 md:text-black' />
                <SiLamborghini size={60} className='text-gray-200 md:text-black' />
                <SiMclaren size={60} className='text-gray-200 md:text-black' />
                </div>
            </div>
        </div>

          
      </div>
    </header>
  );
};

export default Header;
