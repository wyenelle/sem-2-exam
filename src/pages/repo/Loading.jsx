import React from 'react'
import './Loading.css'

const Loading = () => {
  const arr = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className="loading w-full px-2 rounded-md shadow-md my-2 py-4">
        {
          arr.map(num => (
            <div key={num} className="grid grid-cols-5 animate-pulse">
            <div className="w-full py-4 col-span-4  px-3">
         <div className="flex items-center">
         <h1 className="w-6/12 bg-gray-300 my-2 h-5"></h1>
         <p className="bg-gray-300 w-3/12 ml-3 h-5"> </p>
         </div>
          <div className="flex items-center">
          <p className="w-4/12 bg-gray-300 h-3 mt-1"></p>
          <p className="w-4/12 ml-3 bg-gray-300 h-3 mt-1"></p>
          </div>
        </div>
          {/* col 1 ends */}
          <div className="col-span-1 py-4  ">
          <div className="flex items-center text-start py-2 pr-2">
          <p className="bg-gray-300 w-full  h-5"> </p>
          </div>
          </div>

            </div>
          ))
        }
        


        
    </div>
  )
}

export default Loading