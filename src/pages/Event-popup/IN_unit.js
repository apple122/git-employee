import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import '../../services/enpiot'

export default function IN_manage_data () {

    const [createUnit, setcreateUnit] = useState({})
    const handleChange = (e) => {
        const { name, value} = e.target;
        setcreateUnit({...createUnit, [name]: value})
        console.log(createUnit)
    }

    const Submit = (e) => {
        e.preventDefault()
        setcreateUnit(
            axios.post('http://localhost:3001/unit/createUnit', createUnit).then((res) => {
                console.log(res)
                Swal.fire({
                    position: 'top-end',
                    width: '400px',
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(() => {alert("erorr")})
        )
    }

    return (
        <>
        <div class="modal fade" id="IN_Unit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={Submit}>
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ເພີມຂໍ້ມູນ ໜ່ວຍ</strong></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <div className="col-md-6">

                        <div className="form-group">
                            <label>ເລກໜ່ວຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-hash"></i></span>
                                <input type="number" className="form-control" name="Unit_Num" value={createUnit.Unit_Num} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເລກໜ່ວຍ" required/>
                            </div>
                        </div>

                        <div className="form-group\">
                            <label>ໜ່ວຍ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                                <input type="text" className="form-control" name="nameUnit" value={createUnit.nameUnit} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ໜ່ວຍ" required/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-6">

                        <div className="form-group">
                            <label>ເບີໂທ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                                <input type="number" className="form-control" name="phone" value={createUnit.phone} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເບີໂທ" required/>
                            </div>
                        </div>
                
                        <div className="form-group">
                            <label>ສາຂາ</label>
                            <div className="input-group">
                                <span className="input-group-text"><i class="bi bi-shop-window"></i></span>
                                <input type="text" className="form-control" name="selectBranch" value={createUnit.selectBranch} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ສາຂາ" required/>
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
            </form>
        </div>
        </>
    )
}