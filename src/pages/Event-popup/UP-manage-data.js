import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import DB from '../../services/enpiot'
import Swal from "sweetalert2";
import '../../services/enpiot'

export default function Up_manage_data (props) {
    const propsUID = props.id
    // console.log(propsUID)

    const [name, setname] = useState('')
    const [percentage, setpercentage] = useState('')
    
    useEffect(() => {
        axios.get(DB.URL + DB.UIDPercentage + propsUID).then((res) => {
            setname(res.data.name)
            setpercentage(res.data.percentage)
        })
    },[])

    const Updatemanage = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            percentage: percentage
        }
        axios.put(DB.URL + DB.PutPercentage + propsUID , formData).then((res) => {
            Swal.fire({
                position: 'top-end',
                width: '400px',
                icon: 'success',
                title: 'ອັບເດດຂໍ້ມູນສຳເລັດ',
                showConfirmButton: false,
                timer: 1500
              })
        }).catch(error => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'warning',
                title: 'ເກິດຂໍ້ຜິດພາດໃນການແກ້ໄຂຂໍ້ມູນ'
              })
        })
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <Button onClick={handleShow}><i class="bi bi-pencil-square"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <form onSubmit={Updatemanage} method="PUT">
            <div class="modal-xl position-modal">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ຈັດການຂໍ້ມູນ ເປີເຊັນ</strong></h4>
                    <button type="button"  onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>ປະເພດຜູ້ຂາຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-person-video2"></i></span>
                                <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} placeholder="ກະລຸນາປ່ອນ ປະເພດຜູ້ຂາຍ" required/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>ຈຳນວນ ເປີເຊັນ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-percent"></i></span>
                                <input type="number" min="0" className="form-control" value={percentage} onChange={(e) => setpercentage(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" onClick={handleClose}><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                    <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                </div>
                </div>
            </div>
            </form>
        </Modal>
        </>
    )
}