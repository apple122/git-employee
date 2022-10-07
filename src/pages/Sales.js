import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import History_revoke from "./History_revoke";
import Withdraw_machine from "./Event-popup/Withdraw-machine"

const Salses = () => {
    return (
        <>

        <div className="container-content colums-group-padding">
            <div class="card-body colums-group-padding">
                    <div className="col-4">
                        <input type="search" class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                    </div>

                    <div className="col-12">
                       <ul class="nav light" >
                        <li class="nav-item" role="presentation">
                            <Link to="/History_revoke" class="nav-link li-link-border" id="history-revoke" >ປະຫວັດຖອນ</Link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <Link to="/Sales" class="nav-link active li-link-border" id="sales" >ຍອດຂາຍ 0</Link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <Link to="/Manage_revoke" class="nav-link li-link-border" id="all" >ທັງຫມົດ</Link>
                        </li>
                    </ul>
                    </div>
            </div>
                <div class="card colums-group-padding">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col">ເລກອ້າງອີງ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງພິມ</th>
                                    <th scope="col">ງວດຍອດເປັນ 0</th>
                                    <th scope="col">ສະຖານະ</th>
                                    <th scope="col">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td><button type="input" class="Btn-flex btn btn-outline-secondary btn-sm">107$</button></td>     
                                    <td> <a class="label btn btn-success btn-sm">ໃຊ້ງານ</a></td>       
                                    <td><button type="input" class="Btn-flex btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#WD_machine">ຖອນ</button> </td>                    
                                </tr>
                                <tr>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td><button type="input" class="Btn-flex btn btn-outline-secondary btn-sm">107$</button></td>     
                                    <td><a class="label btn btn-success btn-sm">ໃຊ້ງານ</a></td>       
                                    <td><button type="input" class="Btn-flex btn btn-danger btn-sm">ຖອນ</button> </td>                    
                                </tr>
                                <tr>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td><button type="input" class="Btn-flex btn btn-outline-secondary btn-sm">107$</button></td>     
                                    <td><a class="label btn btn-success btn-sm">ໃຊ້ງານ</a></td>       
                                    <td><button type="input" class="Btn-flex btn btn-danger btn-sm">ຖອນ</button> </td>                    
                                </tr>
                                <tr>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td><button type="input" class="Btn-flex btn btn-outline-secondary btn-sm">107$</button></td>     
                                    <td><a class="label btn btn-success btn-sm">ໃຊ້ງານ</a></td>       
                                    <td><button type="input" class="Btn-flex btn btn-danger btn-sm">ຖອນ</button> </td>                    
                                </tr>
                                </tbody>
                        </table>
                </div>

                    <div class="card-body colums-group-padding">
                        <div className="col-12">
                            <nav aria-label="Page navigation" >
                                <ul class="pagination d-flex justify-content-end flex-wrap pagination-rounded-flat pagination-success">
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true"></span>
                                        <span class="sr-only"> <i class="bi bi-chevron-left"></i> </span>
                                    </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true"></span>
                                        <span class="sr-only"> <i class="bi bi-chevron-right"></i> </span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                </div>

        </div>

        <Withdraw_machine/>

        </>
       

       )
   
   }
   export default Salses