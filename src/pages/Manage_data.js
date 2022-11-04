import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import DB from '../services/enpiot'
import './style.css'
import Inert_Manage_data from './Event-popup/Insert-manage-data'
import Up_manage_data from "./Event-popup/UP-manage-data";
import axios from "axios";
import Swal from "sweetalert2";


const Manage_data = () => {
    let x = 1

    const [ reducer, setRedeuce ] = useReducer(x => x + 1, 0)
    const [GETPercentage, setGETPercentage] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetPercentage).then((res) => {
            setGETPercentage(res.data.reverse())
            setRedeuce()
        })
    },[reducer])
   

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = GETPercentage.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setGETPercentage([...GETPercentage])
        }
    }

    const Delete = (_id) => {
        Swal.fire({
            title: 'ທ່ານຕ້ອງການລົບຂໍ້ມູນນີ້ແທ້ຫຼືບໍ່?',
            text: "ຂໍ້ມູນນີ້ມີການເຊື່ອມໂຍງກັບຂໍ້ມູນອືນໆ ກະລຸນາກອດສອບໃຫ້ແນ່ໃຈກອນຈະລົບ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ລົບຂໍ້ມູນ!'
          }).then((result) => {
            if (result.isConfirmed) {
                (async () => {

                    const { value: confirm } = await Swal.fire({
                      title: 'ຍືນຍັນການລົບຂໍ້ມູນ',
                      input: 'text',
                      inputLabel: 'ພີມ " ລົບ " ເພືອທຳການລົບ',
                      inputPlaceholder: 'Confirm " ລົບ "',
                      inputAttributes: {
                        maxlength: 10,
                        autocapitalize: 'off',
                        autocorrect: 'off'
                      }
                    })
                    
                    if (confirm == "ລົບ") {
                        axios.delete(DB.URL + DB.DePercentage + _id).then((res) => {
                            Swal.fire(
                                'ລົບຂໍ້ມູນສຳເລັດ!',
                                'Your file has been deleted.',
                                'success'
                            )
                        })
                    }
                    
                })()
            }
          })
    }


      const [ UIDusername, setUIDname ] = useState([])
      const token = localStorage.getItem("token")
      useEffect(() => {
        axios.get("http://localhost:3001/user/GetUserProfile" ,{ headers : {authorization : token}}).then((res) => {
            setUIDname(res.data)
            console.log(res.data[0].username)
        })
      }, [])

    return (
        <>
            <div className="container-content colums-group-padding">
                <div className="container-full">
                    <div class="clearfix card-group">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <Link to="/Manage_data" class="nav-link active">ເປີເຊັນ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/Vending_machine" class="nav-link">ເຄື່ອງຂາຍເລກ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/Unit" class="nav-link">ໜ່ວຍ</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body colums-group-padding">
                        <div className="col-4">
                            <input type="search" class="form-control float-start col-md-4" value={value} onChange={fillterData} placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-12">
                            <div className="float-end"><Inert_Manage_data/></div>
                        </div>
                    </div>

                    <div class="card colums-group-padding">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ລຳດັບ</th>
                                    <th scope="col">ປະເພດຜູ້ຂາຍ</th>
                                    <th scope="col">ເປີເຊັນ</th>
                                    <th scope="col" class="float-center">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                            {value.length > 0 ? tableFiller.map((item) => {
                                    return (
                                        <tr className="hover-table" key={item.id}>
                                            <th scope="row">{x++}</th>
                                            <td>{item.name}</td>
                                            <td>{item.percentage}%</td>
                                            <td>
                                                <Up_manage_data id={item._id}/>
                                                <a href="#" className="btn btn-danger" onClick={() => Delete(item._id)}><i class="bi bi-trash3-fill"></i></a>
                                            </td>
                                        </tr>
                                    )
                                    }): GETPercentage.map((item, index) => {
                                        return (
                                            <tr className="hover-table" key={index}>
                                                <th scope="row">{x++}</th>
                                                <td>{item.name}</td>
                                                <td>{item.percentage}%</td>
                                                <td>
                                                    <Up_manage_data id={item._id}/>
                                                    <a href="#" className="btn btn-danger" onClick={() => Delete(item._id)}><i class="bi bi-trash3-fill"></i></a>
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
            {/* Event-popup */}

        </>
    )
}

export default Manage_data