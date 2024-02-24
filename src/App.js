import "./App.css";
import {Route, Routes } from "react-router-dom";
import  Home  from "./Pages/Home"
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/auth/OpenRoute"

import Login from "./Pages/Login"
import Signup from './Pages/Signup'



function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route
        path="signup"
        element={
          <OpenRoute>
            <Signup/>
          </OpenRoute>
        }>  
      </Route>
      <Route
           path="login"
           element={
            <OpenRoute>
              <Login/>
            </OpenRoute>
           }>
        

      </Route>
    </Routes>
   </div>
  );
}

export default App;
