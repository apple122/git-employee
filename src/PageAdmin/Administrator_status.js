import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Insert_admin from './Event-popup/Insert_admin_status';
import Update_admin from "./Event-popup/Update-Admin_status";


const Administrator = () => {

    let x = 1
    const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

    const Alert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'ຍັງບໍ່ມີຂໍ້ມູນຈິງ',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }

    const Alererror = () => {
        Swal.fire({
            title: 'Eroror!',
            text: 'ຍັງບໍ່ມີຂໍ້ມູນຈິງ',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    
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
                                <Link to="/Administrator" class="nav-link active">ສະຖານະຜູ້ຂາຍ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/branch" class="nav-link">ສາຂາ</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body colums-group-padding">
                        <div className="col-4">
                            <input type="search" class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-12">
                            <div className="float-end"><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Insert_admin"><i class="bi bi-cloud-plus-fill"></i> ເພີມຂໍ້ມູນ</button></div>
                        </div>
                    </div>
                    <label className="label-table-amount"><strong>ລວມທັ້ງໝົດ 8 ຄົນ</strong></label>
                    <div className="card">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">ລຳດັບ</th>
                                <th scope="col">ສະຖານະຜູ້ຂາຍ</th>
                                <th>ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {names.map(item => {
                                    return (
                                        <tr className="hover-table">
                                            <th scope="row">{x++}</th>
                                            <td>@mdo</td>
                                            <td>
                                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Update_admin"><i class="bi bi-pencil-square"></i></a> &nbsp;
                                                <a href="#" className="btn btn-danger" onClick={() => Alererror()}><i class="bi bi-trash3-fill"></i></a>
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                                
                            </tbody>
                        </table>

                        {/* Modol popup */}
                        {/* Modol popup */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Administrator