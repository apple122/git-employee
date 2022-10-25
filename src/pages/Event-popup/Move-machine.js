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
    const [ showUnit, setShowUnit ] = useState([])

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

        axios.get(DB.URL + DB.GetUnit).then((res) => {
            setShowUnit(res.data.reverse())
        })
    }, [])

    
    // GetID_Machince

    const [ MachineReferencex, setMachineReference ] = useState(null)
    const [ version_Machine_Num, setversion_Machine_Num ] = useState(null)
    const [ version_Machine_Print, setversion_Machine_Print ] = useState(null)
    const [ UIDMAc, setUIDMAc ] = useState(null)
    const [ UIDREGIST, setREGIST ] = useState()
    const [ UIDUnit, setUnit ] = useState()
    const [ NameUnit, setNameUnit ] = useState()
    if(selectedOption){
        axios.get(DB.URL + DB.UIDRegister + selectedOption.value).then((res) => {
            setREGIST(res.data.MachineId)
            setUnit(res.data.unitId)
        })

        axios.get(DB.URL + DB.UIDUnit + UIDUnit).then((res) => {
            setNameUnit(res.data.nameUnit)
        })

        axios.get(DB.URL + DB.UIDMachine + UIDREGIST).then((res) => {
            setMachineReference(res.data.MachineReference)
            setversion_Machine_Num(res.data.version_Machine_Num)
            setversion_Machine_Print(res.data.version_Machine_Print)
        })
    }


    const [ SUnit_Num, setUnit_Num ] = useState()
    const [ SnameUnit, setsnameUnit ] = useState()
    const [ Sphone, setphone ] = useState()
    const [ SselectBranch, setselectBranch ] = useState()
    if(MoveSelect){
        axios.get(DB.URL + DB.UIDUnit + MoveSelect.value).then((res) => {
            setUnit_Num(res.data.Unit_Num)
            setsnameUnit(res.data.nameUnit)
            setphone(res.data.phone)
            setselectBranch(res.data.selectBranch)
        })
    }

    async function OnSubmit () {
        try {
            const dataS = {
                Number_Machine_Num: selectedOption.label,
                Number_Reference: MachineReferencex,
                version_Machine_sell: version_Machine_Num,
                Current_Machine_Unit: NameUnit,
                version_Machine_Print: version_Machine_Print,
                Machine_Move_new: MoveSelect.label,
                DateMove: Moment().format("YYYY-MM-DD"),
                userId: USerUID,
                registerId: selectedOption.value
            }

            const ReDataMove = {
                unitId: MoveSelect.value
            }

            const data = await axios.post(DB.URL + DB.PostCreateMoveMachine , dataS)
            if(data.status == 200){
                axios.put(DB.URL + DB.PutRegister + selectedOption.value , ReDataMove)
                swal("ຍ້າຍໜ່ວຍສຳເລັດ!", "You clicked the button!", "success").then((value) => {
                    window.location.reload(false)
                });
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
                                        <label>ໜ່ວຍປະຈຸບັນ</label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="bi bi-tablet-landscape"></i></span>
                                            <input type="text" aria-label="First name" value={NameUnit} class="form-control" readOnly/>
                                        </div>
                                    </div>

                                    <div className='form-group p-1 btn-time-center'>
                                        <label><strong>ຍ້າຍໄປໜ່ວຍ</strong></label><br/>
                                        <label><i class="bi bi-chevron-bar-down"></i></label>
                                    </div>

                                    <div className="form-group">
                                        <label><i class="bi bi-tablet-landscape-fill"></i> ເລືອກໜ່ວຍທີ່ຈະຍ້າຍ</label>
                                        <Select
                                            defaultValue={MoveSelect}
                                            onChange={setMoveSelect}
                                            options={
                                                showUnit.map((item)=>(
                                                    {value: item._id, label: item.nameUnit} 
                                                ))
                                            }
                                        />
                                    </div>
                                    
                                    <div className='form-group'>
                                        {MoveSelect && (
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">ເລກໜ່ວຍ</th>
                                                    <th scope="col">ໜ່ວຍ</th>
                                                    <th scope="col">ເບີໂທ</th>
                                                    <th scope="col">ສາຂາ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">{SUnit_Num}</th>
                                                    <th>{SnameUnit}</th>
                                                    <td>{Sphone}</td>
                                                    <td>{SselectBranch}</td>
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