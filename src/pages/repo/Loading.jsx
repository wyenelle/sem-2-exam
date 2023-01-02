import React from 'react'
import './Loading.css'
import { BallTriangle } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="loading">
        <BallTriangle  color='white' height={100} width={100} ariaLabel='ball-triangle-loading'/>
    </div>
  )
}

export default Loading