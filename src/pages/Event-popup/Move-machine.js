import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';
import DB from '../../services/enpiot'
import Moment from 'moment';
import swal from 'sweetalert';


export default function Move_machine () {

    const [ UserUFullanem, setUIDname ] = useState()
    const [ UserName, setName ] = useState()
    const [ USerUID, setUIDUser ] = useState()

    const token = localStorage.getItem("token")

    const [ selectedOption, setSelectedOption ] = useState(null);
    const [ MoveSelect, setMoveSelect ] = useState(null)

    const [ showEvent, setShowevent ] = useState([])
    const [ showEventNull, setStatusNull ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
            setUIDname(res.data.fullname)
            setName(res.data.username)
            setUIDUser(res.data._id)
        })

        axios.get(DB.URL + DB.GetRegister).then((res) => {
            setShowevent(res.data.reverse())
        })

        axios.get(DB.URL + DB.GetMachine).then((res) => {
            setStatusNull(res.data.reverse())
        })
    }, [])

    
    // GetID_Machince

    const [ MachineReferencex, setMachineReference ] = useState(null)
    const [ version_Machine_Num, setversion_Machine_Num ] = useState(null)
    const [ version_Machine_Print, setversion_Machine_Print ] = useState(null)
    const [ UIDMAc, setUIDMAc ] = useState(null)
    const [ UIDREGIST, setREGIST ] = useState()
    if(selectedOption){
        axios.get(DB.URL + DB.UIDRegister + selectedOption.value).then((res) => {
            setREGIST(res.data.MachineId)
        })

        axios.get(DB.URL + DB.UIDMachine + UIDREGIST).then((res) => {
            setMachineReference(res.data.MachineReference)
            setversion_Machine_Num(res.data.version_Machine_Num)
            setversion_Machine_Print(res.data.version_Machine_Print)
        })
    }

    const [ MoveMachineReferencex, setMoveMachineReference ] = useState(null)
    const [ MoveNumMachine, setMoveNumMachine ] = useState(null)
    const [ Moveversion_Machine_Num, setMoveversion_Machine_Num ] = useState(null)
    const [ Moveversion_Machine_Print, setMoveversion_Machine_Print ] = useState(null)
    if(MoveSelect){
        axios.get(DB.URL + DB.UIDMachine + MoveSelect.value).then((res) => {
            setMoveMachineReference(res.data.MachineReference)
            setMoveNumMachine(res.data.NumMachine)
            setMoveversion_Machine_Num(res.data.version_Machine_Num)
            setMoveversion_Machine_Print(res.data.version_Machine_Print)
        })
    }

    async function OnSubmit () {
        try {
            const dataS = {
                Number_Machine_Num: MoveNumMachine,
                Number_Reference: MoveMachineReferencex,
                version_Machine_sell: MoveSelect.label,
                Current_Machine_Unit: version_Machine_Num,
                version_Machine_Print: Moveversion_Machine_Print,
                Machine_Move_new: MoveSelect.label,
                DateMove: Moment().format("YYYY-MM-DD"),
                userId: USerUID,
                registerId: selectedOption.value
            }

            const UpdataS = {
                MachineId: MoveSelect.value
            }

            const MacDataMove = {
                status: "ໃຊ້ງານ"
            }

            const OptionsS = {
                status: "ວ່າງ"
            }

            const data = await axios.post(DB.URL + DB.PostCreateMoveMachine , dataS)
            if(data.status == 200){
                axios.put(DB.URL + DB.PutRegister + selectedOption.value , UpdataS)
                const Sdata = await axios.put(DB.URL + DB.PutMachine + UIDREGIST , OptionsS)
                if(Sdata.status == 200){
                    axios.put(DB.URL + DB.PutMachine + MoveSelect.value , MacDataMove).then((res) => {
                        swal("ຍ້າຍເຄື່ອງຂາຍສຳເລັດ!", "You clicked the button!", "success")
                        .then((value) => {
                            window.location.reload(false)
                        });
                    })
                }
            }
        } catch (error) {
            alert("ບັນທືກຂໍ້ມູນຜິດພາດ")
        }
    }
    const Submit = (e) => {
        e.preventDefault()
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <Button onClick={handleShow}><i class="bi bi-cloud-download-fill"></i> ຍ້ານເຄື່ອງຂາຍ</Button>
        <Modal show={show} onHide={handleClose}>
            <form onSubmit={Submit}>
                <div class="modal-xl position-modal">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><strong>ຍ້າຍເຄື່ອງ</strong></h5>
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
                                                showEvent.filter((e) => e.upremove === null).map((item)=>(
                                                    {value: item._id, label: item.MachineId.NumMachine}
                                                ))
                                            }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>ເລກທີອ້າງອີງ</label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="bi bi-asterisk"></i></span>
                                            <input type="text" aria-label="First name" value={MachineReferencex} class="form-control" readOnly/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>ລຸ້ນຂອງເຄື່ອງຂາຍ</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i class="bi bi-tablet-landscape"></i></span>
                                            <input type="text" aria-label="First name" value={version_Machine_Num} class="form-control" readOnly/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>ລຸ້ນຂອງເຄື່ອງພິມ</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i class="bi bi-printer-fill"></i></span>
                                            <input type="text" aria-label="First name" value={version_Machine_Print} class="form-control" readOnly/>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label>ເຄື່ອງຂາຍໃຊ້ປະຈຸບັນ</label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="bi bi-tablet-landscape"></i></span>
                                            <input type="text" aria-label="First name" value={version_Machine_Num} class="form-control" readOnly/>
                                        </div>
                                    </div>

                                    <div className='form-group p-1 btn-time-center'>
                                        <label><strong>ຍ້າຍໄປເຄື່ອງຂາຍໄໝ່</strong></label><br/>
                                        <label><i class="bi bi-chevron-bar-down"></i></label>
                                    </div>

                                    <div className="form-group">
                                        <label><i class="bi bi-tablet-landscape-fill"></i> ເລືອກເຄື່ອງຂາຍທີ່ຈະຍ້າຍ</label>
                                        <Select
                                            defaultValue={MoveSelect}
                                            onChange={setMoveSelect}
                                            options={
                                                showEventNull.filter((e) => e.status === "ວ່າງ").map((item)=>(
                                                    {value: item._id, label: item.version_Machine_Num} 
                                                ))
                                            }
                                        />
                                    </div>
                                    
                                    <div className='form-group'>
                                        {MoveSelect && (
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">ເລກທີອ້າງອີງ</th>
                                                    <th scope="col">ເລກທີ່ເຄື່ອງຂາຍເລກ</th>
                                                    <th scope="col">ເຄື່ອງຂາຍເລກ</th>
                                                    <th scope="col">ເຄື່ອງພີມ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">{MoveMachineReferencex}</th>
                                                    <th>{MoveNumMachine}</th>
                                                    <td>{Moveversion_Machine_Num}</td>
                                                    <td>{Moveversion_Machine_Print}</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        )}
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onClick={handleClose} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ</button>
                        <button onClick={OnSubmit} class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ຍ້າຍເຄື່ອງ </button>
                    </div>
                    </div>
                </div>
            </form>
        </Modal>
        </>
    )
}