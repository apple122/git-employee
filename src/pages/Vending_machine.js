import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import IN_Vending_machine from "./Event-popup/IN_Vending_machine";
import UP_Vending_machine from "./Event-popup/UP_Vending_machine";

const Vending_machine = () => {

    let x = 1

    const [ reducer, setRedeuce ] = useReducer(x => x + 1, 0)
    const [GETCreateMachine, setGETCreateMachine] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/machine/getMachine').then((res) => {
            setGETCreateMachine(res.data.reverse())
            setRedeuce()
        })
    }, [reducer])

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])

    const fillterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value);
            const fillterTable = GETCreateMachine.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTablefiller([...fillterTable])
        }else{
            setValue(e.target.value);
            setGETCreateMachine([...GETCreateMachine])
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
                axios.delete(`http://localhost:3001/machine/DeleteMachine/${_id}`).then((res) => {
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
                                <Link to="/Vending_machine" class="nav-link active">ເຄື່ອງຂາຍເລກ</Link>
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
                        <div className="col-12 ">
                            <div class="float-end"><IN_Vending_machine/></div>
                        </div>
                    </div>

                    <div class="card colums-group-padding scollview-table">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ລຳດັບ</th>
                                    <th scope="col">ເລກທີເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col">ເວກອ້າງອິງ</th>
                                    <th scope="col">ລຸ່ນເຄື່ອງຂາຍ</th>
                                    <th scope="col">ລຸ່ນເຄື່ອງພີມ</th>
                                    <th scope="col">ສະຖານະ</th>
                                    <th scope="col" class="float-center">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                            {value.length > 0 ? tableFiller.map((item) => {
                                    return (
                                        <tr className="hover-table" key={item.id}>
                                            <th scope="row">{x++}</th>
                                            <td>{item.NumMachine}</td>
                                            <td>{item.MachineReference}</td>
                                            <td>{item.version_Machine_Num}</td>
                                            <td>{item.version_Machine_Print}</td>
                                            <td>
                                                {
                                                    item.status === "ວ່າງ" && (<div className="btn btn-warning">{item.status}</div>)
                                                }
                                                {
                                                    item.status === "ໃຊ້ງານ" && (<div className="btn btn-success">{item.status}</div>)
                                                }
                                            </td>
                                            <td>
                                                <UP_Vending_machine id={item._id}/>&nbsp;
                                                <a href="#" className="btn btn-danger" onClick={() => Delete(item._id)}><i class="bi bi-trash3-fill"></i></a>
                                            </td>
                                        </tr>
                                    )
                                    }): GETCreateMachine.map((item, index) => {
                                        return (
                                            <tr className="hover-table" key={index}>
                                               <th scope="row">{x++}</th>
                                                <td>{item.NumMachine}</td>
                                                <td>{item.MachineReference}</td>
                                                <td>{item.version_Machine_Num}</td>
                                                <td>{item.version_Machine_Print}</td>
                                                <td>
                                                    {item.status == "false" ? "" : (<div className="btn btn-sm btn-warning">{item.status == "false" ? "" : ("ວ່າງ")}</div>)}
                                                    {item.status == "true" ? "" : (<div className="btn btn-sm btn-success">{item.status == "true" ? "" : ("ໃຊ້ງານ")}</div>)}
                                                </td>
                                                <td>
                                                    <UP_Vending_machine id={item._id}/>&nbsp;
                                                    {item.status == "false" ? "" : (
                                                        <a href="#" className="btn btn-danger" onClick={() => Delete(item._id)}><i class="bi bi-trash3-fill"></i></a>
                                                    )}
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

export default Vending_machine