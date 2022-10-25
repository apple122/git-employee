import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';
import Moment from "moment";

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
    const [ SelecOPREIS, setOptionREGis ] = useState([])

    const [ ShowEcentUnit, setShowUnit ] = useState([])
    const [ ShowRegister, setREGIS ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetUnit).then((res) => {
            setShowUnit(res.data.reverse())
        })
        if(SelectOption){
            axios.get(DB.URL + DB.GetRegister).then((res) => {
                setREGIS(res.data.reverse())
            })
        }
    },[])

    const [ UIDPrecen, setPrecenUID ] = useState(null)
    const [ PrecentPage, setPrecenPage ] = useState(null)
    if(SelecOPREIS){
        axios.get(DB.URL + DB.UIDRegister + SelecOPREIS.value).then((res) => {
            setPrecenUID(res.data.percentageId)
        })
        axios.get(DB.URL + DB.UIDPercentage + UIDPrecen).then((res) => {
            setPrecenPage(res.data.percentage)
        })
    }

    // useState Insert 
    const [ Draw, setDraw ] = useState(null)
    const [ PayMent_Money_ToDay, setPayMent_Money_ToDay ] = useState(null)
    const [ Salable_value, setSalable_value ] = useState(null)
    const [ Arrears_Amount, setArrears_Amount ] = useState(null)
    const [ Pour_Actually_Amount, setPour_Actually_Amount ] = useState(null)
    const [ Pay_Cash, setPay_Cash ] = useState(null)
    const [ Pay_Money_Tranfer, setPay_Money_Tranfer ] = useState(null)

    async function OnClickSubmit (){
        try {
            const Data = {
                unitId: SelectOption.value,
                Draw: Draw,
                PayMent_Money_ToDay: PayMent_Money_ToDay,
                Salable_value: Salable_value,
                Percentage_Sel: Precen,
                Arrears_Amount: Arrears_Amount,
                Pour_Actually_Amount: Pour_Actually_Amount,
                Pay_Cash: Pay_Cash,
                Pay_Money_Tranfer: Pay_Money_Tranfer,
                userId: UserUID,
                registerId: SelecOPREIS.value
              }
              console.log(Data)
        } catch (error) {
            
        }
    }

    const Precen = Salable_value * (PrecentPage / 100);
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
                <div class="modal-body">

                    <form onSubmit={Submit}>
                        <div className="row ">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ຫນ່ວຍ</label>
                                    <Select
                                        defaultValue={SelectOption}
                                        onChange={setOption}
                                        options={
                                            ShowEcentUnit.map((item)=>(
                                                {value: item._id, label: item.nameUnit}
                                            ))
                                        }
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ຜູ້ຂາຍ</label>
                                    <Select
                                        defaultValue={SelecOPREIS}
                                        onChange={setOptionREGis}
                                        options={
                                            ShowRegister.filter((e)=> e.unitId._id == SelectOption.value).map((item)=>(
                                                {value: item._id, label: (item.MachineId == null ? "" : item.MachineId.NumMachine)}
                                            ))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ງວດທີ ງວດລ່າສຸດ ( <strong className="text-success">1</strong> )</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-123"></i></span>
                                        <input type="number" min="0" className="form-control" onChange={(e) => setDraw(e.target.value)} placeholder="່ປອນງວດທັດໄປ"/>
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
                                        <input type="date" className="form-control" onChange={(e) => setPayMent_Money_ToDay(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>ມູນຄ່າຂາຍໄດ້</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-success">₭</span>
                                        <NumberFormatBase type="text" min="0" className="form-control text-success" onChange={(e) => setSalable_value(e.target.value)} placeholder="ມູນຄ່າຂາຍໄດ້"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ເປີເຊັນຂາຍ( <strong className="text-success">{PrecentPage}%</strong> )</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-percent"></i></span>
                                        <NumberFormatBase type="text" min="0" className="form-control" value={Precen} placeholder="ເປີເຊັນຂາຍ"/>
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
                                                <NumberFormatBase type="text" min="0" className="form-control text-success" onChange={(e) => setPour_Actually_Amount(e.target.value)} placeholder="ຍອດຖອກຕົວຈິງ"/>
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
                                        <NumberFormatBase type="text" min="0" className="form-control text-success" onChange={(e) => setPay_Cash(e.target.value)} placeholder="ເງິນສົດ"/>
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
                                    <label>ຊື່ ແລະ ນາມສະກຸນ ( ພະນັກງານຜູ້ຮັບເງີນ )</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" className="form-control" value={fullname} readOnly/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ບັນທຶກ</button>
                    <button type="button" onClick={OnClickSubmit} class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ກັບຄືນ </button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}