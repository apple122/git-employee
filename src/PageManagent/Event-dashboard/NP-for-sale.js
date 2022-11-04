import React, { useState } from "react";

export default function NP_for_sale (){

    let x = 1;
    const names = ['James', 'Paul', 'John', 'George', 'Ringo','James', 'Paul', 'John', 'George', 'Ringo'];
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
        <div onClick={handleClick}>
            <div className="card-boder">
                <div className="group">
                    <h3><strong>ລາຍງານເຄື່ອງຂາຍ ຫວຍ</strong></h3>
                </div>
            </div>&nbsp;
            <div className="row">
                <div className="col-md-6 font-20 div-container">
                    <label className="font-24"><strong>ລວມ</strong></label><br/>
                    <div className="w-100">
                        <label className="align z-indextop">ມີເຄື່ອງທັ້ງໝົດ</label> <label className="align-end align">100</label><br/>
                        <label className="align z-indextop">ເຄື່ອງທີ່ເປິດການຂາຍ</label> <label className="align-end align">100</label><br/>
                        <label className="align z-indextop">ເຄື່ອງທີ່ບໍ່ເປິດຂາຍ</label> <label className="align-end align">100</label><br/>
                        <label className="align z-indextop">ເຄື່ອງວ່າງ</label> <label className="align-end align">100</label><br/>
                    </div>
                </div>
            </div>&nbsp;
                <div className="container-table">
                    <div className="card-header" aria-disabled><h3><strong>ເຄື່ອງວ່າງ</strong></h3></div>
                        <div class="card mt-4 px-2  columns-body">
                            <div className="row card-body disflex">
                                <div class="col-md-3">
                                    <label className="font-20">ເຄື່ອງວ່າງ</label>
                                    <p>ທັ້ງໝົດ <strong>{num}</strong> ເຄື່ອງ</p>
                                </div>
                                
                            </div>
                            <div class="table-responsive">
                                <table class="table table-responsive table-borderless">
                                    <thead>
                                        <tr class="bg-light">
                                        <th scope="col" width="10%">ເລກທີ່ເຄື່ອງຂາຍເລກ</th>
                                        <th scope="col" width="15%">ເລກອ້າງອິງ</th>
                                        <th scope="col" width="15%">ລູນເຄື່ອງຂາຍ</th>
                                        <th scope="col" width="10%">ລູນເຄື່ອງພີມ</th>
                                        <th scope="col" width="10%"><span>ສະຖານະ</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {names.map((item) => (
                                        <tr className="hover-tr">
                                            <td>{nums}</td>
                                            <td>{spirce}</td>
                                            <td>Lenovo</td>
                                            <td>MTP-18</td>
                                            <td><span class="btn btn-success">ໃຊ້ງານ</span></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>


                <div className="container-table">
                    <div className="card-header" aria-disabled><h3><strong>ເຄື່ອງທີ່ເປິດການຂາຍ</strong></h3></div>
                        <div class="card mt-4 px-2  columns-body">
                            <div className="row card-body disflex">
                                <div class="col-md-3">
                                    <label className="font-20">ເຄື່ອງທີ່ເປິດການຂາຍ</label>
                                    <p>ທັ້ງໝົດ <strong>{num}</strong> ເຄື່ອງ</p>
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
                            </div>
                            <div class="table-responsive">
                                <table class="table table-responsive table-borderless">
                                    <thead>
                                        <tr class="bg-light">
                                        <th scope="col" width="10%">ລະຫັດຜູ້ຂາຍ</th>
                                        <th scope="col" width="15%">ເລກອ້າງອິງ</th>
                                        <th scope="col" width="15%">ລຸນຂອງເຄື່ອງຂາຍ</th>
                                        <th scope="col" width="15%">ລຸນຂອງເຄື່ອງພີມ</th>
                                        <th scope="col" width="10%">ໜ່ວຍ</th>
                                        <th scope="col" width="10%">ງວດທີ່ບໍ່ຂາຍ</th>
                                        <th scope="col" width="10%"><span>ເບີໂທ</span></th>
                                        <th scope="col" width="10%">ສະຖານະ</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {names.map((item) => (
                                        <tr className="hover-tr">
                                            <td>{nums}</td>
                                            <td>ນາງ ອາລີນ....</td>
                                            <td>{spirce}</td>
                                            <td>ໂນເກຍໄຟສາຍ</td>
                                            <td>ໂນເກຍໄຟສາຍ</td>
                                            <td>
                                                <select className="form-control">
                                                    <option>107</option>
                                                </select>
                                            </td>
                                            <td><span class="fw-bolder">+856 2020202020</span></td>
                                            <td><span class="btn btn-success">ໃຊ້ງານ</span></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>


        </div>
    )
}