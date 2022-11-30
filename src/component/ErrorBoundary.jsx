import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError :false
      }
    }

    static getDerivedStateFromError(err){
        
        return {
            hasError : true
        }
    }


  render() {
    const style = {
      width : '80%',
      height : '70vh',
      textAlign : 'center',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center'
    }
  
    
   if(this.state.hasError) {
    return (
    <div style={style}>
      <h1>
        Oooppsss!!!
      </h1>
      <h2>
        something is not right
      </h2>
<Link className='p-3 bg-orange-300 my-2  text-black' to='/'>Go back Home</Link>
    </div>
    )
   }
   
   return this.props.children
  }
}

export default ErrorBoundary