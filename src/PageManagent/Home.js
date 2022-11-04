import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Pie, Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import './Home.css'
import { useState } from "react";

const Home = () => {
    const [color, setColor] = useState("green")
    let x = 1
    const names = ['James', 'Paul', 'John', 'George', 'Ringo','James', 'Paul', 'John', 'George', 'Ringo'];

    const Alert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'ຍັງບໍ່ມີຂໍ້ມູນຈິງ',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }

    const Alererror = () => {
        Swal.fire({
            title: 'Eroror!',
            text: 'ຍັງບໍ່ມີຂໍ້ມູນຈິງ',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    const [spirce, setSprice] = useState(0);

    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 500));
        setNums(randomNumberInRange(1, 500));
        setSprice(randomNumberInRange(100, 500000));
    };


    return (
        <>
            <div className="container-content" onClick={handleClick}>
                <div className="container-full">
                    <div className="card-boder">
                        <div className="group">
                            <h3 className="user-select-none"><strong>ໜ້າຫຼັກ</strong></h3>
                        </div>
                    </div>&nbsp;
                    <div className="group-option-table">
                        <div className="group-seacrh-table"><input type="search" className="form-control border-input" placeholder="ຄົ້ນຫາ"/></div> &nbsp;
                        <div className="group-seacrh-table">
                            <select className="form-control border-input">
                                {names.map(item => {
                                    return (
                                        <option>{item}</option>    

                                    )
                                })}
                            </select>    
                        </div> 
                        {/* <div className="btn-float-left"><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Inser_manage"><i class="bi bi-cloud-plus-fill"></i> ເພີມຂໍ້ມູນ</button></div> */}
                    </div>
                    <br className="user-select-none"/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-body columns-body">
                                <div className="columns colums-text"><strong>ຍອດເງີນຄ້າງ</strong>&nbsp;<label className="col-red">1.750.000 KIP</label></div>
                                <div className="columns column-number"><label>{num}</label><strong className="text-number">ຄົນ</strong></div>
                                <div className="columns number-daye"><strong>ກັນຍາ ງວດ</strong><strong className="col-red"> 107</strong></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-body columns-body">
                                <div className="columns colums-text"><strong>ເຄືອງທີ່ບໍ່ເປິດຂາຍ</strong></div>
                                <div className="columns column-number"><label>{nums}</label><strong className="text-number">ຄົນ</strong></div>
                                <div className="columns number-daye"><strong>ກັນຍາ ງວດ</strong><strong className="col-red"> 107</strong></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-body columns-body">
                                <div className="columns colums-text"><strong>ລາຍຮັບ</strong></div>
                                <div className="columns column-numbers"><label>{spirce}</label><strong className="text-number">KIP</strong></div>
                                <div className="columns number-daye"><strong>ກັນຍາ ງວດ</strong><strong className="col-red"> 107</strong></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-chart">
                        <div className="card-header"><h3 className="user-select-none">Dashboard</h3></div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card columns-chart">
                                    <labels className="labels-center">ຍອດຄ້າງ ໜ່ວຍ</labels>
                                    <Bar data={data} />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card columns-chart">
                                    <labels className="labels-center">ຍອດຄ້າງ ເຄື່ອງ</labels>
                                    <Bar data={data} />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card columns-chart">
                                    <labels className="labels-center">ລາຍຮັບໜ່ວຍ</labels>
                                    <Bar data={data} />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card columns-chart">
                                    <labels className="labels-center">ລາຍຮັບລວມ</labels>
                                    <Bar data={data}/>
                                </div>
                            </div>
                            <div className="col-md-3 card-top">
                                <div className="card columns-chart">
                                    <labels className="labels-center">ເຄືອງທີ່ບໍ່ເປິດໃຊ້ງານ</labels>
                                    <Pie data={datas_Not_used} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-table">
                        <div className="card-header"><h3><strong>ຕາຕະລາງລາຍງານການຂາຍ</strong></h3></div>
                        <div class="card mt-4 px-2  columns-body">
                            <div class="mb-2 d-flex justify-content-between align-items-center">
                                
                                <div className="row card-body disflex">
                                    <div class="col-md-2">
                                        <label className="font-20">ຍອດຄ້າງລວມ</label>
                                        <p>ທັ້ງໝົດ <strong>{num}</strong> ເຄື່ອງ</p>
                                    </div>
                                    <div className="col-md-1 align-ends">ເດືອນ / ປີ :</div>
                                    <div className="col-md-2">
                                        <select className="form-control">
                                            <option>ກັນຍາ-2022</option>
                                        </select>
                                    </div>
                                    <div className="col-md-1 align-ends">ງວດ :</div>
                                    <div className="col-md-2">
                                        <select className="form-control">
                                            <option>107</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <p>ວັນທີ່ 01-02-2022</p>
                                    </div>
                                    <div className="col-md-1 align-ends">ໜ່ວຍ :</div>
                                    <div className="col-md-1">
                                        <select className="form-control">
                                            <option>ທັ້ງໝົດ</option>
                                        </select>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="table-responsive">
                                <table class="table table-responsive table-borderless">
                                    <thead>
                                        <tr class="bg-light">
                                        <th scope="col" width="10%">ລະຫັດຜູ້ຂາຍ</th>
                                        <th scope="col" width="10%">ເລກອ້າງອິງ</th>
                                        <th scope="col" width="15%">ລຸນຂອງເຄື່ອງຂາຍ</th>
                                        <th scope="col" width="15%">ລຸນຂອງເຄື່ອງພີມ</th>
                                        <th scope="col" width="10%">ໜ່ວຍ</th>
                                        <th scope="col" width="10%"><span>ງວດບໍ່ເປິດຂາຍ</span></th>
                                        <th scope="col" width="15%">ເບີໂທ</th>
                                        <th scope="col" width="10%">ສະຖານະ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {names.map((item) => (
                                        <tr className="hover-tr">
                                            <td>{spirce}</td>
                                            <td>{num}</td>
                                            <td>Nocia ໄຟຊາຍ</td>
                                            <td>MTP-ll</td>
                                            <td>{nums}</td>
                                            <td><span class="fw-bolder">107</span></td>
                                            <td>0205555555</td>
                                            <td><labels className="btn btn-success">ໃຊ້ງານ</labels></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="container-table">
                        <div className="card-header"><h3><strong>ລາຍຮັບຖອກເງີນ ເຄື່ອງ</strong></h3></div>
                        <div class="card mt-4 px-2  columns-body">
                            <div class="mb-2 d-flex justify-content-between align-items-center">
                                
                                <div className="row card-body disflex">
                                    <div class="col-md-2">
                                        <label className="font-20">ຍອດຄ້າງລວມ</label>
                                        <p>ທັ້ງໝົດ <strong>{num}</strong> ເຄື່ອງ</p>
                                    </div>
                                    <div className="col-md-1 align-ends">ເດືອນ / ປີ :</div>
                                    <div className="col-md-2">
                                        <select className="form-control">
                                            <option>ກັນຍາ-2022</option>
                                        </select>
                                    </div>
                                    <div className="col-md-1 align-ends">ງວດ :</div>
                                    <div className="col-md-2">
                                        <select className="form-control">
                                            <option>107</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <p>ວັນທີ່ 01-02-2022</p>
                                    </div>
                                    <div className="col-md-1 align-ends">ໜ່ວຍ :</div>
                                    <div className="col-md-1">
                                        <select className="form-control">
                                            <option>ທັ້ງໝົດ</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div class="px-2">
                                    
                                    <span>Filters <i class="fa fa-angle-down"></i></span>
                                    <i class="fa fa-ellipsis-h ms-3"></i>
                                </div> */}
                                
                            </div>
                            <div class="table-responsive">
                                <table class="table table-responsive table-borderless">
                                    <thead>
                                        <tr class="bg-light">
                                        <th scope="col" width="10%">ລະຫັດຜູ້ຂາຍ</th>
                                        <th scope="col" width="10%">ໜ່ວຍ</th>
                                        <th scope="col" width="15%">ມູນຄ່າຂາຍໄດ້</th>
                                        <th scope="col" width="15%">ເປີເຊັນຂາຍ</th>
                                        <th scope="col" width="10%">ຖອກ</th>
                                        <th scope="col" width="10%"><span>ວັນທີ່</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {names.map((item) => (
                                        <tr className="hover-tr">
                                            <td>{spirce}</td>
                                            <td>Nocia ໄຟຊາຍ</td>
                                            <td>{spirce}</td>
                                            <td>{spirce}</td>
                                            <td>{spirce}</td>
                                            <td><span class="fw-bolder">12/10/2021</span></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* <strong>ລາຍຮັບ ຖອກເງີນເລກ ໜ່ວຍ</strong> */}
                    <div className="container-table">
                        <div className="card-header"><h3><strong>ລາຍຮັບ ຖອກເງີນເລກ ໜ່ວຍ</strong></h3></div>
                        <div class="card mt-4 px-2  columns-body">
                            <div class="mb-2 d-flex justify-content-between align-items-center">
                                
                                <div className="row card-body disflex">
                                    <div class="col-md-2">
                                        <label className="font-20">ຍອດຄ້າງລວມ</label>
                                        <p>ທັ້ງໝົດ <strong>{num}</strong> ເຄື່ອງ</p>
                                    </div>
                                    <div className="col-md-1 align-ends">ເດືອນ / ປີ :</div>
                                    <div className="col-md-2">
                                        <select className="form-control">
                                            <option>ກັນຍາ-2022</option>
                                        </select>
                                    </div>
                                    <div className="col-md-1 align-ends">ງວດ :</div>
                                    <div className="col-md-2">
                                        <select className="form-control">
                                            <option>107</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <p>ວັນທີ່ 01-02-2022</p>
                                    </div>
                                    <div className="col-md-1 align-ends">ໜ່ວຍ :</div>
                                    <div className="col-md-1">
                                        <select className="form-control">
                                            <option>ທັ້ງໝົດ</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div class="px-2">
                                    
                                    <span>Filters <i class="fa fa-angle-down"></i></span>
                                    <i class="fa fa-ellipsis-h ms-3"></i>
                                </div> */}
                                
                            </div>
                            <div class="table-responsive">
                                <table class="table table-responsive table-borderless">
                                    <thead>
                                        <tr class="bg-light">
                                        <th scope="col" width="10%">ໜ່ວຍ</th>
                                        <th scope="col" width="15%">ມູນຄ່າຂາຍໄດ້</th>
                                        <th scope="col" width="15%">ເປີເຊັນຂາຍ</th>
                                        <th scope="col" width="10%">ຍອດຖອກຕົວຈິງ</th>
                                        <th scope="col" width="10%">ຖອກ</th>
                                        <th scope="col" width="10%"><span>ວັນທີ່</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {names.map((item) => (
                                        <tr className="hover-tr">
                                            <td>Nocia ໄຟຊາຍ</td>
                                            <td>{spirce}</td>
                                            <td>{spirce}</td>
                                            <td>{spirce}</td>
                                            <td>{spirce}</td>
                                            <td><span class="fw-bolder">12/10/2021</span></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

// Cahrt 
const labels = ["103", "104", "105", "106", "107", "108"];
const data = {
    labels: labels,
    datasets: [
    {
        label: "My First dataset",
        backgroundColor: ["green", "red"],
        borderColor: "#ffff",
        data: [200000, 100000, 500000, 200000, 200000, 300000, 40005],
    },
    ],
};

const Not_used = ["ເຄື່ອງທີ່ປິດການຂາຍ", "ເຄື່ອງທີ່ເປິດຂາຍ"];
const datas_Not_used = {
    labels: Not_used,
    datasets: [
    {
        label: "My First dataset",
        backgroundColor: ["Red","Pink"],
        borderColor: "#ffff",
        data: [20, 100],
    },
    ],
};
// Cahrt 

export default Home 