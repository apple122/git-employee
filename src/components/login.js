import React, { useEffect, useState, AsyncStorage } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from '../assets/imgs/sbs-logo-update-8.gif'
import Logo_item1 from '../assets/imgs/machine-8.gif'
import Logo_item2 from '../assets/imgs/paper-8.gif'
import './Login.css'
import axios from "axios";

const Login = () => {

    const Localtion_login = useLocation().pathname

    const [ login, setLogin ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/user/getUser').then((res) => {
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
                alert("Login success")
                window.location='/Home_app'

            }
        } catch (error) {
            alert("ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ")
            window.location='/Login'
            AsyncStorage.removeItem('token')
        }
    }

    return (
        <div className="backgroup-body" style={{
            background: "linear-gradient(-45deg, #fff,#1D0AF6, #082ED4, #1575EB, #0899D4, #0AF0F6)",
            "background-size": "300% 400%",
            width: "100%",
            height: "min-content",
            opacity: "1",
            "padding-bottom": "100%",
            position: "absolute",
            top: "0",
            "z-index": "-2",
            "padding-right" : "6%"
        }}>
          <div className="container" >
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
        </div>
    )
}

export default Login