import { useEffect, useState,useContext } from 'react'
import Info from '../../component/info/Info'
import Pagination from '../../component/Pagination/Pagination'
import ErrorBoundary from '../../component/ErrorBoundary'
import myContext from '../../component/context'
import './Repo.css'
import Loading from './Loading'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import RepoProfile from './RepoProfile'
import img from '../../assets/about/github.png'
const Repo = () => {
    const {repo,isLoding} = useContext(myContext)
    console.log(repo);


    // creating pagination here
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 4
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    // Pagination starts here
    const index_of_last_post = currentPage * postPerPage
    const index_of_first_post = index_of_last_post - postPerPage

    const current_post = repo.slice(index_of_first_post,index_of_last_post)

    


  return (
    <main>
      {/* SEO in this Helmet */}
      <Helmet>

        <title> Githun Repository Page</title>
        <meta name='description' content=' Github repository for wyenelle'  />
        <link rel='canonical' href='/repo' />
      </Helmet>

<div className="px-2 w-full flex justify-between h-20 py-2 border-4 items-center">
<img src={img} alt='github' className='github-img'/>
<Link to='/' className='font-extrabold '>Home</Link>
</div>
      <div className="repo grid grid-cols-4  ">
      <div className="col-span-4 hidden md:block">
          <div className="grid grid-cols-12">
            <div className="col-span-3">

            </div>
            <div className="col-span-9">
            <h1 className="font-extrabold text-xl text-gray-400 shadow-md  px-4 mt-5 "> Repositories</h1>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1">
          <RepoProfile/>
        </div>
        <div className="col-span-4 md:hidden">
          <h1 className="font-extrabold text-xl text-gray-400 shadow-md  px-4 mt-5 "> Repositories</h1>
<p className="h-1 bg-red-500 ml-4 w-2/12"></p>
        </div>
        <div className="repo-style w-full col-span-4 md:col-span-3 ">
        {isLoding && repo.length <= 1 ? <Loading /> : (
    current_post.map( obj =><ErrorBoundary><Info isLoding={isLoding} obj={obj} repo={repo} key={obj.id} /></ErrorBoundary> )
)}
        </div>
          <Link id='repo-home-button' to='/'> Home </Link>


      </div>
    <Pagination 
    postPerPage={postPerPage}
    totalPost={repo.length}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    paginate={paginate}
    />
    </main>
  )
}

export default Repo 