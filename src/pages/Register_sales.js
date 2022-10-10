import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import IN_Sales from './Event-popup/Insert-sales'
import axios from "axios";
import Swal from "sweetalert2";

const Register_sales = () => {

    let x = 1

    const [ reducer, setRedeuce ] = useReducer(x => x + 1, 0)
    const [ getRegister, setRegister ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/Register/getRegister').then((res) => {
            setRegister(res.data.reverse())
            setRedeuce()
            console.log(res.data)
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
    
    const Delete = (_id) => {
        
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
                axios.delete(`http://localhost:3001/register/DeleteRegister/${_id}`).then((res) => {
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
                    <div class="card-body colums-group-padding search-pd">
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
                            {value.length > 0 ? tableFiller.map((item) => {
                                return (
                                    <tr>
                                        <th>{x++}</th>
                                        <td className="col-table-4">{item.MachineId.NumMachine}</td>
                                        <td className="col-table-4">{item.unitId.UnitId === null || item.unitId.UnitId}</td>
                                        <td className="col-table-4">{item.Vendor_code}</td>
                                        <td className="col-table-4">{item.MachineId.MachineReference}</td>
                                        <td className="col-table-4">{item.MachineId.version_Machine_Num}</td>
                                        <td className="col-table-4">{item.MachineId.version_Machine_Print}</td>
                                        <td className="col-table-4">{item.name}</td>
                                        <td className="col-table-4">{item.age}</td>
                                        <td className="col-table-4">{item.phone}</td>
                                        <td className="col-table-4">{item.Province}</td>
                                        <td className="col-table-4">{item.District}</td>
                                        <td className="col-table-4">{item.Village}</td>
                                        <td className="col-table-4">Name</td>
                                        <td className="col-table-4">{item.VendorType}</td>
                                        <td className="col-table-4">{item.percentageId.percentage} %</td>
                                        <td className="col-table-4">Useranme</td>
                                        <td class="float-center">
                                            <Link className="btn btn-info"><i class="bi bi-pencil-square"></i></Link>
                                            <Link onClick={(e) => Delete(item._id)} className="btn btn-danger"><i class="bi bi-x-diamond-fill"></i></Link>
                                        </td>
                                    </tr>
                                )
                            }): getRegister.map((item, index) => {
                                return (
                                    <tr>
                                        <th>{x++}</th>
                                        <td className="col-table-4">{item.MachineId.NumMachine}</td>
                                        <td className="col-table-4">{item.unitId == null || item.unitId.UnitId == null || item.unitId.UnitId == "null" || item.unitId.UnitId == "underfine" ? "ວ່າງ" : item.unitId.UnitId }</td>
                                        <td className="col-table-4">{item.Vendor_code}</td>
                                        <td className="col-table-4">{item.MachineId.MachineReference}</td>
                                        <td className="col-table-4">{item.MachineId.version_Machine_Num}</td>
                                        <td className="col-table-4">{item.MachineId.version_Machine_Print}</td>
                                        <td className="col-table-4">{item.name}</td>
                                        <td className="col-table-4">{item.age}</td>
                                        <td className="col-table-4">{item.phone}</td>
                                        <td className="col-table-4">{item.Province}</td>
                                        <td className="col-table-4">{item.District}</td>
                                        <td className="col-table-4">{item.Village}</td>
                                        <td className="col-table-4">Name</td>
                                        <td className="col-table-4">{item.VendorType}</td>
                                        <td className="col-table-4">{item.percentageId.percentage} %</td>
                                        <td className="col-table-4">Useranme</td>
                                        <td class="float-center">
                                        <Link className="btn btn-info"><i class="bi bi-pencil-square"></i></Link>
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