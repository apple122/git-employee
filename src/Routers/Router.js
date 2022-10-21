import React from "react";
import { Route, Routes } from "react-router-dom";
import Manage_data from "../pages/Manage_data";
import Register_sales from "../pages/Register_sales";
import History_revoke from "../pages/History_revoke";
import Move from "../pages/Move";
import Salses from "../pages/Sales";
import Manage_revoke from "../pages/Manage_revoke";
import Payment_unit from "../pages/Payment_unit";
import No_payment from "../pages/No_payment";
import Payment_machine from "../pages/Payment_machine";
import Report from "../pages/Report";
import Report_profit from "../pages/Event-popup/Report-profit";
import Statement_of_income from "../pages/Event-popup/Statement-of-income";
import Report_sales from "../pages/Event-popup/Report-sales";
import Report_sales_least from "../pages/Event-popup/Report-sales-least";
import Report_machine from "../pages/Event-popup/Report-machine";
import Unit from "../pages/Unit";
import Vending_machine from "../pages/Vending_machine";
import Login from "../components/login";
import History_Move from "../pages/History_Move";

const router = () => {
    return (
        <Routes>
            <Route path="/Manage_data" element={<Manage_data/>}/>
            <Route path="/Register_sales" element={<Register_sales/>}/>
            <Route path="/History_revoke" element={<History_revoke/>}/>
            <Route path="/History_Move" element={<History_Move/>}/>
            <Route path="/Move" element={<Move/>}/> 
            <Route path="/Sales" element={<Salses/>}/>
            <Route path="/Manage_revoke" element={<Manage_revoke/>}/>
            <Route path="/Payment_unit" element={<Payment_unit/>}/>
            <Route path="/No_payment" element={<No_payment/>}/>
            <Route path="/Payment_machine" element={<Payment_machine/>}/>
            <Route path="/Report" element={<Report/>}/>
            <Route path="/Report_profit" element={<Report_profit/>}/>
            <Route path="/Statement_of_income" element={<Statement_of_income/>}/>
            <Route path="/Report_sales" element={<Report_sales/>}/>
            <Route path="/Report_sales_least" element={<Report_sales_least/>}/>
            <Route path="/Report_machine" element={<Report_machine/>}/>
            <Route path="/Vending_machine" element={<Vending_machine/>}/>
            <Route path="/Unit" element={<Unit/>}/>

            <Route path="/Login" element={<Login/>}/>
        </Routes>
    )
}

export default router