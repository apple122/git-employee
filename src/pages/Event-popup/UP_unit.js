import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import '../../services/enpiot'

export default function UP_unit (props) {
    const propsUID = props.id
    console.log(propsUID)

    const [UnitId, setUnitId] = useState('')
    const [phone, setphone] = useState('')
    const [nameUnit, setnameUnit] = useState('')
    const [selectBranch, setselectBranch] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:3001/unit/GetUnitById/${propsUID}`).then((res) => {
            setUnitId(res.data.UnitId)
            setphone(res.data.phone)
            setnameUnit(res.data.nameUnit)
            setselectBranch(res.data.selectBranch)
        })
    },[])

    const Updatemanage = (e) => {
        e.preventDefault()
        const formData = {
            UnitId: UnitId,
            phone: phone,
            nameUnit: nameUnit,
            selectBranch: selectBranch,
        }
        axios.put(`http://localhost:3001/unit/updateUnit/${propsUID}`, formData).then((res) => {
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
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ຈັດການຂໍ້ມູນ ໜ່ວຍ</strong></h4>
                    <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <div className="form-group col-md-6">
                        <label>ຊື່ແລະນາມສະກຸນ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-person-video2"></i></span>
                            <input type="text" className="form-control" name="nameUnit" value={nameUnit} onChange={(e) => setnameUnit(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ແລະນາມສະກຸນ" required/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ເບີໂທ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                            <input type="number" min="0" className="form-control" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເບີໂທ" required/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ໜ່ວຍ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-hash"></i></span>
                            <input type="text" className="form-control" name="UnitId" value={UnitId} onChange={(e) => setUnitId(e.target.value)} placeholder="ກະລຸນາປ່ອນ ໜ່ວຍ" required/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ສາຂາ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-shop-window"></i></span>
                            <input type="text" className="form-control" name="selectBranch" value={selectBranch} onChange={(e) => setselectBranch(e.target.value)} placeholder="ກະລຸນາປ່ອນ ສາຂາ" required/>
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