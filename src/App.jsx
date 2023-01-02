import myContext from './component/context'
import { useState,useEffect } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Repo from './pages/repo/Repo'
import Home from './pages/Home/Home'
import NotFound from './component/NotFound/NotFound'
import SubInfo from './component/info/SubInfo'
import axios from 'axios'
import ErrorBoundary from './component/ErrorBoundary'
import BoundaryTest from './component/BoundaryTest'
import About from './pages/About/About'
import Footer from './component/Footer/Footer'

function App() {

  const [repo,setRepo] = useState('')
  const [isLoding,setIsLoading] = useState(true)

  useEffect(()=>{
    axios.get('https://api.github.com/users/wyenelle/repos')
    .then(response => setRepo(response?.data))
  typeof repo === Object &&  setIsLoading(false)
},[])


  return (

    <div className="App">

      <div className="w-full">
        </div>     
      <myContext.Provider value={{repo,isLoding}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/repo/*' element={<Repo />} />
          <Route path='/about/*' element={<About />} />

          <Route path='*' element={<NotFound />} />
          <Route path='/boundary' element={
           <ErrorBoundary> 
          <BoundaryTest />
          </ErrorBoundary>} />
          <Route path='/repo/:id' element={<SubInfo />} />

        </Routes>
        </myContext.Provider>
          </div>
  )
}

export default App
