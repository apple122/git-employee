import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import Move_machine from "./Event-popup/Move-machine";
import axios from "axios";
import DB from '../services/enpiot'
import Moment from 'moment';

const History_Move = () => {

    let x = 1

    const [showMoveMachine, setGetMoveMachine] = useState([])
    useEffect(() => {
        axios.get(DB.URL+DB.GetMoveMachine).then((res) => {
            setGetMoveMachine(res.data.reverse())
        })
    })

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = showMoveMachine.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setGetMoveMachine([...showMoveMachine])
        }
    }

    const today = Moment().format('YYYY-MM-DD')


    return (
        <>
        <div className="container-content colums-group-padding">
            <div class="card-body row colums-group-padding search-pd">
                <div className="col-md-4">
                    <input type="search" onChange={fillterData} class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                </div>
                <div className="col-md-6">
                    <div class="nav group-event-table">
                        <div className="nav respon-ul-link label-font-12 item-align-end">
                            <div class="nav-item position-right li-link-border-mb" role="presentation">
                                <Link to="/Move" class="nav-link li-link-border respon-li btn-sm" id="no_submit" >ຍ້າຍເຄື່ອງ</Link>
                            </div>
                            <div class="nav-item position-right li-link-border-mb" role="presentation">
                                <Link to="/History_Move" class="nav-link li-link-border active respon-li btn-sm" id="all">ປະຫວັດການຍ້າຍເຄື່ອງ</Link>
                            </div>
                                    
                        </div>
                    </div>
                </div>
            </div>
            <div className=""><strong>ປະຫວັດການຍ້າຍເຄື່ອງ ລວມ ( <label className="color-danger">{showMoveMachine.length}</label> ) ທັ້ງໝົດ</strong></div>
            <div class="card colums-group-padding scollview-table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ລຳດັບ</th>
                            <th scope="col">ເລກທີເຄື່ອງຂາຍເລກ</th>
                            <th scope="col">ເລກອ້າງອີງ</th>
                            <th scope="col">ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</th>
                            <th scope="col">ລຸ້ນຂອງເຄື່ອງພິມ</th>
                            <th scope="col">ໜ່ວຍເກົ່າ</th>
                            <th scope="col">ໜ່ວຍໃໝ່</th>
                            <th scope="col">ວັນທີ່ຍ້າຍເຄື່ອງ</th>
                            <th scope="col">ຊື່ພະນັກງານຜູ້ຖອນ</th>
                        </tr>
                    </thead>
                    <tbody>
                    {value.length > 0 ? tableFiller.map((item) => {
                        return (
                            <tr>
                                <th>{x++}</th>
                                <th>{item.Number_Machine_Num}</th>
                                <td>{item.Number_Reference}</td>
                                <td>{item.version_Machine_sell}</td>
                                <td>{item.version_Machine_Print}</td>       
                                <td>{item.Current_Machine_Unit}</td>
                                <td>{item.Machine_Move_new}</td>       
                                <td>{Moment(item.DateMove).format("DD-MM-YYYY")}</td>
                                <th>{item.userId == null ? "" : item.userId.fullname}</th>
                            </tr>
                        )
                        }): showMoveMachine.map((item, index) => {
                            return (
                                <tr>
                                    <th>{x++}</th>
                                    <th>{item.Number_Machine_Num}</th>
                                    <td>{item.Number_Reference}</td>
                                    <td>{item.version_Machine_sell}</td>
                                    <td>{item.version_Machine_Print}</td>       
                                    <td>{item.Current_Machine_Unit}</td>
                                    <td>{item.Machine_Move_new}</td>       
                                    <td>{Moment(item.DateMove).format("DD-MM-YYYY")}</td>
                                    <th>{item.userId == null ? "" : item.userId.fullname}</th>
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


        </>
       

       )

}
export default History_Move