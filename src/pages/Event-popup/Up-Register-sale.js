import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Moment from "react-moment";
import Select from 'react-select';
import Swal from "sweetalert2";
import swal from 'sweetalert';
import DB from '../../services/enpiot'


export default function UP_register(props){
    const UIDUPDATE = props.id

    const [ useID, setUserid] = useState()
    const [ precenID, setPrecen] = useState()
    const [Vendor_code, setVendor_code] = useState()
    const [VendorType, setVendorType] = useState()
    const [name, setname] = useState()
    const [age, setage] = useState()
    const [Occupation, setOccupation] = useState()
    const [phone, setphone] = useState()
    const [Province, setProvince] = useState()
    const [District, setDistrict] = useState()
    const [Village, setVillage] = useState()
    const [MachineId, setMachineId] = useState()
    const [UPMachineId, setUPMachineId] = useState()
    const [unitId, setunitId] = useState()

    useEffect(() => {
        axios.get(DB.URL + DB.UIDRegister + UIDUPDATE ).then((res) => {
            setVendor_code(res.data.Vendor_code)
            setVendorType(res.data.VendorType)
            setname(res.data.name)
            setage(res.data.age)
            setOccupation(res.data.Occupation)
            setphone(res.data.phone)
            setProvince(res.data.Province)
            setDistrict(res.data.District)
            setVillage(res.data.Village)
            setMachineId(res.data.MachineId)
            setUPMachineId(res.data.MachineId)
            setunitId(res.data.unitId)
        })
    }, [])

    // Update-Register 

    const [ NamePrecen, setNameprecen ] = useState([])
    const [ NameMac, setNameMac ] = useState([])
    const [ NameUnit, setNameUnit ] = useState([])

    axios.get(DB.URL + DB.UIDPercentage + VendorType).then((res) => {
        setNameprecen(res.data.name)
    })

    axios.get(DB.URL + DB.UIDMachine + MachineId).then((res) => {
        setNameMac(res.data.NumMachine)
    })

    axios.get(DB.URL + DB.UIDUnit + unitId).then((res) => {
        setNameUnit(res.data.nameUnit)
    })

    // getByID 

    const [GETPercentage, setGETPercentage] = useState([])

    const [GETCreateMachine, setGETCreateMachine] = useState([])

    const [getunit, setgetunit] = useState([])
    useEffect(() => {

        axios.get('http://localhost:3001/unit/getunit').then((res) => {
            setgetunit(res.data)
        })

        axios.get('http://localhost:3001/machine/getMachine').then((res) => {
            setGETCreateMachine(res.data)
        })

        axios.get('http://localhost:3001/percentage/getPercentage').then((res) => {
            setGETPercentage(res.data)
        })

    }, [])


    const Update_register = (e) =>{

        e.preventDefault()
        const datas = {
            Vendor_code: Vendor_code,
            VendorType: VendorType,
            name: name,
            age:  age,
            Occupation: Occupation,
            phone: phone,
            Province: Province,
            District: District,
            Village: Village,
            percentageId: precenID,
            MachineId: MachineId,
            unitId: unitId,
        } 
        const data_uodate = {
            status: "ວ່າງ",
        }

        const data_mc = {
            status: "ໃຊ້ງານ",
        }

        Swal.fire({
            title: 'ທ່ານຕ້ອງການປ່ຽນແປງຂໍ້ມູນນີ້ ຫຼື ບໍ່?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // console.log(datas)
                axios.put(DB.URL + DB.PutRegister + UIDUPDATE, datas ).then((res) => {
                    swal("ປ່ຽນແປງຂໍ້ມູນສຳເລັດ!", "You clicked the button!", "success")
                    .then((value) => {
                        window.location.reload(false)
                    });
                })
                // console.log(data_uodate, data_mc)
                const Upda_success = axios.put(DB.URL + DB.PutMachine + UPMachineId, data_uodate)
                if(Upda_success){
                    axios.put(DB.URL + DB.PutMachine + MachineId, data_mc).then((res) => {
                        // console.log(res)
                    })
                }
            //   Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button onClick={handleShow}><i class="bi bi-pencil-square"></i></Button>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={Update_register} method="PUT">
                    <div class="modal-xl position-modal">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLabel"><strong>ຈັດການຂໍ້ມູນ ການລົງທະບຽນຄົນຂາຍ</strong></h4>
                                <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="row modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>ຊື່ ແລະ ນາມສະກຸນ</label>
                                            <div className="input-group">
                                                <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                                <input type="text" className="form-control" value={name} onChange={(e)=> setname(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ ແລະ ນາມສະກຸນ" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>ລະຫັດຜູ້ຂາຍ</label>
                                            <div className="input-group">
                                                <span className="input-group-text"><i class="bi bi-asterisk"></i></span>
                                                <input  type="number" className="form-control" value={Vendor_code} onChange={(e) => setVendor_code(e.target.value)} placeholder="ລະຫັດຜູ້ຂາຍ" required/>
                                                    
                                            
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>ອາຍຸ</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
                                                <input type="number" min="0" aria-label="First name" value={age} onChange={(e)=> setage(e.target.value)}  class="form-control" placeholder="ກະລຸນາປ່ອນ ອາຍຸ" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>ເລກທີ່ເຄື່ອງຂາຍເລກ</label>
                                            <select className="form-control" onChange={(e)=> setMachineId(e.target.value)}>
                                                <option value={MachineId} style={{"font-size": "16px", "color":"blue"}}>{NameMac}</option>
                                                {GETCreateMachine.filter((e) => e.status === "ວ່າງ").map((item)=>(
                                                    <option value={item._id}>{item.NumMachine}</option>
                                                ))}

                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>ໜ່ວຍ</label>
                                            <select className="form-control" onChange={(e) => setunitId(e.target.value)}>
                                                <option value={unitId}>{NameUnit}</option>
                                                {getunit.map((item)=>(
                                                    <option value={item._id}>{item.nameUnit}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>ປະເພດຜູ້ຂາຍ</label>
                                            <div className="input-group">
                                                <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                                <select className="form-control"  onChange={(e)=> setVendorType(e.target.value)} onClick={(e) => setPrecen(e.target.value)} required>
                                                    <option value={VendorType}>{NamePrecen}</option>
                                                    {GETPercentage.map((performance) => {
                                                        return (
                                                            <option value={performance._id}>{performance.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">

                                        <div className="form-group">
                                            <label>ອາຊິບ</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="bi bi-percent"></i></span>
                                                <input type="text" aria-label="First name" value={Occupation} onChange={(e)=> setOccupation(e.target.value)} class="form-control" placeholder="ກະລຸນາປ່ອນ ອາຊິບ" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>ເບີໂທ</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="bi bi-telephone-plus-fill"></i></span>
                                                <input type="number" min="0" aria-label="First name" class="form-control" value={phone} onChange={(e)=> setphone(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເບີໂທ" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>ບ້ານ</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="bi bi-house"></i></span>
                                                <input type="text" aria-label="First name" class="form-control" value={Village} onChange={(e)=> setVillage(e.target.value)} placeholder="ກະລຸນາປ່ອນ ບ້ານ" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>ເມືອງ</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="bi bi-house"></i></span>
                                                <input type="text" aria-label="First name" class="form-control" value={District} onChange={(e)=> setDistrict(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເມືອງ" required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>ແຂວງ</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="bi bi-house"></i></span>
                                                <input type="text" aria-label="First name" class="form-control" value={Province} onChange={(e)=> setProvince(e.target.value)} placeholder="ກະລຸນາປ່ອນ ແຂວງ" required/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" onClick={handleClose} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                                <button type="submit" className="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ </button>
                            </div>
                        </div>
                        
                    </div>
                  
                </form>
            </Modal>
        </>
    )
}