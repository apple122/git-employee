import axios from "axios";
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from "react";
import Swal from 'sweetalert2'

const Inser_manage = () => {

    const [formvalue, setValue] = useState({})
    const handleChange = (e) => {
        const { name, value} = e.target;
        setValue({...formvalue, [name]: value})
    }
    const Submit = (e) => {
        e.preventDefault()
        setValue(
            axios.post('http://localhost:3001/user/createUser',formvalue).then((res)=> {
                console.log(res)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                // window.location(false)
            }).catch(() => {alert("erorr")})
        )
    }
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button onClick={handleShow}><i class="bi bi-cloud-plus-fill"></i> ເພີມຂໍ້ມູນ</Button>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={Submit}>
                    <div class="modal-xl position-modal">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="staticBackdropLabel"><strong><i class="bi bi-person-lines-fill"></i> ເພີມຂໍ້ມູນ ຜູ້ບໍລິຫານ</strong></h4>
                                <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>ຊື່ແລະນາມສະກູນ</label>
                                            <input type="text" className="form-control" name="fullname" value={formvalue.fullname} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ຊື່ແລະນາມສະກູນ" />
                                        </div>&nbsp;

                                        <div className="form-group">
                                            <label>ຊືຜູ້ໃຊ້ງານ</label>
                                            <input type="text" name="username" className="form-control" value={formvalue.username} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ຊືຜູ້ໃຊ້ງານ"/>
                                        </div>&nbsp;

                                        <div className="form-group">
                                            <label>ລະຫັດຜ່ານ</label>
                                            <input type="password" name="password" className="form-control" value={formvalue.password} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ລະຫັດຜ່ານ"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>ສະຂາ</label>
                                            <select type="text" name="permanent_branch" onChange={handleChange} className="form-control">
                                                <option value={formvalue.permanent_branch}>ກະລຸນາເລືອກ</option>
                                                <option value={formvalue.permanent_branch}>ສາຂາ1</option>
                                            </select>
                                        </div>&nbsp;

                                        <div className="form-group">
                                            <label>ສະຖານະຜູ້ຂາຍ</label>
                                            <select type="text" name="userType" onChange={handleChange} className="form-control">
                                                <option>ກະລຸນາເລືອກ</option>
                                                <option value={formvalue.userType}>Admin</option>
                                                <option value={formvalue.userType}>Management</option>
                                                <option value={formvalue.userType}>Employee</option>
                                            </select>
                                        </div>&nbsp;

                                        <div className="form-group">
                                            <label>ເບີໂທ</label>
                                            <input type="text" name="phone" className="form-control" value={formvalue.phone} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເບີໂທ"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" onClick={handleClose} class="btn btn-secondary Sub" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                                <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-plus-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default Inser_manage