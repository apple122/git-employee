import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';


const Insert_branch = () => {

    const [valuename, setValue] = useState({})
    const handleChange = (e) => {
        const {name, value} = e.target
        setValue({...valuename, [name]: value})
    }

    const Submit = (e) => {
        e.preventDefault()
        setValue(
            axios.post(DB.URL + DB.PostBranch ,valuename).then((res)=> {
                Swal.fire({
                    position: 'top-end',
                    width: '400px',
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
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
                            <h4 class="modal-title" id="staticBackdropLabel"><strong><i class="bi bi-person-lines-fill"></i> ເພີມຂໍ້ມູນ ສາຂາ</strong></h4>
                            <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ສາຂາ</label>
                                        <input type="text" className="form-control" name="branch" onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ສາຂາ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ຊື່ຫົວໜ້າສາຂາ</label>
                                        <input type="text" className="form-control" name="Name_branch_Chief" onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ຊື່ຫົວໜ້າສາຂາ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ເບີໂທຕິດຕໍ່</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+865</span>
                                            <NumberFormatBase className="form-control" name="phone" onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເບີໂທຕິດຕໍ່"/>
                                        </div>
                                    </div>&nbsp;
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ແຂວງ</label>
                                        <input type="text" className="form-control" name="province" onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ແຂວງ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ເມືອງ</label>
                                        <input type="text" className="form-control" name="district" onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເມືອງ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ບ້ານ</label>
                                        <input type="text" className="form-control" name="village" onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ບ້ານ"/>
                                    </div>&nbsp;
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={handleClose} class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                            <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-plus-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                        </div>
                    </div>
                </div>
                </form>
            </Modal>
        </>
    )
}

export default Insert_branch