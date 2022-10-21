import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import IN_Sales from './Event-popup/Insert-sales'
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate  } from "react-router-dom";
import UP_register from "./Event-popup/Up-Register-sale";
import Moment from 'moment';
import DB from '../services/enpiot'


const Register_sales = () => {
    const navigate = useNavigate();
    let x = 1

    const [ reducer, setRedeuce ] = useReducer(x => x + 1, 0)
    const [ getRegister, setRegister ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/Register/getRegister').then((res) => {
            setRegister(res.data.reverse())
            setRedeuce()
            GetToken();
        })
    }, [reducer])

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = getRegister.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setRegister([...getRegister])
        }
    }
    
    const [ UID_UPMAC, setMacUPD ] = useState()
    const Delete = (_id) => {
        GetToken();
        
        axios.get(DB.URL + DB.UIDRegister + _id).then((res) => {
            setMacUPD(res.data.MachineId)
        })
        Swal.fire({
            title: 'ທ່ານຕ້ອງການລົບຂໍ້ມູນນີ້ແທ້ຫຼືບໍ່?',
            text: "ກົນ Yes, delete! ເພືອລົບ ຫຼື ກົບ Cancel ເພືອຍົກເລີກ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const data_uodate = {
                    status: "ວ່າງ",
                }
                axios.delete(`http://localhost:3001/register/DeleteRegister/${_id}`).then((res) => {
                    Swal.fire(
                        'ລົບຂໍ້ມູນສຳເລັດ!',
                        'Your file has been deleted.',
                        'success'
                      )
                      axios.put(DB.URL + DB.PutMachine + UID_UPMAC, data_uodate).then((res) => {
                        console.log(res)
                    })
                })

            }
          })
    }


       async function GetToken() {
           
         const token = localStorage.getItem("token")
         if(!token) {
                     
            navigate("/Login")
  
         }

       }

 useEffect(() => {
    GetToken();
 },[])

    return (
        <>
            <div className="container-content colums-group-padding">
                <div className="container-full">
                    <div class="card-body colums-group-padding">
                        <div className="col-4">
                            <input type="search" class="form-control float-start col-md-4" value={value} onChange={fillterData} placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-12">
                            <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#IN_Sales"><i class="bi bi-cloud-download-fill"></i> ລົງທະບຽນ </button>
                        </div>
                    </div>
              
                    <div class="card colums-group-padding scollview-table">
                        <table className="table table-striped">
                            <thead>
                                <tr className="font-table">
                                    <th>ລຳດັບ</th>
                                    <th scope="col" className="col-table-4">ເລກທີ່ເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col" className="col-table-4">ໜ່ວຍ</th>
                                    <th scope="col" className="col-table-4">ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col" className="col-table-4">ເລກອ້າງອິງ</th>
                                    <th scope="col" className="col-table-4">ລູ່ນຂອງເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col" className="col-table-4">ລູ່ນຂອງເຄື່ອງພີມ</th>
                                    <th scope="col" className="col-table-4">ຊື່ ແລະ ນາມສະກຸນ</th>
                                    <th scope="col" className="col-table-4">ອາຍຸ</th>
                                    <th scope="col" className="col-table-4">ເບີໂທ</th>
                                    <th scope="col" className="col-table-4">ແຂວງ</th>
                                    <th scope="col" className="col-table-4">ເມືອງ</th>
                                    <th scope="col" className="col-table-4">ບ້ານ</th>
                                    <th scope="col" className="col-table-4">ວັນທີ່ລົງທະບຽນ</th>
                                    <th scope="col" className="col-table-4">ປະເພດຜູ້ຂາຍ</th>
                                    <th scope="col" className="col-table-4">ເບີເຊັນທີ່ໄດ້ຮັບ</th>
                                    <th scope="col" className="col-table-4">ຊື່ພະນັກງານຜູ້ລົງທະບຽນ</th>
                                    <th scope="col" class="float-center col-table-4">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                            {value.length > 0 ? tableFiller.filter((e) => e.upremove == "ເປິດໃຊ້ງານ").map((item ,index ) => {
                                return (
                                    <tr key={index}>
                                        <th>{x++}</th>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.NumMachine}</td>
                                        <td className="col-table-4">{item.unitId == null ? "" : item.unitId.nameUnit}</td>
                                        <td className="col-table-4">{item.Vendor_code}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.MachineReference}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.version_Machine_Num}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.version_Machine_Print}</td>
                                        <td className="col-table-4">{item.name}</td>
                                        <td className="col-table-4">{item.age}</td>
                                        <td className="col-table-4">{item.phone}</td>
                                        <td className="col-table-4">{item.Province}</td>
                                        <td className="col-table-4">{item.District}</td>
                                        <td className="col-table-4">{item.Village}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : (Moment(item.MachineId.DateMachine).format("YYYY-MM-DD"))}</td>
                                        <td className="col-table-4">{item.percentageId == null ? "" : item.percentageId.name}</td>
                                        <td className="col-table-4">{item.percentageId == null ? "" : item.percentageId.percentage} %</td>
                                        <td className="col-table-4">{item.userNameId == null ? "" : item.userNameId.fullname}</td>
                                        <td class="float-center">
                                            <UP_register id={item._id}/>
                                            <Link onClick={(e) => Delete(item._id)} className="btn btn-danger"><i class="bi bi-x-diamond-fill"></i></Link>
                                        </td>
                                    </tr>
                                )
                            }): getRegister.filter((e) => e.upremove == null).map((item , index) => {
                                return (
                                    <tr key={index}>
                                        <th>{x++}</th>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.NumMachine}</td>
                                        <td className="col-table-4">{item.unitId == null ? "" : item.unitId.nameUnit}</td>
                                        <td className="col-table-4">{item.Vendor_code}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.MachineReference}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.version_Machine_Num}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : item.MachineId.version_Machine_Print}</td>
                                        <td className="col-table-4">{item.name}</td>
                                        <td className="col-table-4">{item.age}</td>
                                        <td className="col-table-4">{item.phone}</td>
                                        <td className="col-table-4">{item.Province}</td>
                                        <td className="col-table-4">{item.District}</td>
                                        <td className="col-table-4">{item.Village}</td>
                                        <td className="col-table-4">{item.MachineId == null ? "" : (Moment(item.MachineId.DateMachine).format("YYYY-MM-DD"))}</td>
                                        <td className="col-table-4">{item.percentageId == null ? "" : item.percentageId.name}</td>
                                        <td className="col-table-4">{item.percentageId == null ? "" : item.percentageId.percentage} %</td>
                                        <td className="col-table-4">{item.userNameId == null ? "" : item.userNameId.fullname}</td>
                                        <td class="float-center">
                                            <UP_register id={item._id}/>
                                            <Link onClick={(e) => Delete(item._id)} className="btn btn-danger"><i class="bi bi-x-diamond-fill"></i></Link>
                                        </td>
                                    </tr>
                                )

                                })
                            }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* Event-popup */}
            <IN_Sales />
            {/* Event-popup */}

        </>
    )
}

export default Register_sales