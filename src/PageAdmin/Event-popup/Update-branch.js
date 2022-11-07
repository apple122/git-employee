import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";
import DB from '../../services/enpiot'
import { NumericFormat, NumberFormatBase } from 'react-number-format';


const Insert_branch = (props) => {
    const propsUID = props.id;

    const [ branch, setbranch ] = useState(null)
    const [ province, setprovince ] = useState(null)
    const [ district, setdistrict ] = useState(null)
    const [ village, setvillage ] = useState(null)
    const [ phone, setphone ] = useState(null)
    const [ Name_branch_Chief, setName_branch_Chief ] = useState(null)
    useEffect(() => {
        if (propsUID) {
            axios.get(DB.URL + DB.UIDBranch + propsUID).then((res) => {
                setbranch(res.data.branch)
                setprovince(res.data.province)
                setdistrict(res.data.district)
                setvillage(res.data.village)
                setphone(res.data.phone)
                setName_branch_Chief(res.data.Name_branch_Chief)
            })
        } else {
            
        }
    }, [])

    async function OnSubmit () {
        try {
            const Data = {
                "branch": branch,
                "province": province,
                "district": district,
                "village": village,
                "phone": phone,
                "Name_branch_Chief": Name_branch_Chief
              }
            const DataS = await axios.put(DB.URL + DB.PutBranch + propsUID , Data)
            if(DataS.status == 200){
                Swal.fire({
                    position: 'top-end',
                    width: '400px',
                    icon: 'success',
                    title: 'ປ່ຽນແປງຂໍ້ມູນສຳເລັດ',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            alert(error)
        }
    }    

    const Submit = (e) => {
        e.preventDefault()
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button onClick={handleShow} className="btn-sm"><i class="bi bi-pencil-square"></i></Button>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={Submit}>
                <div class="modal-xl position-modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="staticBackdropLabel"><strong><i class="bi bi-person-lines-fill"></i> ຈັດການຂໍ້ມູນ ສາຂາ</strong></h4>
                            <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ສາຂາ</label>
                                        <input type="text" className="form-control" name="branch" value={branch} onChange={(e) => setbranch(e.target.value)} placeholder="ກະລຸນາປ່ອນ ສາຂາ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ຊື່ຫົວໜ້າສາຂາ</label>
                                        <input type="text" className="form-control" name="Name_branch_Chief" value={Name_branch_Chief} onChange={(e) => setName_branch_Chief(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ຫົວໜ້າສາຂາ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ເບີໂທຕິດຕໍ່</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+865</span>
                                            <NumberFormatBase className="form-control" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເບີໂທຕິດຕໍ່"/>
                                        </div>
                                    </div>&nbsp;
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ແຂວງ</label>
                                        <input type="text" className="form-control" name="province" value={province} onChange={(e) => setprovince(e.target.value)} placeholder="ກະລຸນາປ່ອນ ແຂວງ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ເມືອງ</label>
                                        <input type="text" className="form-control" name="district" value={district} onChange={(e) => setdistrict(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເມືອງ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ບ້ານ</label>
                                        <input type="text" className="form-control" name="village" value={village} onChange={(e) => setvillage(e.target.value)} placeholder="ກະລຸນາປ່ອນ ບ້ານ"/>
                                    </div>&nbsp;
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={handleClose} class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                            <button type="submit" onClick={OnSubmit} class="btn btn-primary"><i class="bi bi-cloud-plus-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                        </div>
                    </div>
                </div>
                </form>
            </Modal>
        </>
    )
}

export default Insert_branch