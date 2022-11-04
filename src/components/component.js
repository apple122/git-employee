import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DB from '../services/enpiot'
import Header from "./Header";
import Header_Admin from "./Header-Admin";
import Header_Manage from "./Header-Manage";
import Router from "../Routers/Router";
import Router_Admin from "../Routers/Router-Admin";
import Router_Manage from "../Routers/Router-Manage";
import Swal from "sweetalert2";

export default function Conponent () {
    const token = localStorage.getItem("token")
    const [ userType, setuserType ] = useState(null)
    useEffect(() => {
        axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
            setuserType(res.data.userType)
        })
    }, [])

    function onLogout(){
        Swal.fire({
            title: 'ເກິດຂໍ້ຜິດພາດ ກະລຸນາລົງຊື່ເຂົ້າໃຊ້ໄໝ່.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(../assets/imgs/wp9223873.jpg)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              window.location='./Login'
              localStorage.clear()
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    try {
      if(userType == "Admin"){
            return (
                <>
                    <Header_Admin />
                    <Router_Admin />
                </>
            )
        }else if(userType == "Management"){
            return (
                <>
                    <Header_Manage />
                    <Router_Manage />
                </>
            )     
        }else if(userType == "Employee"){
            return (
                <>
                    <Header />
                    <Router />
                </>
            )
        }
    } catch (error) {
        alert(error)
    }
}