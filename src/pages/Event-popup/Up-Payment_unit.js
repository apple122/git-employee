import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';
import Moment from "moment";
import Select from 'react-select';
import Swal from "sweetalert2";

export default function Pour_machine (props) {
    const propsUID = props.id

    const [ SelectOption, setSelectOption ] = useState(null)

    const [ UserUID, setUIDname ] = useState()
    const [ fullname, setName ] = useState()
    const token = localStorage.getItem("token")
    const [ GetPercentage, setGetPercentage ] = useState([])
    const [ GetPourMoney, setGetPourMoney ] = useState([])
    const [ GetUnit, setGetUnit ] = useState([])

    const ShowEventS =
        GetUnit.map((item) => (
            {value: item._id, label: item.Unit_Num}
        ))

    const [ Draw, setDraw ] = useState('')
    const [ PayMent_Money_ToDay, setPayMent_Money_ToDay ] = useState('')
    const Date = (Moment(PayMent_Money_ToDay).format("YYYY-MM-DD"))
    const [ Salable_value, setSalable_value ] = useState(null)
    const [ Arrears_Amount, setArrears_Amount ] = useState(null)
    const [ Pay_Cash, setPay_Cash ] = useState('')
    const [ Pay_Money_Tranfer, setPay_Money_Tranfer ] = useState('')
    const [ Pour_Actually_Amount, setPour_Actually_Amount ] = useState('')
    const [ Percentage_Sell, setPercentage_Sell ] = useState('')
    const [ nameVendor, setnameVendor ] = useState('')
    const [ Precent, setPrecent ] = useState('')
    const [ numberPercentage, setnumberPercentage ] = useState('')

    const [ cause_update, setArea ] = useState(null)
    const [ NumberUpdate, setNumberUpdate ] = useState(null)

    const [ unitId, setunitId] = useState(null)
    const [ unitIdName, setunitIdName] = useState('')
    const [ unitName, setnameUnit] = useState(null)
    useEffect(() => {
        if(propsUID){
            axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
                setUIDname(res.data._id)
                setName(res.data.fullname)
              })
            axios.get(DB.URL + DB.GetPercentage).then((res) => {
                setGetPercentage(res.data)
            })
            axios.get(DB.URL + DB.GetPourMoney).then((res) => {
                setGetPourMoney(res.data.reverse())
            })
            axios.get(DB.URL + DB.GetUnit).then((res) => {
                setGetUnit(res.data.reverse())
            })
            axios.get(DB.URL + DB.UIDhistoryGETPourUID + propsUID).then((res) => {
                setNumberUpdate(res.data)
            })
            
            axios.get(DB.URL + DB.UIDPourMoney + propsUID).then((res) => {
                setunitId(res.data.unitId._id)
                setnameUnit(res.data.unitId.nameUnit)
                setunitIdName(res.data.unitId.Unit_Num)
                setPayMent_Money_ToDay(res.data.PayMent_Money_ToDay)
                setDraw(res.data.Draw)
                setSalable_value(res.data.Salable_value)
                setArrears_Amount(res.data.Arrears_Amount)
                setPay_Cash(res.data.Pay_Cash)
                setPay_Money_Tranfer(res.data.Pay_Money_Tranfer)
                setPour_Actually_Amount(res.data.Pour_Actually_Amount)
                setPercentage_Sell(res.data.Percentage_Sell)
                setnameVendor(res.data.nameVendor)
                setnumberPercentage(res.data.numberPercentage)
            })
        }else{}
    }, [])

    
    const [ NameUint, setNameFUID ] = useState([])
    if(SelectOption){
        axios.get(DB.URL + DB.UIDUnit + SelectOption.value).then((res) => {
            setNameFUID(res.data.nameUnit)
        })
    }

    const SelectUnit_UID = [
        {value: unitId, label: unitIdName}
    ]
    const LoopQnumberDrw = [...new Set(GetPourMoney.map(item => item.Draw))]
    let Max = Math.max(...LoopQnumberDrw)


    const CountPrecen = Salable_value * (Precent /100)

    async function Sub(){
        try {
            console.log(NumberUpdate)
            if(NumberUpdate == ''){ // ກໍລະນີບໍ່ມີຂໍ້ມູນການອັບເດດ
                if(cause_update == null){ // ກໍລະນີບໍ່ປ່ອນຂໍ້ມູນສາເຫດການແກ້ໄຂ
                    alert('ກະລູນາປ່ອນສາເຫດທີ່ແກ້ໄຂກອນ')
                }else{
                    if(SelectOption == null){ // ກໍລະນີ ບໍ່ມີການປ່ຽນແປງຂໍ້ມູນ UnitID
                        const Data = {
                            unitId: unitId,
                            Draw: Draw,
                            PayMent_Money_ToDay: PayMent_Money_ToDay,
                            Salable_value: Salable_value,
                            Percentage_Sell: CountPrecen,
                            Arrears_Amount: Arrears_Amount,
                            Pour_Actually_Amount: Pour_Actually_Amount,
                            Pay_Cash: Pay_Cash,
                            Pay_Money_Tranfer: Pay_Money_Tranfer,
                            userId: UserUID,
                            numberpercentage: Precent
                            }
                            console.log(Data)
    
                        const historyUpdatePour = {
                            NumberUpdate:  1,
                            Date_Update: Moment().format("YYYY-MM-DD"),
                            nameEmp: fullname,
                            cause_update: cause_update,
                            pourId: propsUID
                          }
                          console.log(historyUpdatePour)
                          console.log("Select : Null")
    
                        const DataSC = await axios.put(DB.URL + DB.PutPourMoney + propsUID , Data)
                        if(DataSC.status == 200) {
                            axios.post(DB.URL + DB.PosthistoryUpdatePour , historyUpdatePour)
                            Swal.fire({
                                position: 'top-end',
                                width: '400px',
                                icon: 'success',
                                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    }else{
                        const Data = {
                            unitId: SelectOption.value,
                            Draw: Draw,
                            PayMent_Money_ToDay: PayMent_Money_ToDay,
                            Salable_value: Salable_value,
                            Percentage_Sell: CountPrecen,
                            Arrears_Amount: Arrears_Amount,
                            Pour_Actually_Amount: Pour_Actually_Amount,
                            Pay_Cash: Pay_Cash,
                            Pay_Money_Tranfer: Pay_Money_Tranfer,
                            userId: UserUID,
                            numberpercentage: Precent
                            }
                        //     console.log(Data)
                        // const historyUpdatePour = {
                        //     NumberUpdate: 1,
                        //     Date_Update: Moment().format("YYYY-MM-DD"),
                        //     nameEmp: fullname,
                        //     cause_update: cause_update,
                        //     pourId: propsUID
                        //     }
                        //     console.log(historyUpdatePour)
                        //     console.log("Select : Select")
    
                        const DataSC = await axios.put(DB.URL + DB.PutPourMoney + propsUID , Data)
                        if(DataSC.status == 200) {
                            // axios.post(DB.URL + DB.PosthistoryUpdatePour , historyUpdatePour)
                            // Swal.fire({
                            //     position: 'top-end',
                            //     width: '400px',
                            //     icon: 'success',
                            //     title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                            //     showConfirmButton: false,
                            //     timer: 1500
                            // })
                            console.log("Success" + DataSC)
                        }
                    }
                }
            }else if(NumberUpdate){ // ເມືອມີຂໍ້ມູນແລ້ວ ຈະ + ເພີມຂື້ນ
                console.log('ເມືອມີຂໍ້ມູນແລ້ວ ຈະ + ເພີມຂື້ນ')
                const LoopQNumberUpdate = [...new Set(NumberUpdate.map(item => item.NumberUpdate))]
                console.log('NumberText ' + NumberUpdate)
                if(cause_update == null){ // ກໍລະນີບໍ່ປ່ອນຂໍ້ມູນສາເຫດການແກ້ໄຂ
                    alert('ກະລູນາປ່ອນສາເຫດທີ່ແກ້ໄຂກອນ')
                }else{
                    if(SelectOption.value == null){ // ກໍລະນີ ບໍ່ມີການປ່ຽນແປງຂໍ້ມູນ UnitID
                        const Data = {
                            unitId: unitId,
                            Draw: Draw,
                            PayMent_Money_ToDay: PayMent_Money_ToDay,
                            Salable_value: Salable_value,
                            Percentage_Sell: CountPrecen,
                            Arrears_Amount: Arrears_Amount,
                            Pour_Actually_Amount: Pour_Actually_Amount,
                            Pay_Cash: Pay_Cash,
                            Pay_Money_Tranfer: Pay_Money_Tranfer,
                            userId: UserUID,
                            numberpercentage: Precent
                            }
    
                        const historyUpdatePour = {
                            NumberUpdate:  Math.max(...LoopQNumberUpdate) +1,
                            Date_Update: Moment().format("YYYY-MM-DD"),
                            nameEmp: fullname,
                            cause_update: cause_update,
                            pourId: propsUID
                          }
                          console.log(historyUpdatePour)
                          
    
                        const DataSC = await axios.put(DB.URL + DB.PutPourMoney + propsUID , Data)
                        if(DataSC.status == 200) {
                            axios.post(DB.URL + DB.PosthistoryUpdatePour , historyUpdatePour)
                            Swal.fire({
                                position: 'top-end',
                                width: '400px',
                                icon: 'success',
                                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    }else{
                        console.log('Numer' + Math.max(...LoopQNumberUpdate))
                        const Data = {
                            unitId: SelectOption.value,
                            Draw: Draw,
                            PayMent_Money_ToDay: PayMent_Money_ToDay,
                            Salable_value: Salable_value,
                            Percentage_Sell: CountPrecen,
                            Arrears_Amount: Arrears_Amount,
                            Pour_Actually_Amount: Pour_Actually_Amount,
                            Pay_Cash: Pay_Cash,
                            Pay_Money_Tranfer: Pay_Money_Tranfer,
                            userId: UserUID,
                            numberpercentage: Precent
                            }
                            console.log(Data)
                        const historyUpdatePour = {
                            NumberUpdate:  Math.max(...LoopQNumberUpdate) +1,
                            Date_Update: Moment().format("YYYY-MM-DD"),
                            nameEmp: fullname,
                            cause_update: cause_update,
                            pourId: propsUID
                            }
                            console.log(historyUpdatePour)
                        const DataSC = await axios.put(DB.URL + DB.PutPourMoney + propsUID , Data)
                        if(DataSC.status == 200) {
                            axios.post(DB.URL + DB.PosthistoryUpdatePour , historyUpdatePour)
                            Swal.fire({
                                position: 'top-end',
                                width: '400px',
                                icon: 'success',
                                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    }
                }
            }
        } catch (error) {
            alert(error)
        }
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [showS, setShowS] = useState(false)
    const handleCloseS = () => setShowS(false)
    const handleShowS = () => setShowS(true)

    return (
        <>
        <Button onClick={handleShow} className="btn btn-sm"><i class="bi bi-pencil-square"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <form>
            <div class="modal-xl position-modal">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ຈັດການຂໍ້ມູນ ການຖອກເງິນ</h5>
                    <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="row ">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ຫນ່ວຍ</label>
                                <Select
                                    defaultValue={SelectUnit_UID}
                                    onChange={setSelectOption}
                                    options={ShowEventS}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ງວດທີ ງວດລ່າສຸດ ( <strong className="text-success">{Max}</strong> )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-123"></i></span>
                                    <input type="number" min="0" className="form-control" value={Draw} onChange={(e) => setDraw(e.target.value)} placeholder="່ປອນງວດທັດໄປ"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ວັນທີ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="date" className="form-control" value={Date} onChange={(e) => setPayMent_Money_ToDay(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-md-8">
                            <div className="form-group">
                                <label>ມູນຄ່າຂາຍໄດ້</label>
                                <div className="input-group">
                                    <span className="input-group-text">₭</span>
                                    <NumberFormatBase type="text" min="0" className="form-control text-success" value={Salable_value} placeholder="ມູນຄ່າຂາຍໄດ້"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ເປີເຊັນຂາຍ( <strong className="text-success">{Precent}%</strong> )</label>
                                <div className="input-group">
                                    <NumberFormatBase type="text" min="0" className="form-control" value={CountPrecen} placeholder="ເປີເຊັນຂາຍ"/>
                                    <select className="input-group-text" onChange={(e) => setPrecent(e.target.value)}>
                                        <option value={numberPercentage}>{numberPercentage}</option>
                                        {
                                            GetPercentage.map((item) => (
                                                <option value={item.percentage}>{item.percentage}%</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ຍອດຖອກຕົວຈິງ</label>
                                        <div className="input-group">
                                            <span className="input-group-text text-success">₭</span>
                                            <NumberFormatBase type="text" min="0" className="form-control text-success" value={Pour_Actually_Amount} onChange={(e) => setPour_Actually_Amount(e.target.value)} placeholder="ຍອດຖອກຕົວຈິງ"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ຍອດຄ້າງ</label>
                                        <div className="input-group">
                                            <span className="input-group-text text-danger">₭</span>
                                            <NumberFormatBase type="text" min="0" className="form-control text-danger" value={Arrears_Amount} onChange={(e) => setArrears_Amount(e.target.value)} placeholder="ຍອດຄ້າງ"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>ເງິນສົດ</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="text" min="0" className="form-control text-success" value={Pay_Cash} onChange={(e)=> setPay_Cash(e.target.value)} placeholder="ເງິນສົດ"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>ໂອນ</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="text" min="0" className="form-control text-success" value={Pay_Money_Tranfer} onChange={(e) => setPay_Money_Tranfer(e.target.vale)} placeholder="ໂອນ"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>ຊື່ ແລະ ນາມສະກຸນ ( ຫົວໜ້າໜ່ວຍ )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                    {SelectOption === null && (
                                        <input type="text" className="form-control" value={unitName} readOnly/>
                                    )}
                                    {SelectOption && (
                                        <input type="text" className="form-control" value={NameUint} readOnly/>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>ຊື່ ແລະ ນາມສະກຸນ ( ພະນັກງານຜູ້ຮັບເງີນ )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                    <input type="text" className="form-control" value={fullname} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" onClick={handleClose} class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ກັບຄືນ</button>
                    <Button onClick={handleShowS} className="btn"><i class="bi bi-cloud-download-fill"></i> ບັນທຶກ</Button>
                </div>
                </div>

                <Modal show={showS} onHide={handleCloseS}>
                    <div class="modal-xl position-modal" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ສາເຫດທີ່ແກ້ໄຂ</h5>
                            <button type="button" class="btn-close" onClick={handleCloseS} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group">
                                <label>ສາເຫດທີ່ແກ້ໄຂ</label>
                                <div className="input-group">
                                    <span className="input-group-text"></span>
                                    <textarea className="form-control" onChange={(e) => setArea(e.target.value)} placeholder="..." required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>ຊື່ ນາມສະກຸນ ພະນັກງານຜູ້ແກ້ໄຂ</label>
                                <div className="input-group">
                                    <span className="input-group-text"></span>
                                    <input className="form-control" value={fullname} readOnly/>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick={handleCloseS} data-dismiss="modal">ຍ້ອນກັບ</button>
                            <button type="button" onClick={Sub} class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </Modal>
            </div>
            </form>
        </Modal>
            
        </>
    )
}