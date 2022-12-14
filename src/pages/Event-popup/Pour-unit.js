import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';
import Moment from "moment";
import Swal from "sweetalert2";

export default function Pour_unit () {

    const [ UserUID, setUIDname ] = useState()
    const [ fullname, setName ] = useState()
    const token = localStorage.getItem("token")
    useEffect(() => {
      axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
        setUIDname(res.data._id)
        setName(res.data.fullname)
      })
    }, [])

    const [ SelectOption, setOption ] = useState([])
    const [ GetPourMoney, setGetPourMoney ] = useState([])
    const [ ShowEcentUnit, setShowUnit ] = useState([])
    const [ ShowRegister, setREGIS ] = useState([])
    const [ GetPercentage, setGetPercentage ] = useState([])
    const [ NameUint, setNameFUID ] = useState([])
    console.log(NameUint)
    useEffect(() => {
        axios.get(DB.URL + DB.GetUnit).then((res) => {
            setShowUnit(res.data.reverse())
        })
        axios.get(DB.URL + DB.GetPourMoney).then((res) => {
            setGetPourMoney(res.data.reverse())
          })
        if(SelectOption){
            axios.get(DB.URL + DB.GetRegister).then((res) => {
                setREGIS(res.data.reverse())
            }).catch((error) => {
                console.log("ກະລຸນາເລືອກຂໍ້ມູນກອນ")
            })
            axios.get(DB.URL + DB.GetPercentage).then((res) => {
                setGetPercentage(res.data)
            })
        }
    },[])

    if(SelectOption){
        axios.get(DB.URL + DB.UIDUnit + SelectOption.value).then((res) => {
            setNameFUID(res.data.nameUnit)
        })
    }

    const LoopQnumber = [...new Set(ShowRegister.filter((e) => e.upremove == "ເປິດໃຊ້ງານ").map(item => item.unitId == null ? "" : item.unitId.Unit_Num))]
    const LoopDraw = LoopQnumber.map((item) => (
        {value: item, label: 'ໜ່ວຍ: '+ item}
    ))
    const LoopQnumberDrw = [...new Set(GetPourMoney.map(item => item.Draw))]
    const Max = Math.max(...LoopQnumberDrw)

    // useState Insert 
    const [ nameVendor, setnameVendor ] = useState('')
    const [ Draw, setDraw ] = useState('')
    const [ PayMent_Money_ToDay, setPayMent_Money_ToDay ] = useState(Moment().format("YYYY-MM-DD"))
    const [ Salable_value, setSalable_value ] = useState('')
    const [ Arrears_Amount, setArrears_Amount ] = useState('')
    const [ Pay_Cash, setPay_Cash ] = useState('')
    const [ Pay_Money_Tranfer, setPay_Money_Tranfer ] = useState('')
    const [ Precent, setPrecent ] = useState('')

    const Precen = Salable_value * (Precent / 100);
    const Pour_Actually_Amount = (Salable_value - Arrears_Amount - Precen)

    const han = (Pour_Actually_Amount / 2)
    const PayMoney = (Pour_Actually_Amount - Pay_Money_Tranfer)
    const PayCass = (Pour_Actually_Amount - Pay_Money_Tranfer )

    async function OnClickSubmit (){
        try {
            const Data = {
                unitId: SelectOption.value,
                Draw: Draw,
                PayMent_Money_ToDay: PayMent_Money_ToDay,
                Salable_value: Salable_value,
                Percentage_Sell: Precen,
                Arrears_Amount: Arrears_Amount,
                Pour_Actually_Amount: Pour_Actually_Amount,
                Pay_Cash: PayCass,
                Pay_Money_Tranfer: Pay_Money_Tranfer,
                userId: UserUID,
                nameVendor: nameVendor,
                numberpercentage: Precent
                }
            console.log(Data)
            const Datas = await axios.post(DB.URL + DB.PostcreatePourMoney, Data)
            if(Datas.status == 200){
                Swal.fire({
                    position: 'top-end',
                    width: '400px',
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
           
        } catch (error) {
            alert(error)
        }
    }

    const format = (numStr) => {
        if (numStr === '') return '';
        return new Intl.NumberFormat('en-US', {
          maximumFractionDigits: 0,
        }).format(numStr);
    };
    const Submit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <div class="modal fade" id="Pour_unit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">ຖອກເງິນຫນ່ວຍ</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <form onSubmit={Submit}>
                    <div class="modal-body">
                        <div className="row ">

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ເລກທີ່ຫນ່ວຍ</label>
                                    <Select
                                        defaultValue={SelectOption}
                                        onChange={setOption}
                                        options={
                                            ShowEcentUnit.map((item) => (
                                                {value: item._id, label: 'ເລກທີ່ໜ່ວຍ: ' + item.Unit_Num}
                                            ))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ງວດທີ ງວດລ່າສຸດ ( <strong className="text-success">{Max == -Infinity ? 0 : Max}</strong> )</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-123"></i></span>
                                        <input type="number" min="0" className="form-control" onChange={(e) => setDraw(e.target.value)} placeholder="່ປອນງວດທັດໄປ" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ວັນທີ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                        <input type="date" className="form-control" value={Moment().format("YYYY-MM-DD")} onChange={(e) => setPayMent_Money_ToDay(e.target.value)} required/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>ມູນຄ່າຂາຍໄດ້</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-success">₭</span>
                                        <NumberFormatBase type="text" min="0" className="form-control text-success" onChange={(e) => setSalable_value(e.target.value)} placeholder="ມູນຄ່າຂາຍໄດ້" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ເປີເຊັນຂາຍ</label>
                                    <div className="input-group">
                                        {/* <span className="input-group-text"><i class="bi bi-percent"></i></span> */}
                                        <NumberFormatBase type="text" min="0" className="form-control" value={Precen} placeholder="ເປີເຊັນຂາຍ" required/>
                                        <select className="input-group-text" onChange={(e) => setPrecent(e.target.value)}>
                                            <option>ເລືອກ ( % )</option>
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
                                                <NumberFormatBase type="text" min="0" className="form-control text-success" value={Pour_Actually_Amount} placeholder="ຍອດຖອກຕົວຈິງ" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>ຍອດຄ້າງ</label>
                                            <div className="input-group">
                                                <span className="input-group-text text-danger">₭</span>
                                                <NumberFormatBase type="text" min="0" className="form-control text-danger" onChange={(e) => setArrears_Amount(e.target.value)} placeholder="ຍອດຄ້າງ"/>
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
                                        <NumberFormatBase type="text" min="0" className="form-control text-success" value={PayCass} onChange={(e) => setPay_Cash(e.target.value)} placeholder="ເງິນສົດ"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>ໂອນ</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-success">₭</span>
                                        <NumberFormatBase type="text" min="0" className="form-control text-success" onChange={(e) => setPay_Money_Tranfer(e.target.value)} placeholder="ໂອນ"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>ຊື່ ແລະ ນາມສະກຸນ ( ຫົວໜ້າໜ່ວຍ )</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" className="form-control" value={NameUint} onChange={(e) => setnameVendor(e.target.value)} placeholder="ຊື່ ແລະ ນາມສະກຸນ ຫົວໜ້າໜ່ວຍ" readOnly/>
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
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ກັບຄືນ</button>
                        <button type="submit" onClick={OnClickSubmit} class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທຶກ </button>
                    </div>
                </form>

                </div>
            </div>
        </div>
        </>
    )
}