import React from "react";
const props = { name: "fave", age: 10, hobby: "football" };

const {hobby,age} = props
console.log(hobby,age)

const Tosin = ({name,isPacked}) => {
  return <h1>{name}</h1>
  
}
