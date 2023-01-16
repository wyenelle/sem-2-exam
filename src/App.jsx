import myContext from "./component/context";
import { useState, useEffect, useReducer } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Repo from "./pages/repo/Repo";
import Home from "./pages/Home/Home";
import NotFound from "./component/NotFound/NotFound";
import SubInfo from "./component/info/SubInfo";
import axios from "axios";
import ErrorBoundary from "./component/ErrorBoundary";
import BoundaryTest from "./pages/BoundaryTest";
import About from "./pages/About/About";
// REDUCER FUNCTION
const reducer = (repo, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...repo, data: action.payload };
    case "loading":
      console.log(action.payload)
      return { ...repo, isLoading: action.payload };
    default:
      throw new Error("wrong!!");
  }
};

const initialState = {
  data: "",
  isLoading: true,
};

function App() {
  const [repo, dispatch] = useReducer(reducer, initialState);
  console.log(repo.data)

  useEffect(() => {
    axios
      .get("https://api.github.com/users/wyenelle/repos")
      .then((response) =>
        dispatch({ type: "FETCH_DATA", payload: response?.data })
      );
     fire();
    console.log(repo.isLoading);
  }, []);
  
// FIRES A DISPATCH THAT CHANGES THE STATE
    const fire = ()=> dispatch({type:"loading",payload: false })
  // data aos animate once === data-aos-once ='true'
  // adding accessibility to the project
  //  aria-* HTML attributes aria-label='Increment Something'>
  // 081301
  return (
    <div className="App">
      <div className="w-full"></div>
      <myContext.Provider value={{ repo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repo" element={<Repo />} />
          <Route path="/about/*" element={<About />} />

          <Route path="*" element={<NotFound />} />
          <Route
            path="/boundary"
            element={
              <ErrorBoundary>
                <BoundaryTest />
              </ErrorBoundary>
            }
          />
          
          <Route path="/repo/:id" element={<SubInfo />} />
        </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
