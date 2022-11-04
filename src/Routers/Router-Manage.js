import React from "react";
import { Route, Routes } from "react-router-dom";
import Conponent from '../components/component'
import Home from '../PageManagent/Home'
import Dashboard from '../PageManagent/dashboard'
import Login from "../components/login";

const router = () => {
    return (
        <Routes>
            <Route path="/conponent" element={<Conponent/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    )
}

export default router