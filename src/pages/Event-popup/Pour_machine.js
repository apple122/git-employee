import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';
import Moment from "moment";
import Swal from "sweetalert2";

export default function Pour_unit () {

    const [ SelectOption, setOption ] = useState([])
    const SelectValue = SelectOption.value

    const [ GetMachine, setGetMachine ] = useState([])
    const [ getRegisterByIdMachineId, setgetRegisterByIdMachineId ] = useState([])

    const [ reducer, setRedeuce ] = useState(x => x + 1, 0)
    useEffect(() => {
        axios.get(DB.URL + DB.GetMachine).then((res) => {
            setGetMachine(res.data.reverse())
            setRedeuce()
        })
        
        axios.get(DB.URL + DB.getRegisterByIdMachineId + SelectOption.value).then((res) => {
            setgetRegisterByIdMachineId(res.data[0].Vendor_code)
            setRedeuce()
        })

    }, [reducer])
    console.log("Show: "+ getRegisterByIdMachineId)
    console.log("Seelc: " + SelectValue)


    return (
        <>
        <div class="modal fade" id="Pour_unit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">ຖອກເງິນເຄື່ອງ</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row modal-body">
                        <div className="col-4">
                            <div className="form-group">
                                {getRegisterByIdMachineId}
                                <label>ເລກທີ່ເຄື່ອງຂາຍ</label>
                                <Select 
                                    onChange={setOption}
                                    options={
                                        GetMachine.filter((e) => e.status == false).map((item) => (
                                            {value: item._id, label: "ເລກທີ່ເຄື່ອງຂາຍ: "+item.NumMachine}
                                        ))
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label>ງວດທີ</label>
                                <div className="input-group">
                                    <span className="input-group-text"></span>
                                    <NumberFormatBase type="number" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label>ຖອກເງີນໜ່ວຍ</label>
                                <div className="input-group">
                                    <span className="input-group-text"></span>
                                    <NumberFormatBase type="search" className="form-control" value={'54132'} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Cancel</button>
                        <button type="submit" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}