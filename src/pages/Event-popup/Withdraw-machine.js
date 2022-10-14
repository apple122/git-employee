import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";
import Moment from 'moment';
import DB from "../../services/enpiot"

const WD_machine = () => {

    const [ showEvent, setShowevent ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/machine/getMachine').then((res) => {
            setShowevent(res.data)
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
    const onCheck = (Checkitem) => {
        setvalue(Checkitem)
        console.log('Search', Checkitem)
        axios.get(`http://localhost:3001/Machine/getByNumMachine/${Checkitem}`).then((res) => {
            setgetversion_Machine_Num(res.data.version_Machine_Num)
            setMachineReference(res.data.MachineReference)
            setversion_Machine_Print(res.data.version_Machine_Print)
            setstatus(res.data.status)
            SetDateMachine(res.data.DateMachine)
            setuidmachine(res.data._id)
        })   
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

    const currentDate = new Date(DateMachine, "YYYY/mm/dd")
    const formatDate = Moment().format('DD-MM-YYYY')

    // console.log(formatDate)

    const [createWithdraw, setWithdraw] = useState([])
    const [updatemachine, setupdatemachine] = useState([])

    const handleChange = (e) => {
        const { name, value} = e.target;
        setWithdraw({...createWithdraw, [name]: value})
        console.log(createWithdraw)
    }

    const token = localStorage.getItem("token")
    const data_uodate = {
        status: "ວ່າງ",
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        setWithdraw(
            axios.post(DB.URL+DB.PostWithDraw , createWithdraw ).then((res) => {
                alert("Success")
            }),
            axios.put( DB.URL+DB.PutMachine +uidmachine , data_uodate).then((res) => {
                console.log(res)
                alert("Machince")
            })

        ).catch(() => {alert("erorr")})
    }


    return (
        <>
        <div class="modal fade" id="remove-machince" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={onSubmit} method="POST">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ຖອນເຄື່ອງ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group group-renative">
                                <label>ເລກທີ່ເຄື່ອງຂາຍເລກ ທີ່ຈະຖອນ</label>
                                <div className="input-group">
                                    <input className="form-control insert-showinput" value={value} onChange={onChange} placeholder="ປ້ອນເລກເຄື່ອງຂາຍ ທີ່ຈະຖອນ"/>
                                    <span className="btn btn-warning input-group-text" onClick={() => onCheck(value)}>ກວດສອບ</span>
                                </div>
                                <div className="dropdown drop-group-position">
                                    {showEvent.filter(item => {
                                        const Checkitem = value.toLowerCase()
                                        const NumMachine = item.NumMachine.toLowerCase()

                                        return Checkitem && NumMachine.startsWith(Checkitem) && NumMachine !== Checkitem
                                    })
                                    .map((item) => (
                                        <li onClick={() => onCheck(item.NumMachine)} className="dropdown-row drop-checked">{item.NumMachine}</li>
                                    ))}
                                </div>
                            </div>
                            <input type="hidden" onChange={handleChange} value={createWithdraw.NumMachine = value} name="NumMachine"/>

                            <div className="form-group">
                                <label>ລະຫັດຜູ້ຂາຍ</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                    <input type="text" onChange={handleChange} value={createWithdraw.Vendor_code} name="Vendor_code" className="form-control" placeholder="ກະລຸນາປ່ອນ ລະຫັດຜູ້ຂາຍ"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>ສາເຫດການຖອນ</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-journal-check"></i></span>
                                    <textarea type="text" onChange={handleChange} value={createWithdraw.withdrawal_event} name="withdrawal_event"  aria-label="First name" class="form-control" placeholder="ສາເຫດການຖອນ" style={{border: "1px solide green"}}/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>ສະຖານະ</label>
                                    <div class="input-group">
                                        <span class="input-group-text border-green"><i class="bi bi-toggle-off"></i></span>
                                        <input type="text"  onChange={handleChange} value={createWithdraw.status_Machine = "ວ່າງ"} name="status_Machine" aria-label="First name" class="form-control border-green"  readOnly/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6">

                            <div className="form-group">
                                <label>ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</label>
                                <div className="input-group">
                                    <span className="input-group-text border-overflow"><i class="bi bi-hash"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.version_Machine_sell_Num = version_Machine_Num}  onChange={handleChange}  name="version_Machine_sell_Num" readOnly class="form-control border-overflow"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>ລຸ້ນຂອງເຄື່ອງພິມ</label>
                                <div className="input-group">
                                    <span className="input-group-text border-overflow"><i class="bi bi-printer-fill"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.version_Machine_Print = version_Machine_Print} onChange={handleChange}  name="version_Machine_Print" readOnly class="form-control border-overflow"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>ເລກທີອ້າງອີງ</label>
                                    <div class="input-group">
                                        <span class="input-group-text border-overflow"><i class="bi bi-hash"></i></span>
                                        <input type="text" aria-label="First name" value={createWithdraw.Machine_Reference_Num = MachineReference} onChange={handleChange}  name="Machine_Reference_Num" readOnly class="form-control border-overflow"/>
                                    </div>
                                </div>
                            
                            </div>
                            
                            <div className="form-group">
                                <label>ວັນທີການລົງທະບຽນ</label>
                                <div class="input-group">
                                    <span class="input-group-text border-overflow"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.DateRegister = DateMachine} onChange={handleChange}  name="DateRegister" class="form-control border-overflow" readOnly/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>ວັນທີເປີດໃຊ້ງານ</label>
                                <div class="input-group">
                                    <span class="input-group-text border-overflow"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="text" aria-label="First name" value={createWithdraw.DateRegister = DateMachine} onChange={handleChange}  name="DateRegister" class="form-control border-overflow" readOnly/>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ຍ້ອນກັບ</button>
                    <button type="submit" class="btn btn-primary" ><i class="bi bi-cloud-download-fill"></i> ຖອນ </button>
                </div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default WD_machine