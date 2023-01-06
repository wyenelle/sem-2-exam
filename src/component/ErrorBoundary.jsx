import React, { Component } from "react";
import { Link } from "react-router-dom";
import movingCar from '../assets/cars/moving-car.png'
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
    const style = {
      width: "80%",
      height: "70vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    };

    if (this.state.hasError) {
      return (
        <div style={style} className='h-screen mx-auto w-full border-4 border-red-500'>
          <div className="my-6 border-4 pt-6 border-black w-4/5 h-3/5 mx-auto">
          <Link className=" " to="/">
          <h1>Sum's just Happened Here</h1>
          <h2>This page is devoted to test our error boundary</h2>
          <p className="capitalize mt-4">Touch anywhere on the screen  to go back home </p>
          </Link>
          </div>
           
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
