import axios from "axios";
import React, { useEffect, useReducer, useState, Component } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import Moment from 'moment';
import DB from "../../services/enpiot"
import Select from 'react-select';
import swal from "sweetalert";



const WD_machine = () => {
    
    const [ UserUID, setUIDname ] = useState()
    const token = localStorage.getItem("token")
    useEffect(() => {
      axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
          setUIDname(res.data[0]._id)
      })
    }, [])

    const [selectedOption, setSelectedOption] = useState(null);

    const [ showEvent, setShowevent ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetRegister).then((res) => {
            setShowevent(res.data.reverse())
        })
     
    },[])

    const [ value, setvalue ] = useState('')
    const onChange = (event) => {
        setvalue(event.target.value)
    }

    const [ version_Machine_Num, setgetversion_Machine_Num ] = useState([])
    const [ MachineReference, setMachineReference ] = useState([])
    const [ version_Machine_Print, setversion_Machine_Print ] = useState([])
    const [ status, setstatus ] = useState([])
    const [ DateMachine, SetDateMachine ] = useState([])
    const [ uidmachine, setuidmachine ] = useState([])
    const [ NumMachine, setNumMachine ] = useState([])
    const [ Vendor_code, setVendor_code ] = useState([])
    const [ REUID, setREUID ] = useState([])
    const [ DateRegister, setDateRe ] = useState([])
 
    
    if(selectedOption){
        axios.get(DB.URL + DB.UGNMachine + selectedOption.label).then((res) => {
            setgetversion_Machine_Num(res.data.version_Machine_Num)
            setMachineReference(res.data.MachineReference)
            setversion_Machine_Print(res.data.version_Machine_Print)
            setstatus(res.data.status)
            SetDateMachine(res.data.DateMachine)
            setuidmachine(res.data._id)
            setNumMachine(res.data.NumMachine)
        }) 
        axios.get(DB.URL + DB.UIDRegister + selectedOption.value).then((res) => {
            setVendor_code(res.data.Vendor_code)
            setREUID(res.data._id)
            setDateRe(res.data.DateRegister)
        })
    }else{

    }

    async function Insert_pass () {
        const { value: password } = await Swal.fire({
            title: 'Enter your password',
            input: 'password',
            inputLabel: 'Password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          })
          
          if (password) {
            Swal.fire(`Entered password: ${password}`)
          }
    }

    const [createWithdraw, setWithdraw] = useState([])
    const [updatemachine, setupdatemachine] = useState([])

    const handleChange = (e) => {
        const { name, value} = e.target;
        setWithdraw({...createWithdraw, [name]: value})
        console.log(createWithdraw)
    }

    const data_uodate = {
        status: "ວ່າງ",
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        setWithdraw(
            axios.post(DB.URL+DB.PostWithDraw , createWithdraw).then((res) => {
                swal("ບັນທືກຂໍ້ມູນສຳເລັດ!", "You clicked the button!", "success")
                .then((value) => {
                    window.location.reload(false)
                });
            }),
            axios.put( DB.URL+DB.PutMachine +uidmachine , data_uodate).then((res) => {
                console.log(res)
            })

        )
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <Button onClick={handleShow}><i class="bi bi-cloud-download-fill"></i> ຖອນເຄື່ອງຂາຍ</Button>
        <Modal show={show} onHide={handleClose}>
        <form onSubmit={onSubmit} method="POST">
            <div class="modal-xl position-modal">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ຖອນເຄື່ອງ</h5>
                    <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group group-renative">
                                <label>ເລກທີ່ເຄື່ອງຂາຍເລກ ທີ່ຈະຖອນ</label>
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
                            <input type="hidden" onChange={handleChange} value={createWithdraw.NumMachine = NumMachine} name="NumMachine"/>

                            <div className="form-group">
                                <label>ລະຫັດຜູ້ຂາຍ</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                    <input type="text" className="form-control" value={Vendor_code} placeholder="ກະລຸນາປ່ອນ ລະຫັດຜູ້ຂາຍ" required readOnly/>
                                </div>
                                <input type="hidden" onChange={handleChange} value={createWithdraw.Vendor_code = REUID} name="Vendor_code"/>
                            </div>

                            <div className="form-group">
                                <label>ສາເຫດການຖອນ</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-journal-check"></i></span>
                                    <textarea type="text" onChange={handleChange} value={createWithdraw.withdrawal_event} name="withdrawal_event" required aria-label="First name" class="form-control" placeholder="ສາເຫດການຖອນ" style={{border: "1px solide green"}}/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>ສະຖານະ</label>
                                    <div class="input-group">
                                        <span class="input-group-text border-green"><i class="bi bi-toggle-on"></i></span>
                                        <input type="text" value="ໃຊ້ງານ" aria-label="First name" class="form-control border-green" required readOnly/>

                                        <input type="hidden" onChange={handleChange} value={createWithdraw.status_Machine = "ວ່າງ"} name="status_Machine"/>
                                        <input type="hidden" onChange={handleChange} value={createWithdraw.userId = UserUID} name="userId"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6">

                            <div className="form-group">
                                <label>ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</label>
                                <div className="input-group">
                                    <span className="input-group-text border-overflow"><i class="bi bi-hash"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.version_Machine_sell_Num = version_Machine_Num}  onChange={handleChange}  name="version_Machine_sell_Num" required readOnly class="form-control border-overflow"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>ລຸ້ນຂອງເຄື່ອງພິມ</label>
                                <div className="input-group">
                                    <span className="input-group-text border-overflow"><i class="bi bi-printer-fill"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.version_Machine_Print = version_Machine_Print} onChange={handleChange}  name="version_Machine_Print" required readOnly class="form-control border-overflow"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>ເລກທີອ້າງອີງ</label>
                                    <div class="input-group">
                                        <span class="input-group-text border-overflow"><i class="bi bi-hash"></i></span>
                                        <input type="text" aria-label="First name" value={createWithdraw.Machine_Reference_Num = MachineReference} onChange={handleChange}  name="Machine_Reference_Num" required readOnly class="form-control border-overflow"/>
                                    </div>
                                </div>
                            
                            </div>
                            
                            <div className="form-group">
                                <label>ວັນທີການລົງທະບຽນ</label>
                                <div class="input-group">
                                    <span class="input-group-text border-overflow"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.DateRegister = Moment(DateRegister).format("YYYY-MM-DD")} onChange={handleChange}  name="DateRegister" class="form-control border-overflow" required readOnly/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>ວັນທີເປີດໃຊ້ງານ</label>
                                <div class="input-group">
                                    <span class="input-group-text border-overflow"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.DateRegister = Moment(DateRegister).format("YYYY-MM-DD")} onChange={handleChange}  name="DateRegister" class="form-control border-overflow" required readOnly/>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" onClick={handleClose} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ຍ້ອນກັບ</button>
                    <button type="submit" class="btn btn-primary" ><i class="bi bi-cloud-download-fill"></i> ຖອນ </button>
                </div>
                </div>
            </div>
            </form>
        </Modal>
        </>
    )
}

export default WD_machine