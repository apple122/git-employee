import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';
import Moment from "moment";
import Select from 'react-select';


export default function Pour_machine (props) {
    const propsUID = props.id

    const [ UserUID, setUIDname ] = useState()
    const [ fullname, setName ] = useState()
    const token = localStorage.getItem("token")
    useEffect(() => {
      axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
        setUIDname(res.data._id)
        setName(res.data.fullname)
      })

    }, [])

    const Selec = [
        {value: "Name", label: "name"}
    ]

    const [ Draw, setDraw ] = useState(null)
    const [ PayMent_Money_ToDay, setPayMent_Money_ToDay ] = useState('')
    const Date = (Moment(PayMent_Money_ToDay).format("YYYY-MM-DD"))
    const [ Salable_value, setSalable_value ] = useState(null)
    const [ Arrears_Amount, setArrears_Amount ] = useState(null)
    const [ Pay_Cash, setPay_Cash ] = useState(null)
    const [ Pay_Money_Tranfer, setPay_Money_Tranfer ] = useState(null)
    const [ Pour_Actually_Amount, setPour_Actually_Amount ] = useState(null)
    const [ Percentage_Sell, setPercentage_Sell ] = useState(null)

    const [ unitId, setunitId] = useState(null)
    axios.get(DB.URL + DB.UIDPourMoney + propsUID).then((res) => {
        console.log(res.data.unitId)
        setPayMent_Money_ToDay(res.data.PayMent_Money_ToDay)
        setDraw(res.data.Draw)
        setSalable_value(res.data.Salable_value)
        setArrears_Amount(res.data.Arrears_Amount)
        setPay_Cash(res.data.Pay_Cash)
        setPay_Money_Tranfer(res.data.Pay_Money_Tranfer)
        setPour_Actually_Amount(res.data.Pour_Actually_Amount)
        setPercentage_Sell(res.data.Percentage_Sell)
    })


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
                                    defaultValue={Selec}
                                    onChange={Selec}
                                    options={
                                        Selec
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ຜູ້ຂາຍ</label>
                                <Select
                                    defaultValue={Selec}
                                    onChange={Selec}
                                    options={
                                        Selec
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ງວດທີ ງວດລ່າສຸດ ( <strong className="text-success">1</strong> )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-123"></i></span>
                                    <input type="number" min="0" className="form-control" value={Draw} placeholder="່ປອນງວດທັດໄປ"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="form-group">
                                <label>ຊື່ ແລະ ນາມສະກຸນ ( ຫົວໜ້າໜ່ວຍ )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                    <input type="text" className="form-control" placeholder="ຊື່ ແລະ ນາມສະກຸນ ຫົວໜ້າໜ່ວຍ"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ວັນທີ</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="date" className="form-control" value={Date}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group">
                                <label>ມູນຄ່າຂາຍໄດ້</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="text" min="0" className="form-control text-success" value={Salable_value} placeholder="ມູນຄ່າຂາຍໄດ້"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ເປີເຊັນຂາຍ( <strong className="text-success">%</strong> )</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i class="bi bi-percent"></i></span>
                                    <NumberFormatBase type="text" min="0" className="form-control" value={Percentage_Sell} placeholder="ເປີເຊັນຂາຍ"/>
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
                                            <NumberFormatBase type="text" min="0" className="form-control text-success" value={Pour_Actually_Amount} placeholder="ຍອດຖອກຕົວຈິງ"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ຍອດຄ້າງ</label>
                                        <div className="input-group">
                                            <span className="input-group-text text-danger">₭</span>
                                            <NumberFormatBase type="text" min="0" className="form-control text-danger" value={Arrears_Amount} placeholder="ຍອດຄ້າງ"/>
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
                                    <NumberFormatBase type="text" min="0" className="form-control text-success" value={Pay_Cash} placeholder="ເງິນສົດ"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>ໂອນ</label>
                                <div className="input-group">
                                    <span className="input-group-text text-success">₭</span>
                                    <NumberFormatBase type="text" min="0" className="form-control text-success" value={Pay_Money_Tranfer} placeholder="ໂອນ"/>
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
                    <button type="button" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທຶກ</button>
                </div>
                </div>
            </div>
            </form>
        </Modal>
            
        </>
    )
}