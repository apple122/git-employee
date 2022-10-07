import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import '../../services/enpiot'

export default function IN_Vending_machine () {

    const [CreateMachine, setCreateMachine] = useState({})
    const handleChange = (e) => {
        const { name, value} = e.target;
        setCreateMachine({...CreateMachine, [name]: value})
    }

    const Submit = (e) => {
        e.preventDefault()
        setCreateMachine(
            axios.post('http://localhost:3001/machine/createMachine', CreateMachine).then((res) => {
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

    return (
        <>
        <div class="modal fade" id="IN_Vending_machine" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={Submit}>
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ເພີມຂໍ້ມູນ ເຄື່ອງຂາຍເລກ</strong></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <div className="form-group col-md-6">
                        <label>ເລກທີເຄື່ອງຂາຍເລກ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-hash"></i></span>
                            <input type="number" className="form-control" min="0" name="NumMachine" value={CreateMachine.NumMachine} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ປະເພດຜູ້ຂາຍ" required/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ເລກອ້າງອິງ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-hash"></i></span>
                            <input type="number" min="0" className="form-control" name="MachineReference" value={CreateMachine.MachineReference} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ລຸ່ນເຄື່ອງຂາຍ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-tablet"></i></span>
                            <input type="text" className="form-control" name="version_Machine_Num" value={CreateMachine.version_Machine_Num} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ລຸ່ນເຄື່ອງພີມ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-printer-fill"></i></span>
                            <input type="text" className="form-control" name="version_Machine_Print" value={CreateMachine.version_Machine_Print} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                        </div>
                    </div>
                    <input type="hidden" name="status" value={CreateMachine.status="ວ່າງ"} onChange={handleChange}/>
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                    <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                </div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}