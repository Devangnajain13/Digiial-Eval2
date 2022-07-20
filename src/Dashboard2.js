import React, { Component } from "react";
import Navdash1 from "./Navdash1";
import Login from "./Login";
// import Navdemo from "./Navdemo";
// import Admindash from "./Admindash";
import Adashboard from "./Adashboard";
import Fprofile from "./Fprofile";
import Question_paper from "./Question_paper";
import { BrowserRouter, Route,Routes } from "react-router-dom";
// import Kaddu from "./Kaddu";
// import { render } from "@testing-library/react";
class Dashboard2 extends Component{
    render()
    {
        return (
            <BrowserRouter>
            <Navdash1/>
            <Routes>
                /* <Route path="/Login" element={<Login/>}/>
                {/* <Route path="/login" element={<Navdemo/>}/> */}

                <Route path="/Question_paper" element={<Question_paper/>}/>
                <Route path="/Adashboard" element={<Adashboard/>}/>
                <Route path="/Fprofile" element={<Fprofile/>}/>
                </Routes>
                </BrowserRouter>
        );
    }
}
export default Dashboard2;