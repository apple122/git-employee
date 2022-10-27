import React, { useEffect, useState } from "react";
import './Header.css'
import Logo from '../assets/imgs/sbs-logo-update-8.gif'
import Swal from 'sweetalert2'
import { Await, Link, useLocation } from "react-router-dom";
import axios from "axios";
import DB from '../services/enpiot'
// import bcrypt from 'bcrypt'

const Header = () => {

  const [ UserUFullanem, setUIDname ] = useState()
  const [ UserName, setName ] = useState()
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios.get(DB.URL + DB.Profile ,{ headers : {authorization : token}}).then((res) => {
      setUIDname(res.data.fullname)
      setName(res.data.username)
      if(res.data.password === res.data.password){

      }else{
        alert("Not User")
      }
    })
  }, [])

  const Login_lo = useLocation().pathname

  const [hidd, sethide] = useState()
  function toggle_abrs(){
    const hiddent = { left: "0%" }
    sethide(hiddent)
  }

  function hide_toggle(){
    const hiddent = { }
    sethide(hiddent)
  }
  

  function refreshPage() {
    window.location(true);
  }

    const Logout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'ທ່ານຕ້ອງການອອກຈາກລະບົບ ຫຼື ບໍ່?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'cancel!',
            confirmButtonText: 'ອອກຈາກລະບົບ!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                window.location='/Login'
                localStorage.clear()
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {}
          })
    }
    
    return (
        <>
            <nav className={`nav-bar-header header-bar ${Login_lo == "/Login" ? "d-none" : ""}`}>
                <ul class="nav margin-nav-header">
                    <li className="nav-item disnone">
                      <a class="nav-link" onClick={toggle_abrs}><label><i class="bi bi-menu-button-wide-fill"></i></label></a>
                    </li>
                    <li class="nav-item re-font">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i class="bi bi-person-video"></i> Staff: {UserUFullanem}</a>
                    </li>
                </ul>
                <div className="row search-float-left">
                  <div className="col-md-8"><input type="search" className="form-control" placeholder="ຄົ້ນຫາ"/></div>
                  <div className="col-md-4 "><Link className="btn btn-danger font-logpout" onClick={() => Logout()} ><i class="bi bi-box-arrow-right"></i> Logout</Link></div>
                </div>
            </nav>
            
            <div className={`nav left-bar float-left ${Login_lo == "/Login" ? "d-none" : ""}`} style={hidd}>
                <img src={Logo} width="50%" height="10%" className="Image-logo"/>
                <div className="nav-bar list-item-bar">
                    {/* <!-- As a link --> */}
                    <nav class="navbar nav-active float-start">
                        <ul class="container-fluid confluid-active">
                            <Link to="/Manage_data" class="navbar-brand navbar-light-active" onClick={hide_toggle}><i class="bi bi-kanban-fill"></i> ຈັດການຂໍ້ມູນ</Link>
                        </ul>
                        <ul class="container-fluid confluid-active">
                            <Link to="/Register_sales" class="navbar-brand navbar-light-active" onClick={hide_toggle}><i class="bi bi-r-square-fill"></i> ລົງທະບຽນຄົນຂາຍ</Link>
                        </ul>
                        <ul class="container-fluid confluid-active">
                            <Link to="/Sales" class="navbar-brand navbar-light-active" onClick={hide_toggle}><i class="bi bi-arrows-collapse"></i> ຖອນເຄື່ອງ</Link>
                        </ul>
                        <ul class="container-fluid confluid-active">
                            <Link to="/Move" class="navbar-brand navbar-light-active" onClick={hide_toggle}><i class="bi bi-arrow-repeat"></i> ຍ້າຍເຄື່ອງ</Link>
                        </ul>
                        <ul class="container-fluid confluid-active">
                            <Link to="/Payment_unit" class="navbar-brand navbar-light-active" onClick={hide_toggle}><i class="bi bi-cash"></i> ຖອກເງີນ</Link>
                        </ul>
                        <ul class="container-fluid confluid-active">
                            <Link to="/Pay_the_reward" class="navbar-brand navbar-light-active" onClick={hide_toggle}><i class="bi bi-speedometer2"></i> ຈ່າຍເງີນລາງວັນ</Link>
                        </ul>
                        <ul class="container-fluid confluid-active">
                            <Link to="/Report" class="navbar-brand navbar-light-active" onClick={hide_toggle}><i class="bi bi-speedometer2"></i> ລາຍງານ</Link>
                        </ul>

                        <ul class="container-fluid confluid-active">
                            <Link onClick={() => Logout()} class="navbar-brand navbar-light-active Logout-active"><i class="bi bi-box-arrow-right"></i> Logout</Link>
                        </ul>
                       
                    </nav>
                </div>
            </div>
            <div className="padding-header"/>

            {/* <Home /> */}

        </>
    )
}


export default Header