import React from "react";
import { Route, Routes } from "react-router-dom";
import Conponent from '../components/component'
import Manage_data from '../PageAdmin/Manage_data';
import Administrator from "../PageAdmin/Administrator_status";
import Branch from "../PageAdmin/branch";
import Login from "../components/login";

const router = () => {
    return (
        <Routes>
            <Route path="/conponent" element={<Conponent/>}/>
            <Route path="/Manage_data" element={<Manage_data/>} exact={true}/>
            <Route path="/Administrator" element={<Administrator/>}/>
            <Route path="/branch" element={<Branch/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    )
}

export default router