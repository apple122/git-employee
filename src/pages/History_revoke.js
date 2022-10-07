import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import Salses from "./Sales";
import Manage_revoke from "./Manage_revoke";


const History_revoke = () => {
    return (
        <>
        <div className="container-content colums-group-padding">
        <div className="container-full">
            <div class="card-body colums-group-padding">
                <div className="col-4">
                    <input type="search" class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                </div>
                <div className="col-12">
                    <ul class="nav light" >
                        <li class="nav-item" role="presentation">
                            <Link to="./" class="nav-link active li-link-border" id="history-revoke " >ປະຫວັດຖອນ</Link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <Link to="/Sales" class="nav-link li-link-border" id="sales" >ຍອດຂາຍ 0</Link>
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
                                    <th scope="col">ລຳດັບ</th>
                                    <th scope="col">ເລກທີເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col">ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col">ເລກອ້າງອີງ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງພິມ</th>
                                    <th scope="col">ສາເຫດການຖອນເຄື່ອງ</th>
                                    <th scope="col">ຊື່ພະນັກງານຜູ້ຖອນ</th>
                                    <th scope="col">ວັນທີ່</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>21809215</th>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>ເຊົາຂາຍ</td>     
                                    <td>ນາງ ອາລິນ</td>       
                                    <td>12/02/2021</td>                    
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>21809215</th>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>ເຊົາຂາຍ</td>     
                                    <td>ນາງ ອາລິນ</td>       
                                    <td>12/02/2021</td>                    
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>21809215</th>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>ຈ່າຍເງິນຍາກ</td>     
                                    <td>ນາງ ອາລິນ</td>       
                                    <td>12/02/2021</td>                    
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <th>21809215</th>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>ເຊົາຂາຍ</td>     
                                    <td>ນາງ ອາລິນ</td>       
                                    <td>12/02/2021</td>                    
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <th>21809215</th>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>ເຊົາຂາຍ</td>     
                                    <td>ນາງ ອາລິນ</td>       
                                    <td>12/02/2021</td>                    
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <th>21809215</th>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>ເຊົາຂາຍ</td>     
                                    <td>ນາງ ອາລິນ</td>       
                                    <td>12/02/2021</td>                    
                                </tr>
                                <tr>
                                    <th>7</th>
                                    <th>21809215</th>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>MTP-II</td>
                                    <td>ເຊົາຂາຍ</td> 
                                    <td>ນາງ ອາລິນ</td>       
                                    <td>12/02/2021</td>                    
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


       </div>
       
       </>

    )

}
export default History_revoke