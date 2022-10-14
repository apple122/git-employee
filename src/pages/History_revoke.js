import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import Salses from "./Sales";
import Manage_revoke from "./Manage_revoke";
import DB from '../services/enpiot'
import axios from "axios";


const History_revoke = () => {

    const [showWithdraw, setshowWithdraw] = useState([])
    useEffect(() => {
        axios.get(DB.URL+DB.GetWithDraw).then((res) => {
            setshowWithdraw(res.data)

        })
    }) 

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = showWithdraw.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setshowWithdraw([...showWithdraw])
        }
    }
    
    return (
        <>
        <div className="container-content colums-group-padding">
        <div className="container-full">
            <div class="card-body row colums-group-padding search-pd">
                <div className="col-md-4">
                    <input type="search" onChange={fillterData} class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                </div>
                <div className="col-md-8">
                    <div class="nav group-event-table">
                        <div className="nav respon-ul-link label-font-12 item-align-end">
                            <div class="nav-item position-right li-link-border-mb" role="presentation">
                                <Link to="/Sales" class="nav-link li-link-border respon-li" id="no_submit" >ຖອນເຄື່ອງ</Link>
                            </div>
                            <div class="nav-item position-right li-link-border-mb" role="presentation">
                                <Link to="/History_revoke" class="nav-link active li-link-border respon-li" id="all">ປະຫວັດຖອນ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card colums-group-padding scollview-table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ລຳດັບ</th>
                            <th scope="col">ລະຫັດຜູ້ຂາຍ</th>
                            <th scope="col">ເລກອ້າງອີງ</th>
                            <th scope="col">ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</th>
                            <th scope="col">ລຸ້ນຂອງເຄື່ອງພິມ</th>
                            <th scope="col">ສະຖານະ</th>
                            <th scope="col">ວັນທີ່ລົງທະບຽນ</th>
                            <th scope="col">ຊື່ພະນັກງານຜູ້ຖອນ</th>
                            <th scope="col">ສາເຫດການຖອນເຄື່ອງ</th>
                        </tr>
                    </thead>
                    <tbody>
                    {value.length > 0 ? tableFiller.map((item) => {
                        return (
                            <tr>
                                <th>1</th>
                                <th>{item.Vendor_code}</th>
                                <td>{item.Machine_Reference_Num}</td>
                                <td>{item.version_Machine_sell_Num}</td>
                                <td>{item.version_Machine_Print}</td>
                                <td> <a class="label btn btn-success btn-sm">{item.status_Machine}</a></td>       
                                <td>{item.DateRegister}</td>
                                <td>LENOVO</td>
                                <td>{item.withdrawal_event}</td>     
                            </tr>
                        )
                        }): showWithdraw.map((item, index) => {
                            return (
                                <tr>
                                    <th>1</th>
                                    <th>{item.Vendor_code}</th>
                                    <td>{item.Machine_Reference_Num}</td>
                                    <td>{item.version_Machine_sell_Num}</td>
                                    <td>{item.version_Machine_Print}</td>
                                    <td> <a class="label btn btn-success btn-sm">{item.status_Machine}</a></td>       
                                    <td>{item.DateRegister}</td>
                                    <td>LENOVO</td>
                                    <td>{item.withdrawal_event}</td>     
                                </tr>

                            )

                        })
                    }
                        
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