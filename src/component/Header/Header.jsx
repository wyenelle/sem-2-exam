import React, { useEffect, useReducer } from 'react'
import Navbar from '../navbar/Navbar'
import './Header.css'
const reducer = (state ,action) => {
    switch (action.type) {
        case 'move':
             return state == value.length - 1 ?  state = 0 : state + 1
        default:
            throw new Error('nothing as such ')
    }
}
let count = 0

const value = [
    'Car Hire Services',
    'Auto Dealers',
    'WorkShop'
]
const Header = () => {

    const[state,dispatch] = useReducer(reducer,count)
const change = () => {
let val = document.querySelector('.value')
val.classList.add('slide-in')
console.log(val)
dispatch({type: 'move'})
}
    
    useEffect(()=>{
        let interval = setInterval(()=>{
            change()
        },6000)
        return ()=> clearInterval(interval)
    },[])
  return (
    <header className='header w-full h-screen  '>
        <div className=" flex flex-col   w-full sub-header h-screen">
            <div className="header-nav  w-full">
            <Navbar />
            </div>


            <div className="header-text flex flex-col gap-4 justify-center items-center h-80 m-auto w-11/12  text-center text-white p-4  ">
                <h1 className='text-5xl  font-extrabold'>
                    Welcome to <span className="text-red-500 text-5xl">
                    AutoZone
                    </span>  
                </h1>

                <h3 className='text-3xl m-4  font-bold capitalize value' data-aos='zoom-in' data-aos-delay='7000' data-aos-duration='9000'>
                    {value[state]}
                </h3>
            </div>

        </div>
    </header>
  )
}

export default Header