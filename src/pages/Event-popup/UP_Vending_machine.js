import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import '../../services/enpiot'


export default function UP_Vending_machine (props) {
    const propsUID = props.id;

    const [NumMachine, setNumMachine] = useState('')
    const [MachineReference, setMachineReference] = useState('')
    const [version_Machine_Num, setversion_Machine_Num] = useState('')
    const [version_Machine_Print, setversion_Machine_Print] = useState('')
    const [status, setstatus] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3001/Machine/getByIdMachine/${propsUID}`).then((res) => {
            setNumMachine(res.data.NumMachine)
            setversion_Machine_Num(res.data.version_Machine_Num)
            setversion_Machine_Print(res.data.version_Machine_Print)
            setMachineReference(res.data.MachineReference)
            setstatus(res.data.status)
        })
    },[])

    const Updatemanage = (e) => {
        e.preventDefault()
        const formData = {
            NumMachine: NumMachine,
            MachineReference: MachineReference,
            version_Machine_Num: version_Machine_Num,
            version_Machine_Print: version_Machine_Print,
        }
        axios.put(`http://localhost:3001/machine/updateMachine/${propsUID}`, formData).then((res) => {
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
                        <h4 class="modal-title" id="exampleModalLabel"><strong>ຈັດການແກ້ໄຂຂໍ້ມູນ ເຄື່ອງຂາຍເລກ</strong></h4>
                        <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row modal-body">
                        <div className="col-md-6">
                            
                            <div className="form-group">
                                <label>ເລກທີເຄື່ອງຂາຍເລກ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                    <input type="number" min="0" className="form-control" name="NumMachine" value={NumMachine} onChange={(e) => setNumMachine(e.target.value)} placeholder="ກະລຸນາປ່ອນ ປະເພດຜູ້ຂາຍ" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>ເລກອ້າງອິງ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                    <input type="number" min="0" className="form-control" name="MachineReference" value={MachineReference} onChange={(e) => setMachineReference(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເລກອ້າງອິງ" required/>
                                </div>
                            </div>
                           
                        </div>
                    
                        <div className="col-md-6">

                            <div className="form-group">
                                <label>ລຸ່ນເຄື່ອງຂາຍ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-tablet"></i></span>
                                    <input type="text" className="form-control" name="version_Machine_Num" value={version_Machine_Num} onChange={(e) => setversion_Machine_Num(e.target.value)} placeholder="ກະລຸນາປ່ອນ ລຸ່ນເຄື່ອງຂາຍ" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>ລຸ່ນເຄື່ອງພີມ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-printer-fill"></i></span>
                                    <input type="text" className="form-control" name="version_Machine_Print" value={version_Machine_Print} onChange={(e) => setversion_Machine_Print(e.target.value)} placeholder="ກະລຸນາປ່ອນ ລຸ່ນເຄື່ອງພີມ" required/>
                                </div>
                            </div>
                           
                        </div>

                        {/* <div className="form-group col-md-12">
                            <label>ສະຖານະ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-code-slash"></i></span>
                                <select className="form-control select-option-pad" onChange={(e)=> setstatus(e.target.value)}>
                                    <option value={status}>{status}</option>
                                    <option value="ໃຊ້ງານ" className="bg-success value-select-option">ໃຊ້ງານ</option>
                                    <option value="ວ່າງ" className="bg-warning value-select-option">ວ່າງ</option>
                                </select>
                            </div>
                        </div> */}
                    </div> 
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" onClick={handleClose} data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                        <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                    </div>
                </div>
            </div>
            </form>
        </Modal>
        </>
    )
}