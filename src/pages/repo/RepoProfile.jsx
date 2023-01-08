import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import myContext from "../../component/context";

const RepoProfile = () => {
  const { repo } = useContext(myContext);
  console.log(repo.isLoading);

 useEffect(()=>{
    
        console.log(repo.isLoading)
        const data = repo[0];
        // const {owner : {login}} = data
        // console.log(login)
      
     
 },[])

  const styles = {
    borderRadius: "50%",
  };
  return (
    <section className="w-full px-3 py-3 animate-pulse">
      {/* Photo and name  */}
      <div className="grid grid-cols-4  ">
        <div className="col-span-1 md:pl-2 md:mt-3 md:col-span-3 ">
          <div
            style={styles}
            className="photo border-4  w-20 md:w-60  h-20 md:h-60"
          >
            {/* <img src={avatar_url} alt='photo'/> */}
          </div>
        </div>
        <div className="col-span-3 w-full md:mt-3  md:col-span-4  h-full">
          <div className="repo-name flex flex-col h-full  md:items-center justify-center w-full ">
            <h1 className="w-7/12 my-2 bg-gray-300 h-5 "> </h1>
            {/* <p className=" mt-1"> {login}</p> */}
          </div>
        </div>
      </div>
      {/* photo and name ends */}
    </section>
  );
};

export default RepoProfile;
