import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import DB from '../../services/enpiot'


const Update_manage = (props) => {
    const propsUID = props.id;

    const [ Fullname, setFullname ] = useState(null)
    const [ username, setusername ] = useState(null)
    const [ password, setpassword ] = useState(null)
    const [ userType, setuserType ] = useState(null)
    const [ permanent_branch, setpermanent_branch ] = useState(null)
    const [ phone, setphone ] = useState(null)
    useEffect(() => {
        if (propsUID) {
            axios.get(DB.URL + DB.UIDUsers + propsUID).then((res) => {
                setFullname(res.data.fullname)
                setusername(res.data.username)
                setpassword(res.data.password)
                setuserType(res.data.userType)
                setpermanent_branch(res.data.permanent_branch)
                setphone(res.data.phone)
            })
        } else {
            
        }
    }, [])

    async function onClickSubmit () {
        try {
            const Data = {
                "fullname": Fullname,
                "username": username,
                "userType": userType,
                "permanent_branch": permanent_branch,
                "phone": phone
              }
            
              const DataS = await axios.put(DB.URL + DB.PutUsers + propsUID , Data)
              if(DataS.status == 200) {
                alert("Success")
                console.log(DataS)
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
                            <h4 class="modal-title" id="staticBackdropLabel"><strong><i class="bi bi-person-lines-fill"></i> ຈັດການແກ້ໄຂຂໍ້ມູນ ຜູ້ບໍລິຫານ</strong></h4>
                            <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ຊື່ແລະນາມສະກູນ</label>
                                        <input type="text" className="form-control" name="fullname" value={Fullname} onChange={(e) => setFullname(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ແລະນາມສະກູນ" />
                                    </div>&nbsp;

                                    <div className="form-group">
                                        <label>ຊືຜູ້ໃຊ້ງານ</label>
                                        <input type="text" name="username" className="form-control" value={username} onChange={(e) => setusername(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊືຜູ້ໃຊ້ງານ"/>
                                    </div>&nbsp;

                                    <div className="form-group">
                                        <label>ສະຖານະຜູ້ຂາຍ</label>
                                        <select type="text" name="userType" onChange={(e) => setuserType(e.target.value)} className="form-control">
                                            <option value={userType}>{userType}</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Management">Management</option>
                                            <option value="Employee">Employee</option>
                                        </select>
                                    </div>&nbsp;
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ສະຂາ</label>
                                        <select type="text" name="permanent_branch" onChange={(e) => setpermanent_branch(e.target.value)} className="form-control">
                                            <option value={permanent_branch}>{permanent_branch}</option>
                                            <option value="ສາຂາ1">ສາຂາ1</option>
                                        </select>
                                    </div>&nbsp;

                                    <div className="form-group">
                                        <label>ເບີໂທ</label>
                                        <input type="text" name="phone" className="form-control" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="ກະລຸນາປ່ອນ ເບີໂທ"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={handleClose} class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                            <button type="submit" onClick={onClickSubmit} class="btn btn-primary"><i class="bi bi-cloud-plus-fill"></i> ແກ້ໄຂຂໍ້ມູນ</button>
                        </div>
                    </div>
                </div>
                </form>
            </Modal>
        </>
    )
}

export default Update_manage