import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './dashboard.css'
import NP_for_sale from "./Event-dashboard/NP-for-sale";
import Report_arrears from "./Event-dashboard/Report-arrears";
import Statement_of_income from "./Event-dashboard/Statement-of-income";

const Dashboard = () => {

    const [showhide, setShowHide] = useState("ເລືອກລາຍການທີ່ຕ້ອງການສະແດງ");

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowHide(getuser);
    }

    const names = ['James', 'Paul', 'John', 'George', 'Ringo','James', 'Paul', 'John', 'George', 'Ringo'];


    return (
        <>
            <div className="container-content">
                <div className="container-full">
                    <div className="card-boder">
                        <div className="group">
                            <h3><strong>ລາຍງານ</strong></h3>
                        </div>
                    </div>&nbsp;
                    <div className="group-option-table">
                        <div className="group-seacrh-table"><input type="search" className="form-control border-input control" placeholder="ຄົ້ນຫາ"/></div> &nbsp;
                        <div className="group-seacrh-table">
                            <select className="form-control border-input control mx-auto" onChange={(e) => (handleshowhide(e))}>
                               <option value="ເລືອກລາຍການທີ່ຕ້ອງການສະແດງ" className="option-header">ເລືອກລາຍການທີ່ຕ້ອງການສະແດງ</option>
                               <option value="ລາຍງານຍອດເງີນຄ້າງ" className="option-left">ລາຍງານຍອດເງີນຄ້າງ</option>
                               <option  value="ລາຍງານເຄື່ອງບໍ່ໄດ້ເປິດຂາຍ" className="option-left">ລາຍງານເຄື່ອງບໍ່ໄດ້ເປິດຂາຍ</option>
                               <option  value="ລາຍງານລາຍຮັບ" className="option-left">ລາຍງານລາຍຮັບ</option>
                            </select>    
                        </div> 
                    </div> &nbsp;
                    {
                        showhide === 'ລາຍງານຍອດເງີນຄ້າງ' && (
                            <Report_arrears />
                        )
                    }
                    {
                        showhide === 'ລາຍງານເຄື່ອງບໍ່ໄດ້ເປິດຂາຍ' && (
                            <NP_for_sale />
                        )
                    }
                    {
                        showhide === 'ລາຍງານລາຍຮັບ' && (
                            <Statement_of_income />
                        )
                    }
                    {
                        showhide === 'ເລືອກລາຍການທີ່ຕ້ອງການສະແດງ' && (
                            <p className="not-event">ເລືອກລາຍການທີ່ຕ້ອງການສະແດງ</p>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default Dashboard