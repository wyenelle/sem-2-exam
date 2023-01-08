import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./SubInfo.css";
import myContext from "../context";
import { FaDesktop, FaLink } from "react-icons/fa";
import img from '../../assets/about/github.png'
const SubInfo = () => {
  const { repo } = useContext(myContext);
  // console.log(repo)

  const { id } = useParams();
  const data = repo.data.find((obj) => obj.id === parseInt(id));
  const {
    owner: { html_url, login, avatar_url },
    visibility,
    name,
    language,
    default_branch,
    clone_url,
    full_name,
  } = data;

  return (
    <section className="info-wrapper text-3xl h-auto  ">
      <div className="px-2 w-full flex justify-between h-20 py-2 w-11/12 mx-auto  items-center">
<img src={img} alt='github' className='github-img'/>
<div className="flex gap-3">
<Link to='/repo' className='font-extrabold text-xl'>Back</Link>
<Link to='/' className='font-extrabold text-xl'>Home</Link>
</div>
</div>
      <div className="subinfo w-11/12 shadow-lg mx-auto">
        <div>
          <div className="px-2 grid grid-cols-4 space-x-6 py-3">
            <div className="col-span-4 sm:col-span-1">
            <div className="w-full flex justify-center items-center h-full ">
              <img
                src={avatar_url}
                alt="photo"
                className="w-40 h-40 info-img"
              />
            </div>
            </div>
            <div className="col-span-4 sm:col-span-3">
            <div className="flex flex-col items-center justify-center h-full border sm:shadow-md" >
              <h1>Favour Timothy</h1>
              <div className="flex items-center  space-x-8 ">
                <p className="text-gray-400 text-xl ">{login}</p>
              </div>
              <h2 className="text-gray-300 text-xl">{html_url}</h2>
            </div>
            </div>
          </div>
          <header className="text-center bg-white pl-3 ">
            <div className="flex items-center px-2 my-2 space-x-3 ">
              <FaDesktop size={20} color="black" />
              <h1 className="text-blue-500">{name}</h1>
            </div>

            <p className="text-gray-400 mb-3 flex w-full">
              <h3 className="text-start ml-9 lang text-xl w-8/12">
                {language === "EJS" ? "Javascript React" : language}{" "}
              </h3>
            </p>
            <div className="flex items-center px-2 space-x-3 ">
              <FaLink size={20} className="text-gray-300" />
              <p className="text-blue-500 text-xl ">{full_name}</p>
            </div>
          </header>
          <div className="flex items-center justify-between w-full bg-white text-xl my-5  px-3 py-2">
            <p className="text-gray-400 flex w-full">
              <h2 className="font-bold text-black">Branch </h2>
              <h3>{`:   ${default_branch}`}</h3>
            </p>
            <p className="text-gray-400 flex w-full">
              <h2 className="font-bold text-black">Visibility </h2>
              <h3>{`: ${visibility}`} </h3>
            </p>
          </div>
        </div>
        <div className="w-full bg-green-600 py-2 text-center">
          <a
            href={clone_url}
            title="clone this repository"
            className=" text-white  font-extrabold text-2xl "
          >
            {" "}
            Clone repo{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubInfo;
