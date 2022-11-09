import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';
import { Button, Modal } from 'react-bootstrap';
import Moment from "moment";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'

export default function Pour_unit () {

    const [ UserUID, setUIDname ] = useState()
    const token = localStorage.getItem("token")
    let navigate = useNavigate()
    useEffect(() => {
      axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
        setUIDname(res.data._id)
      })
    }, [])

    const [ SelectOption, setOption ] = useState([])

    const [ GetMachine, setGetMachine ] = useState([])
    const [ GetRegister, setGetRegister ] = useState([])
    const [ GetPourMoney, setGetPourMoney ] = useState([])
    const [ GetPercentage, setGetPercentage ] = useState([])
    const [ Draw, setDraw ] = useState(null)

    useEffect(() => {
        axios.get(DB.URL + DB.GetMachine).then((res) => {
            setGetMachine(res.data.reverse())
        })

        axios.get(DB.URL + DB.GetRegister).then((res) => {
            setGetRegister(res.data.reverse())
        })

        axios.get(DB.URL + DB.GetPourMoney).then((res) => {
            setGetPourMoney(res.data.reverse())
        })

        axios.get(DB.URL + DB.GetPercentage).then((res) => {
            setGetPercentage(res.data.reverse())
        })
    }, [])

    const [ getRegisterByIdMachineId, setgetRegisterByIdMachineId ] = useState([])
    if(SelectOption){
        axios.get(DB.URL + DB.getRegisterByIdMachineId + SelectOption.value).then((res) => {
            setgetRegisterByIdMachineId(res.data[0].name)
        })
    }

    const LoopQnumber = [...new Set(GetRegister.filter((e) => e.MachineId == null ? "" : e.MachineId._id == SelectOption.value && e.upremove == null).map(item => item.unitId == null ? "" : item.unitId._id))]
    const LoopQUIDRegister = [...new Set(GetRegister.filter((e) => e.MachineId == null ? "" : e.MachineId._id == SelectOption.value && e.upremove == null).map(item => item._id))]
    // console.log("SHowItem: " + LoopQUIDRegister)

    const LoopQPour = [...new Set(GetPourMoney.filter((e) => e.unitId == null ? "" : e.unitId._id == LoopQnumber && e.Draw == Draw).map(item => item.unitId == null ? "" : item.Salable_value))]
    // console.log("SHowPour: " + LoopQPour)

    // console.log("Seelc: " + getRegisterByIdMachineId)
    const LoopQnumberDrw = [...new Set(GetPourMoney.map(item => item.Draw))]
    const Max = Math.max(...LoopQnumberDrw)

    const [ Salable_value, setSalable_value ] = useState(null)
    const [ Precent, setPrecenet ] = useState(null)
    const [ Date_PourMoney, setDate_PourMoney ] = useState(Moment().format("YYYY-MM-DD"))
    const [ Arrears_paid, setArrears_paid ] = useState(null)
    const [ Pour_Actually_Amount, setPour_Actually_Amount ] = useState(null)
    const [ Pay_Cash, setPay_Cash ] = useState(null)
    const [ Pay_Money_Tranfer, setPay_Money_Tranfer ] = useState(null)

    const CountPrecent = Salable_value * ( Precent / 100 )

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    async function OnSubmit () {
        try {
            const Data = {
                NumMachine: SelectOption.label,
                Draw: Draw,
                Date_PourMoney: Date_PourMoney,
                nameVendor: getRegisterByIdMachineId,
                Salable_value: Salable_value,
                Arrears_paid: Arrears_paid,
                Percentage_Sell: CountPrecent,
                Pour_Actually_Amount: Pour_Actually_Amount,
                Pay_Cash: Pay_Cash,
                Pay_Money_Tranfer: Pay_Money_Tranfer,
                userId: UserUID,
                regisId: LoopQUIDRegister,
                numberPercentage: Precent
              }
            const DataS = await axios.post(DB.URL + DB.PostPourMoneyMachine , Data)
            if(DataS.status == 200){
                Swal.fire({
                    position: 'top-end',
                    width: '400px',
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                    showConfirmButton: false,
                    timer: 1500
                }).then((res) => {
                    setShow(false)
                    return navigate('/Payment_machine')
                })
            }
        } catch (error) {
            
        }
    }

    const Submit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <Button onClick={handleShow}><i class="bi bi-download"></i>  ຖອກເງິນເຄື່ອງ</Button>
        <Modal show={show} onHide={handleClose}>
            <form onSubmit={Submit} method="POST">
            <div class="modal-xl position-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">ຖອກເງິນເຄື່ອງ</h5>
                        <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row modal-body">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ເລກທີ່ເຄື່ອງຂາຍ</label>
                                <Select 
                                    onChange={setOption}
                                    options={
                                        GetMachine.filter((e) => e.status == false).map((item) => (
                                            {value: item._id, label: item.NumMachine}
                                        ))
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ງວດລ່າສຸດ ( <span className="text-success">{Max}</span> )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-123"></i></span>
                                    <NumberFormatBase type="number" onChange={(e) => setDraw(e.target.value)} className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ຍອດຖອກເງີນໜ່ວຍ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-cash-stack"></i></span>
                                    <input className="form-control" value={Draw == null || Draw == "" ? "--ກະລຸນາເລືອກງວດ--" : LoopQPour == "" ? " --ບໍ່ມີຍອດຖອກເງີນໜ່ວຍ--" : parseInt(LoopQPour).toLocaleString() + " ₭"} readOnly/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group">
                                <label>ຊື່ ນາມສະກຸນ ( ຄົນຂາຍ )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-person-video2"></i></span>
                                    <input type={'text'} className="form-control" value={getRegisterByIdMachineId} placeholder="--ກະລຸນາເລືອກເລກທີ່ເຄື່ອງຂາຍ--" readOnly/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ວັນທີການຖອກເງີນເຄື່ອງ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-calendar-check"></i></span>
                                    <input type={'date'} className="form-control" value={Moment().format("YYYY-MM-DD")} onChange={(e) => setDate_PourMoney(e.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group text-success">
                                <label>ມູນຄ່າຂາຍໄດ້</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="number" className="form-control text-success" onChange={(e) => setSalable_value(e.target.value)} placeholder="ມູນຄ່າຂາຍໄດ້" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ເປີເຊັນຂາຍ</label>
                                <div className="input-group">
                                    <NumberFormatBase className="form-control" value={Precent == null ? "0" : CountPrecent}/>
                                    <select className="btn btn-outline-secondary" onChange={(e) => setPrecenet(e.target.value)} required>
                                        <option>0%</option>
                                        {GetPercentage.map((item) => (
                                            <option value={item.percentage}>{item.percentage}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-danger">
                                <label>ຄ້າງຈ່າຍ</label>
                                <div className="input-group">
                                    <span className="input-group-text text-danger">₭</span>
                                    <NumberFormatBase type="number" className="form-control text-danger" onChange={(e) => setArrears_paid(e.target.value)} placeholder="ຄ້າງຈ່າຍ" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-success">
                                <label>ຍອດຖອກຕົວຈິງ</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="number" className="form-control text-success" onChange={(e) => setPour_Actually_Amount(e.target.value)} placeholder="ຍອດຖອກຕົວຈິງ" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-success">
                                <label>ເງີນໂອນ</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="number" className="form-control text-success" onChange={(e) => setPay_Money_Tranfer(e.target.value)} placeholder="ເງີນໂອນ" required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-success">
                                <label>ເງີນສົດ</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="number" className="form-control text-success" onChange={(e) => setPay_Cash(e.target.value)} placeholder="ເງີນສົດ" required/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="modal-footer">
                        <button type="button" onClick={handleClose} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                        <button type="button" onClick={OnSubmit} class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                    </div>
                </div>
            </div>
            </form>
        </Modal>
        </>
    )
}