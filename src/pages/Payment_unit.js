import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import Pour_unit from "./Event-popup/Pour-unit";
import Pour_machine from "./Event-popup/Pour_machine";
import DB from '../services/enpiot'
import Moment from "moment";
import Select from 'react-select';
import axios from "axios";
import { setMinutes } from "date-fns";
import Swal from "sweetalert2";


const Payment_unit = () => {

    let x = 1
    let L = 1
    let J = 1

    const [ SelectOption, setOption ] = useState([])
    const [ SelectOpUnit, setOptionUnit ] = useState([])

    const [ ShowEvent, setEvent ] = useState([])
    const LoopQnumber = [...new Set(ShowEvent.map((item => item.Draw)))]
    const LoopDraw = LoopQnumber.map((item) => (
        {value: item, label: 'ງວດທີ່ '+ item}
    ))

    const [ GetUnit_Num, setUnit_Num ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetPourMoney).then((res) => {
            setEvent(res.data.reverse())
        }) 

        axios.get(DB.URL + DB.GetUnit).then((res) => {
            setUnit_Num(res.data.reverse())
        })
    },[])

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = ShowEvent.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setEvent([...ShowEvent])
        }
    }

    const Delete = (_id) => {
        Swal.fire({
            title: 'ທ່ານຕ້ອງການລົບຂໍ້ມູນນີ້ແທ້ຫຼືບໍ່?',
            text: "!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ລົບຂໍ້ມູນ!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(DB.URL + DB.DePourMoney + _id).then((res) => {
                    Swal.fire(
                        'ລົບຂໍ້ມູນສຳເລັດ!',
                        'Your file has been deleted.',
                        'success'
                      )
                })
            }
          })
    }
    
    return (
        <>
            <div className="container-content colums-group-padding">
                <div className="container-full">
                    <div class="card-body row colums-group-padding search-pd">
                        <div className="col-md-4">
                            <input type="search" class="form-control float-start col-md-4" onChange={fillterData} placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-md-8">
                            <div class="nav group-event-table">
                                <div className="nav respon-ul-link label-font-12 item-align-end">
                                    <div class="nav-item position-right" role="presentation">
                                        <label for="import-excel" className="btn btn-primary label-font-12"><i class="bi bi-filetype-xlsx"></i> Exprot Excel</label>
                                        <input class="custom-file-input form-control li-link-input" id="import-excel" type="file" />
                                    </div>
                                    <div class="nav-item position-right windows-res" role="presentation">
                                        <Link to="/Payment_unit" class="nav-link active li-link-border respon-li btn-sm" id="submit" >ຖອກເງິນ</Link>
                                    </div>
                                    <div class="nav-item position-right windows-res" role="presentation">
                                        <Link to="/Payment_machine" class="nav-link li-link-border respon-li btn-sm" id="all">ຖອກເງິນເຄື່ອງ</Link>
                                    </div>
                                    <div class="nav-item position-right windows-res" role="presentation">
                                        <Link to="/No_payment" class="nav-link li-link-border respon-li btn-sm" id="no_submit" >ບໍ່ໄດ້ຖອກ</Link>
                                    </div>
                                    &nbsp;
                                    <div class="dropdown position-right mb-res">
                                        <a class="btn btn-secondary dropdown-toggle label-font-12" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ເລືອກການຈັດການ
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><Link to="/Payment_unit" class="dropdown-item active" href="#">ຖອກເງິນ</Link></li>
                                            <li><Link to="/Payment_machine" class="dropdown-item" href="#">ຖອກເງິນເຄື່ອງ</Link></li>
                                            <li><Link to="/No_payment" class="dropdown-item" href="#">ບໍ່ໄດ້ຖອກ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row card-body">
                        <div className="col-md-2"><h4><strong>ຖອກເງິນ</strong></h4></div>
                        <div className="col-md-3">
                            <div className="input-group d-flex justify-content-end">
                                <span className="input-group-text">ງວດ</span>
                                <Select
                                    defaultValue={SelectOption}
                                    onChange={setOption}
                                    options={LoopDraw}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-group">
                                <span className="input-group-text">ເລກທີ່ເຄື່ອງຂາຍ</span>
                                <Select
                                    defaultValue={SelectOpUnit}
                                    onChange={setOptionUnit}
                                    options={
                                        GetUnit_Num.map((item) => (
                                            {value: item._id, label: item.Unit_Num}
                                        ))
                                    }
                                />
                            </div>
                        </div>
                        {/* <div className="col-md-4"></div> */}
                        <div className="col-md-2">
                            <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#Pour_unit"><i class="bi bi-download"></i> ຖອກເງິນ</button>
                        </div>
                    </div>
                    <div class="card colums-group-padding scollview-table">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ຫນ່ວຍ</th>
                                    <th scope="col">ງວດ</th>
                                    <th scope="col">ວັນທີ່</th>
                                    <th scope="col" className="text-primary">( ຫົວໜ້າໜ່ວຍ )</th>
                                    <th scope="col">ມູນຄ່າຂາຍໄດ້</th>
                                    <th scope="col">ເປີເຊັນຂາຍ</th>
                                    <th scope="col">ຍອດຖອກຕົວຈິງ</th>
                                    <th scope="col">ເງິນສົດ</th>
                                    <th scope="col">ໂອນ</th>
                                    <th scope="col">ຄ້າງຈ່າຍ</th>
                                    <th scope="col" className="text-success">( ຜູ້ຮັບເງີນ )</th>
                                    <th scope="col">ຈັດການ</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {value.length > 0 ? tableFiller.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <th>{x++}</th>
                                            <td>ງວດທີ ({item.Draw == null ? "Null" : item.Draw})</td>      
                                            <td>{Moment(item.PayMent_Money_ToDay).format("YYYY-MM-DD")}</td>       
                                            <th>ນາງ ອາລິນ</th>
                                            <th class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Salable_value)} ₭</th>
                                            <td>{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Percentage_Sell == null ? "0" : item.Percentage_Sell)} ₭</td>
                                            <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pour_Actually_Amount)} ₭</td>
                                            <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pay_Cash)} ₭</td>
                                            <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pay_Money_Tranfer)} ₭</td>     
                                            <td class="text-danger">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Arrears_Amount)} ₭</td>       
                                            <td>{item.userId == null ? "" : item.userId.fullname}</td> 
                                            <td>
                                                <Pour_machine id={item._id}/>
                                                <a onClick={() => Delete(item._id)} className="btn btn-sm btn-danger"><i class="bi bi-trash-fill"></i></a>  
                                            </td>      
                                        </tr>
                                    )
                                }): ShowEvent.filter((e) => e.Draw == SelectOption.value && e.unitId == SelectOpUnit.value).map((item, index) => {
                                    return (
                                        <tr key={item._id}>
                                            <th>{x++}</th>
                                            <td>ງວດທີ ({item.Draw == null ? "Null" : item.Draw})</td>      
                                            <td>{Moment(item.PayMent_Money_ToDay).format("YYYY-MM-DD")}</td>       
                                            <th>ນາງ ອາລິນ</th>
                                            <th class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Salable_value)} ₭</th>
                                            <td>{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Percentage_Sell == null ? "0" : item.Percentage_Sell)} ₭</td>
                                            <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pour_Actually_Amount)} ₭</td>
                                            <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pay_Cash)} ₭</td>
                                            <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pay_Money_Tranfer)} ₭</td>     
                                            <td class="text-danger">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Arrears_Amount)} ₭</td>       
                                            <td>{item.userId == null ? "" : item.userId.fullname}</td>   
                                            <td>
                                                <Pour_machine id={item._id}/>
                                                <a onClick={() => Delete(item._id)} className="btn btn-sm btn-danger"><i class="bi bi-trash-fill"></i></a>    
                                            </td>    
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pour_unit />

        </>
    )
}

export default Payment_unit