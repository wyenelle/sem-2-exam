import { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import './SubInfo.css'
import myContext from '../context'
import 'aos/dist/aos.css'
import AOS from 'aos'

const SubInfo = () => {
  const {repo} = useContext(myContext)
  // console.log(repo)
  const [topic,setTopic] = useState('')
  const [loading, setLoading] = useState(true)
  const [details,setDetails] = useState('')
const {id} = useParams()
const data = repo.data.find(obj => obj.id === parseInt(id))
const {owner: {html_url,avatar_url},visibility,language,topics,default_branch,created_at,clone_url,full_name,open_issues} = data
let real_name = ''
for(let i of full_name){
  if(i === '/'){
    break
  } 
  else{
    real_name += i
  }
}
useEffect(()=>{
  AOS.init()
})
  return (
    <div className="info-wrapper text-3xl">
      <div className='subinfo'>
      <img data-aos ='zoom-in' data-aos-duration ='1500' src={avatar_url} alt="pics" className='subinfo-img' />
      <header className='subinfo-header'>
      <h1 data-aos ='fade-down'>{real_name}</h1>
      <p> {html_url}</p>
      </header>
      <div className='subinfo-data'>
      <h2> Repository Name : {data.name}</h2>

      <div className="subinfo-details my-3" >
       {
        `
        This repo has 
        ${language} as its core development language. On the ${default_branch} branch is where you can get to see more details about this repository
        `
       }
      <p><span>Date : </span> {created_at} </p>
      <p><span>Visibility : </span> {visibility} </p>
      </div>
      
      <p className='open-issue'>{`${real_name}, you have ${open_issues} open ${open_issues > 1 ? 'issues' : 'issue'}`} </p>

      </div>
      <a href={clone_url} 
      title='clone this repository'
      className='subinfo-btn'> Clone repo </a > 
    </div>
    </div>

  )
}

export default SubInfo