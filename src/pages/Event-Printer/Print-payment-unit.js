import axios from "axios";
import React, { useEffect, useState } from "react";
import Moment from "moment";
import {useParams} from 'react-router-dom';
import DB from '../../services/enpiot'
import './Event-print.css'

export default function Print_payment_unit (Name) {
    const {value} = useParams()
    const {ID} = useParams()
    localStorage.setItem('PrintID', ID)
    localStorage.setItem('Printvalue', value)

    window.addEventListener('beforeunload', (event) => {
        localStorage.removeItem('print')
    });

    let x = 1
    const [ ShowEvent, setEvent ] = useState([])
    const [ nameUnit, setnameUnit ] = useState([])
    const [ Unit_Num, setUnit_Num ] = useState([])
    useEffect(() => {
        axios.get(DB.URL + DB.GetPourMoney).then((res) => {
            setEvent(res.data.reverse())
        }) 

        axios.get(DB.URL + DB.UIDUnit + value).then((res) => {
            setnameUnit(res.data.nameUnit)
            setUnit_Num(res.data.Unit_Num)
        })
    }, [])

    function ClickPrint(){
        window.print()
    }
    function printDiv() {
        var divContents = document.getElementById("Card-bil").innerHTML;
        var table = document.getElementById("table").innerHTML;
        var a = divContents;
        a.document.write(divContents);
        a.document.write(table);
        a.document.close();
        a.print();
    }

    return (
        <>
            <p className="btn btn-sm btn-outline-info float-end-position" onClick={ClickPrint}>Print</p>
            <div style={{"margin-top": "-7%"}} className="Justify-center">
            <div class="card card-body Card-bil" id="Card-bil">
                <p>ໃບບີນ ຫົວໜ້າໜ່ວຍ ( <strong className="text-success">{nameUnit}</strong> ) ເລກທີ່ໜ່ວຍ ( <strong className="text-success">{Unit_Num}</strong> ) ງວດທີ່ ( <strong className="text-success">{ID}</strong> )</p>
                <table className="table table-bordered" id="table">
                    <thead>
                        <tr>
                            <th scope="col">ລຳດັບ</th>
                            <th scope="col">ງວດ</th>
                            <th scope="col">ວັນທີ່</th>
                            <th scope="col" className="text-primary">ຫົວໜ້າໜ່ວຍ</th>
                            <th scope="col">ມູນຄ່າຂາຍໄດ້</th>
                            <th scope="col">ເປີເຊັນຂາຍ</th>
                            <th scope="col">ຍອດຖອກຕົວຈິງ</th>
                            <th scope="col">ເງິນສົດ</th>
                            <th scope="col">ໂອນ</th>
                            <th scope="col">ຄ້າງຈ່າຍ</th>
                            <th scope="col" className="text-success">( ຜູ້ຮັບເງີນ )</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    { ShowEvent.filter((e) => e.Draw == ID && e.unitId._id == value).map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <th>{x++}</th>
                                <td>ງວດທີ (<strong className="text-success">{item.Draw == null ? "Null" : item.Draw}</strong>)</td>      
                                <td>{Moment(item.PayMent_Money_ToDay).format("YYYY-MM-DD")}</td>       
                                <th>{item.nameVendor}</th>
                                <th class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Salable_value)} ₭</th>
                                <td>{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Percentage_Sell == null ? "0" : item.Percentage_Sell)} ₭</td>
                                <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pour_Actually_Amount)} ₭</td>
                                <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pay_Cash)} ₭</td>
                                <td class="text-success">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Pay_Money_Tranfer)} ₭</td>     
                                <td class="text-danger">{new Intl.NumberFormat({ style: 'currency', currency: 'LAK' }).format(item.Arrears_Amount)} ₭</td>       
                                <td>{item.userId == null ? "" : item.userId.fullname}</td>   
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}