import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import Move_machine from "./Event-popup/Move-machine";

const Move= () => {
    return (
        <>
        <div className="container-content colums-group-padding">
            <div class="card-body colums-group-padding">
                    <div className="col-4">
                        <input type="search" class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                    </div>
            </div>
            <div class="card-body-text">ລວມທັງຫມົດ 2 ເຄື່ອງ </div>
            <div class="card colums-group-padding">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col">ເລກອ້າງອີງ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງພິມ</th>
                                    <th scope="col">ວັນທີ</th>
                                    <th scope="col">ຫນ່ວຍເກົ່າ</th>
                                    <th scope="col">ຫນ່ວຍໃຫມ່</th>
                                    <th scope="col">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>13/09/2021</td>
                                    <td><button type="button" class="lable btn btn-warning btn-sm">15</button></td>     
                                    <td><button type="button" class="lable btn btn-success btn-sm">8</button></td>       
                                    <td><button type="input" class="Btn-flex btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#Move_machine">ຍ້າຍ</button> </td>                    
                                </tr>
                                <tr>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>13/09/2021</td>
                                    <td><button type="button" class=" btn btn-warning btn-sm">20</button></td>     
                                    <td><button type="button" class=" btn btn-success btn-sm">10</button></td>       
                                    <td><button type="input" class="Btn-flex btn btn-danger btn-sm">ຍ້າຍ</button> </td>                    
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
        <Move_machine/>
       
       </>

    )

}
export default Move