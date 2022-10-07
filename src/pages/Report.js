import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import './style.css'
import Statement_of_income from "./Event-popup/Statement-of-income";
import Report_profit from "./Event-popup/Report-profit";
import Report_sales from "./Event-popup/Report-sales";
import Report_sales_least from "./Event-popup/Report-sales-least";
import Report_machine from "./Event-popup/Report-machine";

const Report = () => {
    const [showhide, setShowHide] = useState("ເລືອກລາຍງານ");

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowHide(getuser);
    }

    return (
        <>
            <div className="container-content colums-group-padding">
                <div className="container-full">
                    <div class="card-body colums-group-padding search-pd">
                        <ul class="nav margin-nav">
                            <li class="nav-item">
                            <input type="text" className="form-control border-input input-flex" placeholder="ຄົ້ນຫາ"/>
                            </li>
                            <li class="nav-item item-active" >
                            <select className="form-control border-input input-flex" onChange={(e) => (handleshowhide(e))}>
                        <option value="ເລືອກລາຍງານ">ເລືອກລາຍງານ</option>
                        <option value="ລາຍງານມູນຄ່າຂາຍໄດ້">ລາຍງານມູນຄ່າຂາຍໄດ້</option>
                        <option value="ລາຍງານເຄື່ອງຂາຍຫວຍ">ລາຍງານເຄື່ອງຂາຍຫວຍ</option>
                        <option value="ລາຍງານຍອດຂາຍເລກ6ໂຕ">ລາຍງານຍອດຂາຍເລກ 6 ໂຕ</option>
                        <option value="ລາຍງານຍອດຂາຍຕ່ຳກວ່າ">ລາຍງານຍອດຂາຍຕ່ຳກວ່າ 150,000</option>
                        <option value="ລາຍງານລາຍຣັບ">ລາຍງານລາຍຣັບ</option>
                      </select>
                            </li>
                        </ul>
                    </div> &nbsp;
                    {
                        showhide === 'ລາຍງານມູນຄ່າຂາຍໄດ້' && (
                            <Report_profit />
                        )
                    }
                    {
                        showhide === 'ລາຍງານເຄື່ອງຂາຍຫວຍ' && (
                            <Report_machine />
                        )
                    }
                    {
                        showhide === 'ລາຍງານຍອດຂາຍເລກ6ໂຕ' && (
                            <Report_sales />
                        )
                    }
                    {
                        showhide === 'ລາຍງານຍອດຂາຍຕ່ຳກວ່າ' && (
                            <Report_sales_least />
                        )
                    }
                    {
                        showhide === 'ລາຍງານລາຍຣັບ' && (
                            <Statement_of_income />
                        )
                    }

                </div> 
            </div>
        </>
    )
}
export default Report