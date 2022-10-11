import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import IN_unit from './Event-popup/IN_unit'
import UP_unit from "./Event-popup/UP_unit";

const Unit = () => {

    let x = 1

    const [ reducer, setRedeuce ] = useReducer(x => x + 1, 0)
    const [getunit, setgetunit] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/unit/getunit').then((res) => {
            setgetunit(res.data.reverse())
            setRedeuce()
        })
    }, [reducer])

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = getunit.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setgetunit([...getunit])
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
                axios.delete(`http://localhost:3001/unit/DeleteUnit/${_id}`).then((res) => {
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
                    <div class="clearfix card-group">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <Link to="/Manage_data" class="nav-link">ເປີເຊັນ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/Vending_machine" class="nav-link">ເຄື່ອງຂາຍເລກ</Link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <Link to="/Unit" class="nav-link active">ໜ່ວຍ</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body colums-group-padding">
                        <div className="col-4">
                            <input type="search" class="form-control float-start col-md-4" value={value} onChange={fillterData} placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-12">
                            <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#IN_Unit"><i class="bi bi-cloud-download-fill"></i> ເພີມຂໍ້ມູນ</button>
                        </div>
                    </div>

                    <div class="card colums-group-padding">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ລຳດັບ</th>
                                    <th scope="col">ເລກໜ່ວຍ</th>
                                    <th scope="col">ໜ່ວຍ</th>
                                    <th scope="col">ເບີໂທ</th>
                                    <th scope="col">ສາຂາ</th>
                                    <th scope="col" class="float-center">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                             {value.length > 0 ? tableFiller.map((item) => {
                                    return (
                                        <tr className="hover-table" key={item.id}>
                                            <th scope="row">{x++}</th>
                                            <td>{item.Unit_Num}</td>
                                            <td>{item.nameUnit}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.selectBranch}</td>
                                            <td>
                                                <UP_unit id={item._id}/>
                                                <a href="#" className="btn btn-danger" onClick={() => Delete(item._id)}><i class="bi bi-trash3-fill"></i></a>
                                            </td>
                                        </tr>
                                    )
                                    }): getunit.map((item, index) => {
                                        return (
                                            <tr className="hover-table" key={item.id}>
                                                <th scope="row">{x++}</th>
                                                <td>{item.Unit_Num}</td>
                                                <td>{item.nameUnit}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.selectBranch}</td>
                                                <td>
                                                    <UP_unit id={item._id}/>
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
            <IN_unit/>
            {/* Event-popup */}

        </>
    )
}

export default Unit