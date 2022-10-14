import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Moment from 'moment';

export default function IN_Sales () {
    
    const [GETPercentage, setGETPercentage] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/percentage/getPercentage').then((res) => {
            setGETPercentage(res.data)
        })
    }, [])

    const [GETCreateMachine, setGETCreateMachine] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/machine/getMachine').then((res) => {
            setGETCreateMachine(res.data)
        })
    }, [])

    const [getunit, setgetunit] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/unit/getunit').then((res) => {
            setgetunit(res.data)
        })
    }, [])

    const [ useID, setUserid] = useState(null)
    const [ precenID, setPrecen] = useState(false)
    const [Vendor_code, setVendor_code] = useState(null)
    const [VendorType, setVendorType] = useState(null)
    const [name, setname] = useState(null)
    const [age, setage] = useState(null)
    const [Occupation, setOccupation] = useState(null)
    const [phone, setphone] = useState(null)
    const [Province, setProvince] = useState(null)
    const [District, setDistrict] = useState(null)
    const [Village, setVillage] = useState(null)
    const [MachineId, setMachineId] = useState(null)
    const [unitId, setunitId] = useState(null)

    const [ createregister, setregister ] = useState({}) 
    const handleChange = (e) => {
        const { name, value } = e.target
        setregister({...createregister, [name]: value})
        console.log(createregister)
    }

    async function getregister () {
        try {
            const data = await axios.get('http://localhost:3001/register/getregister')
            console.log(data.data)
        } catch (error) {
            
        }
    }

    const [getusenameID , setGetusernameUID] = useState([])
    async function getUsername () {
        try {
            const data = await axios.get('http://localhost:3001/WithDraw/WithDrawById/63367403d94af431c2715b91')
            setGetusernameUID(data.data._id)
            console.log(data.data._id)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getUsername()
    },[])

    async function onSubmit () {

        try {
            const token = localStorage.getItem("token")

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
                unitId: unitId
            } 
            console.log({VendorType, Vendor_code, name, age, Occupation, phone, Province, District, Village, precenID, MachineId, unitId})
            const data = await axios.post('http://localhost:3001/register/vendorRegister', datas ,{ headers : {authorization : token}} )
            if(data.status == 200){
                console.log("INsert OK")
                getregister()
            }

            const data_uodate = {
                status: "ໃຊ້ງານ",
                DateMachine : Moment().format('YYYY-MM-DD'),
            }
            axios.put(`http://localhost:3001/machine/updateMachine/${MachineId}`, data_uodate)
            console.log(data_uodate)

        } catch (error) {
            console.log(error)
        }
    }

    const Submit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <div class="modal fade" id="IN_Sales" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <form onSubmit={Submit}>
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ເພີມຂໍ້ມູນ ລົງທະບຽນຄົນຂາຍເລກ</strong></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>ຊື່ ແລະ ນາມສະກຸນ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" className="form-control" onChange={(e)=> setname(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ ແລະ ນາມສະກຸນ" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ລະຫັດຜູ້ຂາຍ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-asterisk"></i></span>
                                        <input  type="number" className="form-control" onChange={(e) => setVendor_code(e.target.value)} placeholder="ລະຫັດຜູ້ຂາຍ" />
                                         
                                  
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ອາຍຸ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
                                        <input type="number" min="0" aria-label="First name" onChange={(e)=> setage(e.target.value)}  class="form-control" placeholder="ກະລຸນາປ່ອນ ອາຍຸ" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ເລກທີ່ເຄື່ອງຂາຍເລກ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                        <select className="form-control"  onChange={(e)=> setMachineId(e.target.value)} required>
                                            <option>ເລກທີ່ເຄື່ອງຂາຍເລກ</option>
                                            {GETCreateMachine.map((machine, index) => {
                                                return(
                                                    <option key={!index == "ໃຊ້ງານ"} value={machine._id}>{machine.NumMachine}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ໜ່ວຍ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                        <select className="form-control"  onChange={(e)=> setunitId(e.target.value)} required>
                                            <option>ໜ່ວຍ</option>
                                            {getunit.map((unit) => {
                                                return (
                                                    <option value={unit._id}>{unit.nameUnit}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ປະເພດຜູ້ຂາຍ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <select className="form-control"  onChange={(e)=> setVendorType(e.target.value)} onClick={(e) => setPrecen(e.target.value)} required>
                                            <option>ປະເພດຜູ້ຂາຍ</option>
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
                                        <input type="text" aria-label="First name" onChange={(e)=> setOccupation(e.target.value)} class="form-control" placeholder="ກະລຸນາປ່ອນ ອາຊິບ" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ເບີໂທ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-telephone-plus-fill"></i></span>
                                        <input type="number" min="0" aria-label="First name" class="form-control" onChange={(e)=> setphone(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເບີໂທ" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ບ້ານ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-house"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"  onChange={(e)=> setVillage(e.target.value)} placeholder="ກະລຸນາປ່ອນ ບ້ານ" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ເມືອງ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-telephone-plus-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"  onChange={(e)=> setDistrict(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເມືອງ" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ແຂວງ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-telephone-plus-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control" onChange={(e)=> setProvince(e.target.value)} placeholder="ກະລຸນາປ່ອນ ແຂວງ" required/>
                                    </div>
                                </div>
                                {/* <input type="text"  onChange={(e)=> setPrecen(e.target.value)} placeholder="precenID"/> */}
                                {/* <input type="hidden" value={getusenameID} onChange={(e)=> setUserid(e.target.value)} placeholder="UserID"/> */}

                            </div>
                            
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                    <button onClick={onSubmit} className="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ </button>
                </div>
                </form>

                </div>
            </div>
        </div>
        </>
    )
}