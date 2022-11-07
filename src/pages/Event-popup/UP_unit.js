import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import DB from '../../services/enpiot'

export default function UP_unit (props) {
    const propsUID = props.id

    const [ Branc, setBranch ] = useState([])
    const [Unit_Num, setUnitId] = useState('')
    const [phone, setphone] = useState('')
    const [nameUnit, setnameUnit] = useState('')
    const [selectBranch, setselectBranch] = useState('')
    const [selectBranchUID, setselectBranchUID] = useState('')
    useEffect(() => {
        axios.get(DB.URL + DB.UIDUnit + propsUID).then((res) => {
            setUnitId(res.data.Unit_Num)
            setphone(res.data.phone)
            setnameUnit(res.data.nameUnit)
            setselectBranch(res.data.selectBranch.branch)
            setselectBranchUID(res.data.selectBranch._id)
        })

        axios.get(DB.URL + DB.GetBranch).then((res) => {
            setBranch(res.data.reverse())
        })
    },[])

    async function OnSubmit (){
        try {
            const formData = {
                Unit_Num: Unit_Num,
                phone: phone,
                nameUnit: nameUnit,
                selectBranch: selectBranch,
            }
            console.log(formData)
            const DataS = await axios.put(DB.URL + DB.PutUnit + propsUID, formData)
            if(DataS.status == 200){
                Swal.fire({
                    position: 'top-end',
                    width: '400px',
                    icon: 'success',
                    title: 'ອັບເດດຂໍ້ມູນສຳເລັດ',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(DataS)
            }
        } catch (error) {
            alert(error)
        }
    }
    const Updatemanage = (e) => {
        e.preventDefault()
        
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
                    <div className="col-md-6">

                        <div className="form-group">
                            <label>ເລກໜ່ວຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-person-video2"></i></span>
                                <input type="text" className="form-control" name="Unit_Num" value={Unit_Num} onChange={(e) => setUnitId(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ແລະນາມສະກຸນ" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>ເບີໂທ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-person-badge"></i></span>
                                <input type="number" min="0" className="form-control" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເບີໂທ" required/>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-md-6">
                        
                        <div className="form-group">
                            <label>ຊື່ແລະນາມສະກຸນ ຫົວໜ້າໜວຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                <input type="text" className="form-control" name="nameUnit" value={nameUnit} onChange={(e) => setnameUnit(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ແລະນາມສະກຸນ ຫົວໜ້າໜວຍ" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>ສາຂາ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-shop-window"></i></span>
                                <select className="form-control" name="selectBranch" onChange={(e) => setselectBranch(e.target.value)} required>
                                    <option value={selectBranchUID}>{selectBranch}</option>
                                    {Branc.map((item) => (
                                        <option value={item._id}>{item.branch}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    
                </div> 
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" onClick={handleClose}><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                    <button type="submit" onClick={OnSubmit} class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                </div>
                </div>
            </div>
            </form>
        </Modal>
        </>
    )
}