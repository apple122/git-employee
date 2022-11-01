import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import '../../services/enpiot'
import moment from "moment/moment"
export default function IN_Vending_machine () {
  const [ NumberMachineError , setNumberMachineError] = useState(false)
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
                console.log(CreateMachine)
            })
            .catch((error) => {
                // alert("erorr")
                console.log(error)
       let code = 0 ;
       if(error.response && error.response.data && error.response.data.code){

        code = error.response.data.code
          if(code == 1){
            // setNumberMachineError(true)
              console.log("Error Machine Number")
            Swal.fire({
               
                icon: 'error',
                title: 'ຂໍ້ມູນທີ່ທ່ານປ້ອນມີແລ້ວ ກະລຸນາປ້ອນຂໍ້ມູນໃໝ່ ',
                showConfirmButton: false,
                timer: 1500
            })
            return
          }
       }

            })
         ) 
    }
    async function OnSubMitMachine() {
    try {
          const data = await axios.post("http://localhost:3001/machine/createMachine" , CreateMachine)

   if(data.status == 200){
    Swal.fire({
        position: 'top-end',
        width: '400px',
        icon: 'success',
        title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
        showConfirmButton: false,
        timer: 1500
    })
    console.log(data.data)
   }

    } catch (error) {
        console.log(error)
  let code = 0;
  if(error.response && error.response.data && error.response.data.code){

    code = error.response.data.code
    if(code === 1){
        console.log("Error Machine Number")
        Swal.fire({
           
            icon: 'error',
            title: 'ຂໍ້ມູນທີ່ທ່ານປ້ອນມີແລ້ວ ກະລຸນາປ້ອນຂໍ້ມູນໃໝ່ ',
            showConfirmButton: false,
            timer: 1500
        })
       
    }
}

    }

    }
   const [NumMachine , setNumMachine] =useState(null)

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
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ເພີມຂໍ້ມູນ ເຄື່ອງຂາຍເລກ</strong></h4>
                    <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <div className="col-md-6">

                        <div className="form-group">
                            <label>ເລກທີເຄື່ອງຂາຍເລກ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                <input type="number" className="form-control" min="0" name="NumMachine" value={CreateMachine.NumMachine} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ປະເພດຜູ້ຂາຍ" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>ເລກອ້າງອິງ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                <input type="number" min="0" className="form-control" name="MachineReference" value={CreateMachine.MachineReference} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                            </div>
                        </div>

                    </div>
                
                    <div className="col-md-6">
                        
                        <div className="form-group">
                            <label>ລຸ່ນເຄື່ອງຂາຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-tablet"></i></span>
                                <input type="text" className="form-control" name="version_Machine_Num" value={CreateMachine.version_Machine_Num} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>ລຸ່ນເຄື່ອງພີມ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-printer-fill"></i></span>
                                <input type="text" className="form-control" name="version_Machine_Print" value={CreateMachine.version_Machine_Print} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
                            </div>
                        </div>
                        
                    </div>
                    
                  
                </div> 
                <div class="modal-footer">
                    <button type="button" onClick={OnSubMitMachine} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                    <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                </div>
                </div>
            </div>
            </form>
        </Modal>
        </>
    )
}