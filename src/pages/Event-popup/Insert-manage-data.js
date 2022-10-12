import axios from "axios";
import React, { useState } from "react";
import DB from '../../services/enpiot'
import Swal from "sweetalert2";
import '../../services/enpiot'

export default function IN_manage_data () {

    const [CreatePercentage, setCreatePercentage] = useState({})
    const handleChange = (e) => {
        const { name, value} = e.target;
        setCreatePercentage({...CreatePercentage, [name]: value})
    }

    const Submit = (e) => {
        e.preventDefault()
        setCreatePercentage(
            axios.post(DB.URL + DB.PostcreatePercentage, CreatePercentage).then((res) => {
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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={Submit}>
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel"><strong>ເພີມຂໍ້ມູນ ເປີເຊັນ</strong></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <div className="form-group col-md-6">
                        <label>ປະເພດຜູ້ຂາຍ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-person-video2"></i></span>
                            <input type="text" className="form-control" name="name" value={CreatePercentage.name} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ປະເພດຜູ້ຂາຍ" required/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ຈຳນວນ ເປີເຊັນ</label>
                        <div className="input-group">
                            <span className="input-group-text"><i class="bi bi-percent"></i></span>
                            <input type="number" min="0" className="form-control" name="percentage" value={CreatePercentage.percentage} onChange={handleChange} placeholder="ກະລຸນາປ່ອນ ເປີເຊັນ" required/>
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