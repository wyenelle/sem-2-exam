import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ErrorBoundary.css'
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true,
    };
  }
  render() {
    const errlink = 'https://reactjs.org/docs/error-boundaries.html'

    if (this.state.hasError) {
      return (
        <div  className='h-screen err flex flex-col justify-center  w-full mx-auto '>
          <div className="  pt-6 backdrop-blur-md w-full h-80 pl-5">
          <h1 className="text-start my-3 font-extrabold text-4xl">Error boundary page</h1>
          <h2 className="text-start my-1 font-bold"> This page is devoted to test our error boundary</h2>
          <p className="text-start my-1 md:w-5/12 w-10/12"> Error boundaries are important in react to help shield the app from displaying error messages due to error at any time to users. It provides a better way to let the user know about inefficiencies in your app. You can read more about Error boundaries <a href={errlink}> <b>here</b></a> </p>
          <div className="flex">
          <Link to='/' className="font-extrabold text-start mt-3  text-xl">Home</Link>
          </div>
          </div>
           
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
