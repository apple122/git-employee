import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import '../../services/enpiot'
import DB from '../../services/enpiot'

export default function IN_manage_data () {

    const [ Branc, setBranch ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetBranch).then((res) => {
            setBranch(res.data.reverse())
        })
    }, [])

    const [createUnit, setcreateUnit] = useState({})
    const handleChange = (e) => {
        const { name, value} = e.target;
        setcreateUnit({...createUnit, [name]: value})
        console.log(createUnit)
    }

    const Submit = (e) => {
        e.preventDefault()
        setcreateUnit(
            axios.post('http://localhost:3001/unit/createUnit', createUnit).then((res) => {
                Swal.fire({
                    position: 'top-end',
                    width: '400px',
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(() => {alert("erorr")})
        )
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <Button onClick={handleShow}><i class="bi bi-cloud-download-fill"></i> ເພີມຂໍ້ມູນ</Button>
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={Submit}>
            <div class="modal-xl position-modal">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ເພີມຂໍ້ມູນ ໜ່ວຍ</strong></h4>
                    <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <div className="col-md-6">

                        <div className="form-group">
                            <label>ເລກໜ່ວຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                <input type="number" className="form-control" name="Unit_Num" value={createUnit.Unit_Num} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເລກໜ່ວຍ" required/>
                            </div>
                        </div>

                        <div className="form-group\">
                            <label>ຊື່ແລະນາມສະກຸນ ຫົວໜ້າໜວຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-person-badge"></i></span>
                                <input type="text" className="form-control" name="nameUnit" value={createUnit.nameUnit} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ຊື່ແລະນາມສະກຸນ ຫົວໜ້າໜວຍ" required/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-6">

                        <div className="form-group">
                            <label>ເບີໂທ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                                <input type="number" className="form-control" name="phone" value={createUnit.phone} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເບີໂທ" required/>
                            </div>
                        </div>
                
                        <div className="form-group">
                            <label>ສາຂາ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-shop-window"></i></span>
                                <select className="form-control" name="selectBranch" onChange={handleChange} required>
                                    <option>ເລືອກສາຂາ</option>
                                    {Branc.map((item) => (
                                        <option value={item._id}>{item.branch}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                </div> 
                <div class="modal-footer">
                    <button type="button" onClick={handleClose} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                    <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                </div>
                </div>
            </div>
            </form>
        </Modal>
        </>
    )
}