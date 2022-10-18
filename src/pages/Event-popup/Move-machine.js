import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';
import DB from '../../services/enpiot'

export default function Move_machine () {

    const [selectedOption, setSelectedOption] = useState(null);

    const [ showEvent, setShowevent ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetRegister).then((res) => {
            setShowevent(res.data.reverse())
        })
     
    },[])

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <Button onClick={handleShow}><i class="bi bi-cloud-download-fill"></i> ຍ້ານເຄື່ອງຂາຍ</Button>
        <Modal show={show} onHide={handleClose}>
            <form>
                <div class="modal-xl position-modal">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">ຍ້າຍເຄື່ອງ</h5>
                        <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="form-group group-renative">
                                        <label>ເລກທີ່ເຄື່ອງຂາຍເລກ</label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={
                                                showEvent.filter((e) => e.MachineId == null ? "" : e.MachineId.status === "ໃຊ້ງານ").map((item)=>(
                                                    {value: item._id, label: item.MachineId.NumMachine}
                                                ))
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>ລຸ້ນຂອງເຄື່ອງຂາຍ</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                            <input type="text" aria-label="First name" class="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>ລຸ້ນຂອງເຄື່ອງພິມ</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                            <input type="text" aria-label="First name" class="form-control"/>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label>ເລກທີອ້າງອີງ</label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                            <input type="text" aria-label="First name" class="form-control"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>ຫນ່ວຍ</label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="bi bi-toggle-off"></i></span>
                                            <input type="text" aria-label="First name" class="form-control"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>ຍ້າຍໄປຫນ່ວຍ</label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                            <input type="text" aria-label="First name" class="form-control"/>
                                        </div>
                                    </div>
                                    </div>
                                    </div>

        
                                </div>
                                
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onClick={handleClose} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ</button>
                        <button type="button" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ຍ້າຍເຄື່ອງ </button>
                    </div>
                    </div>
                </div>
            </form>
        </Modal>
        </>
    )
}