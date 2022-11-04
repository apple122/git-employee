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
import Select from 'react-select';



const Register_sales = () => {
    const navigate = useNavigate();
    let x = 1

    const [ MachineId, setMachineId ] = useState(null)
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
    const Delete = (_id) => {
        GetToken();
        
      
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
                    status: "true"
                }
                axios.delete(DB.URL + DB.DeRegister + _id).then((res) => {
                    Swal.fire(
                        'ລົບຂໍ້ມູນສຳເລັດ!',
                        'Your file has been deleted.',
                        'success'
                    )
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

    const [ClickFillter, setClickFillter] = useState(0)
    function ClickTbale (){
       if(ClickFillter === 0) {
        setClickFillter(1)
       } else if (ClickFillter === 1) {
        setClickFillter(0)
       } 
    }
    const [SNumMachine, setNumMachine] = useState(0)
    function NumMachine () {
        if (SNumMachine === 0) {
            setNumMachine(1)
        }else if (SNumMachine === 1) {
            setNumMachine(0)
        }
    }
    const [SnameUnit, setnameUnit] = useState(0)
    function nameUnit () {
        if (SnameUnit === 0) {
            setnameUnit(1)
        }else if (SnameUnit === 1) {
            setnameUnit(0)
        }
    }
    const [ SVendor_code, setVendor_code ] = useState(0)
    function Vendor_code () {
        if (SVendor_code === 0) {
            setVendor_code(1)
        }else if (SVendor_code === 1) {
            setVendor_code(0)
        }
    }
    const [ SMachineReference, setMachineReference ] = useState(0)
    function MachineReference () {
        if (SMachineReference === 0) {
            setMachineReference(1)
        }else if (SMachineReference === 1) {
            setMachineReference(0)
        }
    }
    const [ Sversion_Machine_Num, setversion_Machine_Num ] = useState(0)
    function version_Machine_Num () {
        if (Sversion_Machine_Num === 0) {
            setversion_Machine_Num(1)
        }else if (Sversion_Machine_Num === 1) {
            setversion_Machine_Num(0)
        }
    }
    const [ Sversion_Machine_Print, setversion_Machine_Print ] = useState(0)
    function version_Machine_Print () {
        if (Sversion_Machine_Print === 0) {
            setversion_Machine_Print(1)
        }else if (Sversion_Machine_Print === 1) {
            setversion_Machine_Print(0)
        }
    }
    const [ Sname, setname ] = useState(0)
    function name () {
        if (Sname === 0) {
            setname(1)
        }else if (Sname === 1) {
            setname(0)
        }
    }
    const [ Sage, setage ] = useState(0)
    function age () {
        if (Sage === 0) {
            setage(1)
        }else if (Sage === 1) {
            setage(0)
        }
    }
    const [ Sphone, setphone ] = useState(0)
    function phone () {
        if (Sphone === 0) {
            setphone(1)
        }else if (Sphone === 1) {
            setphone(0)
        }
    }
    const [ SProvince, setProvince ] = useState(0)
    function Province () {
        if (SProvince === 0) {
            setProvince(1)
        }else if (SProvince === 1) {
            setProvince(0)
        }
    }
    const [ SDistrict, setDistrict ] = useState(0)
    function District () {
        if (SDistrict === 0) {
            setDistrict(1)
        }else if (SDistrict === 1) {
            setDistrict(0)
        }
    }
    const [ SVillage, setVillage ] = useState(0)
    function Village () {
        if (SVillage === 0) {
            setVillage(1)
        }else if (SVillage === 1) {
            setVillage(0)
        }
    }
    const [ SDateMachine, setDateMachine ] = useState(0)
    function DateMachine () {
        if (SDateMachine === 0) {
            setDateMachine(1)
        }else if (SDateMachine === 1) {
            setDateMachine(0)
        }
    }
    const [ SpercentageIdName, setpercentageIdName ] = useState(0)
    function percentageIdName () {
        if (SpercentageIdName === 0) {
            setpercentageIdName(1)
        }else if (SpercentageIdName === 1) {
            setpercentageIdName(0)
        }
    }
    const [ Spercentage, setpercentage ] = useState(0)
    function percentage () {
        if (Spercentage === 0) {
            setpercentage(1)
        }else if (Spercentage === 1) {
            setpercentage(0)
        }
    }
    const [ Sfullname, setfullname ] = useState(0)
    function fullname () {
        if (Sfullname === 0) {
            setfullname(1)
        }else if (Sfullname === 1) {
            setfullname(0)
        }
    }
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
                    <div className="card-body">
                    <div class="Position-Dropdown">
                        <input type="checkbox" id="CheckINput" className="checkbox d-none" value="1" onClick={ClickTbale}/>
                        <label class="btn btn-secondary" for="CheckINput">
                            fillterTable <i class="bi bi-sliders"></i>
                        </label>
                        <div class={`w-collum d-Checkshow ${ClickFillter === 0 ? "d-none" : ""}`}>
                            <div className="card-body">
                                <div className="row p-2">
                                    <div className="col-12 mb-3"><label>ເລືອກຂໍ້ມູນທີ່ຕ້ອງການສະແດງ</label></div>
                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="NumMachine" value="1" onClick={NumMachine} checked/>&nbsp;
                                        <label class="form-check-label" for="NumMachine">ເລກທີ່ເຄື່ອງຂາຍເລກ</label>
                                    </div>
                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="nameUnit" value="1" onClick={nameUnit} checked/>&nbsp;
                                        <label for="nameUnit">ໜ່ວຍ</label>
                                    </div>
                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="Vendor_code" value="1" onClick={Vendor_code} checked/>&nbsp;
                                        <label for="Vendor_code">ລະຫັດຜູ້ຂາຍ</label>
                                    </div>
                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="MachineReference" value="1" onClick={MachineReference} checked/>&nbsp;
                                        <label for="MachineReference">ເລກອ້າງອິງ</label>
                                    </div>
                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="version_Machine_Num" value="1" onClick={version_Machine_Num} checked/>&nbsp;
                                        <label for="version_Machine_Num">ລູ່ນຂອງເຄື່ອງຂາຍເລກ</label>
                                    </div>
                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="version_Machine_Print" value="1" onClick={version_Machine_Print} checked/>&nbsp;
                                        <label for="version_Machine_Print">ລູ່ນຂອງເຄື່ອງພີມ</label>
                                    </div>
                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="name" value="1" onClick={name} checked/>&nbsp;
                                        <label for="name">ຊື່ ແລະ ນາມສະກຸນ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="age" value="1" onClick={age}/>&nbsp;
                                        <label for="age">ອາຍຸ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="phone" value="1" onClick={phone}/>&nbsp;
                                        <label for="phone">ເບີໂທ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="Province" value="1" onClick={Province}/>&nbsp;
                                        <label for="Province">ແຂວງ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="District" value="1" onClick={District}/>&nbsp;
                                        <label for="District">ເມືອງ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="Village" value="1" onClick={Village}/>&nbsp;
                                        <label for="Village">ບ້ານ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="DateMachine" value="1" onClick={DateMachine}/>&nbsp;
                                        <label for="DateMachine">ວັນທີ່ລົງທະບຽນ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="percentageIdName" value="1" onClick={percentageIdName}/>&nbsp;
                                        <label for="percentageIdName">ປະເພດຜູ້ຂາຍ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="percentage" value="1" onClick={percentage}/>&nbsp;
                                        <label for="percentage">ເບີເຊັນທີ່ໄດ້ຮັບ</label>
                                    </div>

                                    <div className="col-4 form-check form-switch">
                                        <input type="checkbox" class="form-check-input" id="fullname" value="1" onClick={fullname}/>&nbsp;
                                        <label for="fullname">ຊື່ພະນັກງານຜູ້ລົງທະບຽນ</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        </div>
                    </div>
                    <div class="card colums-group-padding scollview-table">
                        <table className="table table-striped">
                            <thead>
                                <tr className="font-table">
                                    <th>ລຳດັບ</th>
                                    <th scope="col" className={`col-table-4 ${SNumMachine === 0 ? '' : "d-none"}`}>ເລກທີ່ເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col" className={`col-table-4 ${SnameUnit === 0 ? '' : "d-none"}`}>ໜ່ວຍ</th>
                                    <th scope="col" className={`col-table-4 ${SVendor_code === 0 ? '' : "d-none"}`}>ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col" className={`col-table-4 ${SMachineReference === 0 ? '' : "d-none"}`}>ເລກອ້າງອິງ</th>
                                    <th scope="col" className={`col-table-4 ${Sversion_Machine_Num === 0 ? '' : "d-none"}`}>ລູ່ນຂອງເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col" className={`col-table-4 ${Sversion_Machine_Print === 0 ? '' : "d-none"}`}>ລູ່ນຂອງເຄື່ອງພີມ</th>
                                    <th scope="col" className={`col-table-4 ${Sname === 0 ? '' : "d-none"}`}>ຊື່ ແລະ ນາມສະກຸນ</th>
                                    <th scope="col" className={`col-table-4 ${Sage === 0 ? 'd-none' : ""}`}>ອາຍຸ</th>
                                    <th scope="col" className={`col-table-4 ${Sphone === 0 ? 'd-none' : ""}`}>ເບີໂທ</th>
                                    <th scope="col" className={`col-table-4 ${SProvince === 0 ? 'd-none' : ""}`}>ແຂວງ</th>
                                    <th scope="col" className={`col-table-4 ${SDistrict === 0 ? 'd-none' : ""}`}>ເມືອງ</th>
                                    <th scope="col" className={`col-table-4 ${SVillage === 0 ? 'd-none' : ""}`}>ບ້ານ</th>
                                    <th scope="col" className={`col-table-4 ${SDateMachine === 0 ? 'd-none' : ""}`}>ວັນທີ່ລົງທະບຽນ</th>
                                    <th scope="col" className={`col-table-4 ${SpercentageIdName === 0 ? 'd-none' : ""}`}>ປະເພດຜູ້ຂາຍ</th>
                                    <th scope="col" className={`col-table-4 ${Spercentage === 0 ? 'd-none' : ""}`}>ເບີເຊັນທີ່ໄດ້ຮັບ</th>
                                    <th scope="col" className={`col-table-4 ${Sfullname === 0 ? 'd-none' : ""}`}>ຊື່ພະນັກງານຜູ້ລົງທະບຽນ</th>
                                    <th scope="col" class="float-center col-table-4">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                            {value.length > 0 ? tableFiller.filter((e) => e.upremove == null).map((item ,index ) => {
                                return (
                                    <tr key={index}>
                                        <th>{x++}</th>
                                        <td className={`col-table-4 ${SNumMachine === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.NumMachine}</td>
                                        <td className={`col-table-4 ${SnameUnit === 0 ? '' : "d-none"}`}>{item.unitId == null ? "" : item.unitId.nameUnit}</td>
                                        <td className={`col-table-4 ${SVendor_code === 0 ? '' : "d-none"}`}>{item.Vendor_code}</td>
                                        <td className={`col-table-4 ${SMachineReference === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.MachineReference}</td>
                                        <td className={`col-table-4 ${Sversion_Machine_Num === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.version_Machine_Num}</td>
                                        <td className={`col-table-4 ${Sversion_Machine_Print === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.version_Machine_Print}</td>
                                        <td className={`col-table-4 ${Sname === 0 ? '' : "d-none"}`}>{item.name}</td>
                                        <td className={`col-table-4 ${Sage === 0 ? 'd-none' : ""}`}>{item.age}</td>
                                        <td className={`col-table-4 ${Sphone === 0 ? 'd-none' : ""}`}>{item.phone}</td>
                                        <td className={`col-table-4 ${SProvince === 0 ? 'd-none' : ""}`}>{item.Province}</td>
                                        <td className={`col-table-4 ${SDistrict === 0 ? 'd-none' : ""}`}>{item.District}</td>
                                        <td className={`col-table-4 ${SVillage === 0 ? 'd-none' : ""}`}>{item.Village}</td>
                                        <td className={`col-table-4 ${SDateMachine === 0 ? 'd-none' : ""}`}>{item.MachineId == null ? "" : (Moment(item.MachineId.DateMachine).format("YYYY-MM-DD"))}</td>
                                        <td className={`col-table-4 ${SpercentageIdName === 0 ? 'd-none' : ""}`}>{item.percentageId == null ? "" : item.percentageId.name}</td>
                                        <td className={`col-table-4 ${Spercentage === 0 ? 'd-none' : ""}`}>{item.percentageId == null ? "" : item.percentageId.percentage} %</td>
                                        <td className={`col-table-4 ${Sfullname === 0 ? 'd-none' : ""}`}>{item.userNameId == null ? "" : item.userNameId.fullname}</td>
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
                                        <td className={`col-table-4 ${SNumMachine === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.NumMachine}</td>
                                        <td className={`col-table-4 ${SnameUnit === 0 ? '' : "d-none"}`}>{item.unitId == null ? "" : item.unitId.nameUnit}</td>
                                        <td className={`col-table-4 ${SVendor_code === 0 ? '' : "d-none"}`}>{item.Vendor_code}</td>
                                        <td className={`col-table-4 ${SMachineReference === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.MachineReference}</td>
                                        <td className={`col-table-4 ${Sversion_Machine_Num === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.version_Machine_Num}</td>
                                        <td className={`col-table-4 ${Sversion_Machine_Print === 0 ? '' : "d-none"}`}>{item.MachineId == null ? "" : item.MachineId.version_Machine_Print}</td>
                                        <td className={`col-table-4 ${Sname === 0 ? '' : "d-none"}`}>{item.name}</td>
                                        <td className={`col-table-4 ${Sage === 0 ? 'd-none' : ""}`}>{item.age}</td>
                                        <td className={`col-table-4 ${Sphone === 0 ? 'd-none' : ""}`}>{item.phone}</td>
                                        <td className={`col-table-4 ${SProvince === 0 ? 'd-none' : ""}`}>{item.Province}</td>
                                        <td className={`col-table-4 ${SDistrict === 0 ? 'd-none' : ""}`}>{item.District}</td>
                                        <td className={`col-table-4 ${SVillage === 0 ? 'd-none' : ""}`}>{item.Village}</td>
                                        <td className={`col-table-4 ${SDateMachine === 0 ? 'd-none' : ""}`}>{item.MachineId == null ? "" : (Moment(item.MachineId.DateMachine).format("YYYY-MM-DD"))}</td>
                                        <td className={`col-table-4 ${SpercentageIdName === 0 ? 'd-none' : ""}`}>{item.percentageId == null ? "" : item.percentageId.name}</td>
                                        <td className={`col-table-4 ${Spercentage === 0 ? 'd-none' : ""}`}>{item.percentageId == null ? "" : item.percentageId.percentage} %</td>
                                        <td className={`col-table-4 ${Sfullname === 0 ? 'd-none' : ""}`}>{item.userNameId == null ? "" : item.userNameId.fullname}</td>
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