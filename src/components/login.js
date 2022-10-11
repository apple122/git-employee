import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from '../assets/imgs/sbs-logo-update-8.gif'
import Logo_item1 from '../assets/imgs/machine-8.gif'
import Logo_item2 from '../assets/imgs/paper-8.gif'
import './Login.css'
import axios from "axios";

const Login = () => {

    const [ login, setLogin ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/user/getUser').then((res) => {
            console.log(res.data)
        })
    })

    const [ username, setUsername ] = useState('')
    const [ Password, setPass ] = useState('')
    async function onSubmit () {
        try {
            const dataform = {
                "username" : username,
                "password" : Password
            }
            const data = await axios.post('http://localhost:3001/user/login', dataform )
            if(data.status == 200){
                localStorage.setItem("token" , data.data)
                console.log("Login success")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="group-columns">
                        <div className="form-group">
                            <img src={Logo} id="image"/>
                        </div>&nbsp;
                        <div className="form-group">
                            <label><strong>ຊື່ຜູ້ໃຊ້ງານ</strong></label>
                            <input type="text" className="form-control control-input" onChange={(e)=> setUsername(e.target.value)} placeholder="ກະລຸນາປ່ອນ ຊື່ຜູ້ໃຊ້ງານ"/>
                        </div>
                        <div className="form-group">
                            <label><strong>ລະຫັດຜ່ານ</strong></label>
                            <input type="password" className="form-control control-input" onChange={(e)=> setPass(e.target.value)} placeholder="ກະລຸນາປ່ອນ ສະກັດຜ່ານ"/>
                        </div>
                        <div className="form-group">
                            <Link className="label-float-right">ລືມລະຫັດຜ່ານ?</Link>
                        </div>
                        <div className="form-group group-btn">
                            <Link to="/App" onClick={onSubmit} className="btn btn-primary form-control control-input">ເຂົ້າສູລະບົບ</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                   <div className="group-item">
                        <div className="item-background">   
                            <div className="item1-bac"></div>
                            <div className="item2-bac"></div>
                        </div>
                        <div className="item-image">
                            <img src={Logo_item2} id="logo-item2"/>
                            <img src={Logo_item1} id="logo-item1"/>
                        </div>
                   </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Login