import axios from "axios";
import React, { useState } from "react";
import DB from '../../services/enpiot'
import Swal from "sweetalert2";
import '../../services/enpiot'
import { Button, Modal } from 'react-bootstrap';


export default function IN_manage_data () {

    const [CreatePercentage, setCreatePercentage] = useState({})
    const handleChange = (e) => {
        const { name, value} = e.target;
        setCreatePercentage({...CreatePercentage, [name]: value})
    }

    const Submit = (e) => {
        e.preventDefault()
        setCreatePercentage(
            axios.post(DB.URL + DB.PostcreatePercentage, CreatePercentage).then((res) => {
                console.log(res)
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
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ເພີມຂໍ້ມູນ ເປີເຊັນ</strong></h4>
                    <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>ປະເພດຜູ້ຂາຍ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-person-video2"></i></span>
                                    <input type="text" className="form-control" name="name" value={CreatePercentage.name} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ປະເພດຜູ້ຂາຍ" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>ຈຳນວນ ເປີເຊັນ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-percent"></i></span>
                                    <input type="number" min="0" className="form-control" name="percentage" value={CreatePercentage.percentage} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                                </div>
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