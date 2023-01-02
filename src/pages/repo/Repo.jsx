import { useEffect, useState,useContext } from 'react'
import Info from '../../component/info/Info'
import Pagination from '../../component/Pagination/Pagination'
import ErrorBoundary from '../../component/ErrorBoundary'
import myContext from '../../component/context'
import './Repo.css'
import Loading from './Loading'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

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
      <Helmet>

        <title> Repo List</title>
        <meta name='description' content=' wyenelle github repo list'  />
        <link rel='canonical' href='/repo' />
      </Helmet>
      <div className="repo flex flex-col ">
        <div className="repo-style">
        {isLoding && repo.length <= 1 ? <Loading /> : (
    current_post.map( obj =><ErrorBoundary><Info isLoding={isLoding} obj={obj} repo={repo} key={obj.id} /></ErrorBoundary> )
)}
          <Link id='repo-home-button' to='/'> Home </Link>
        </div>

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