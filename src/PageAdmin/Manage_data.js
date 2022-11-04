import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Inser_manage from "./Event-popup/Insert_manage";
import Update_manage from "./Event-popup/Update-manage_data";

const Manage_data = (props) => {

    let x = 1
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
                axios.delete(`http://localhost:3001/user/DeleteUser/${_id}`).then((res) => {
                    Swal.fire(
                        'ລົບຂໍ້ມູນສຳເລັດ!',
                        'Your file has been deleted.',
                        'success'
                      )
                })
            }
          })
    }

    const [ manage_data, setManage ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/user/getUser').then((Response) => {
            setManage(Response.data)
            // console.log(Response.data)
        })
    }, [])

    // Box table data Search 
    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = manage_data.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setManage([...manage_data])
        }
    }

    // Update 
    function Update({id}){
        console.log(id)
        
    }

    return (
        <>
            <div className="container-content">
                <div className="container-full">
                    <div class="clearfix card-group">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <Link to="/Manage_data" class="nav-link active">ຜູ້ບໍລິຫານ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/Administrator" class="nav-link">ສະຖານະຜູ້ຂາຍ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/branch" class="nav-link">ສາຂາ</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body colums-group-padding">
                        <div className="col-4">
                            <input type="search" class="form-control float-start col-md-4" value={value} onChange={fillterData} placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-12">
                            <div className="float-end"><Inser_manage /></div>
                        </div>
                    </div>
                    <label className="label-table-amount"><strong>ລວມທັ້ງໝົດ {manage_data.length} ຄົນ</strong></label>
                    <div className="card">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">ຊື່ ແລະ ນາມສະກຸນ</th>
                                <th scope="col">ສາຂາ</th>
                                <th scope="col">ຊືຜູ້ໃຊ້ງານ</th>
                                <th scope="col">ເບີໂທ</th>
                                <th scope="col">ສະຖນາະ</th>
                                <th>ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {value.length > 0 ? tableFiller.map((item) => {
                                    return (
                                        <tr className="hover-table" key={item.id}>
                                            <th scope="row">{x++}</th>
                                            <td>{item.fullname}</td>
                                            <td>{item.permanent_branch}</td>
                                            <td>{item.username}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.userType}</td>
                                            <td>
                                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Update_manage"><i class="bi bi-pencil-square"></i></a> &nbsp;
                                                <a href="#" className="btn btn-danger" onClick={() => Delete(item._id)}><i class="bi bi-trash3-fill"></i></a>
                                            </td>
                                        </tr>
                                    )
                                    }): manage_data.map((item, index) => {
                                        return (
                                            <tr className="hover-table" key={index}>
                                                <th scope="row">{x++}</th>
                                                <td>{item.fullname}</td>
                                                <td>{item.permanent_branch}</td>
                                                <td>{item.username}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.userType}</td>
                                                <td>
                                                    <a href="#" className="btn btn-primary" onClick={() => Update(item._id)} data-bs-toggle="modal" data-bs-target="#Update_manage"><i class="bi bi-pencil-square"></i></a> &nbsp;
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
            {/* Modol popup Management*/}
            {/* Modol popup */}
        </>
    )
}

export default Manage_data