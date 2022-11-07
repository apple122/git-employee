import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Insert_branch from "./Event-popup/Insert_branch";
import Update_branch from "./Event-popup/Update-branch";
import DB from '../services/enpiot'
import { useReducer } from "react";


const Branch = () => {

    let x = 1

    const [ Redcur, setRedcur ] = useReducer(x => x + 1, 0)
    const [ ShowEvent, setShowEvent ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetBranch).then((res) => {
            setShowEvent(res.data.reverse())
            setRedcur()
        })
    }, [Redcur])

    return (
        <>
            <div className="container-content">
                <div className="container-full">
                    <div class="clearfix card-group">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <Link to="/Manage_data" class="nav-link">ຜູ້ບໍລິຫານ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/Administrator" class="nav-link">ສະຖານະຜູ້ຂາຍ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/branch" class="nav-link active">ສາຂາ</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body colums-group-padding">
                        <div className="col-4">
                            <input type="search" class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-12">
                            <div className="float-end"><Insert_branch /></div>
                        </div>
                    </div>
                    <label className="label-table-amount"><strong>ລວມທັ້ງໝົດ ( <strong className="text-black">{ShowEvent.length}</strong> ) ລາຍການ</strong></label>
                    <div className="card">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">ລຳດັບ</th>
                                <th scope="col">ສະຂາ</th>
                                <th scope="col">ແຂວງ</th>
                                <th scope="col">ເມືອງ</th>
                                <th scope="col">ບ້ານ</th>
                                <th scope="col">ເບີໂທຕິດຕໍ່</th>
                                <th scope="col">ຊື່ຫົວໜ້າສາຂາ</th>
                                <th>ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ShowEvent.map(item => {
                                    return (
                                        <tr className="hover-table">
                                            <th scope="row">{x++}</th>
                                            <td>{item.branch}</td>
                                            <td>{item.province}</td>
                                            <td>{item.district}</td>
                                            <td>{item.village}</td>
                                            <td>+865 {item.phone}</td>
                                            <td>{item.Name_branch_Chief}</td>
                                            <td>
                                                <Update_branch id={item._id}/>
                                                <a href="#" className="btn btn-sm btn-danger"><i class="bi bi-trash3-fill"></i></a>
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
           
        </>
    )
}

export default Branch