import React, { useState } from "react";

export default function Report_arrears (){
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
                    <h3><strong>ລາຍງານຍອດເງີນຄ້າງ</strong></h3>
                </div>
            </div>&nbsp;
            <div className="row">
                <div className="col-md-6 font-20 div-container">
                    <label className="font-24"><strong>ລວມ</strong></label><br/>
                    <div className="w-100">
                        <label className="align z-indextop">ມູນຄ່າຂາຍໄດ້</label> <label className="align-end align">100.100.100 KIP</label><br/>
                        <label className="align z-indextop">ຍອດຖອກຕົວຈິງ</label> <label className="align-end align">100.100.100 KIP</label><br/>
                        <label className="align z-indextop">ຄ້າງ</label> <label className="align-end align">100.100.100 KIP</label><br/>
                    </div>
                </div>
                <div className="col-md-6 font-20 div-container">
                    <label className="font-24"><strong>ເຄື່ອງຂາຍເລກ</strong></label><br/>
                    <div className="w-100">
                        <label className="align z-indextop">ເຄື່ອງມີທັ້ງໝົດ</label> <label className="align-end align">100</label><br/>
                        <label className="align z-indextop">ເຄື່ອງທີ່ເປິດການຂາຍ</label> <label className="align-end align">100</label><br/>
                        <label className="align z-indextop">ເຄືອງທີ່ບໍ່ເປິດຂາຍ</label> <label className="align-end align">100</label><br/>
                    </div>
                </div>
            </div>&nbsp;
                <div className="container-table">
                    <div className="card-header"><h3><strong>ລາຍຮັບ ຖອກເງີນເລກ ໜ່ວຍ</strong></h3></div>
                        <div class="card mt-4 px-2  columns-body">
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
                            <div class="table-responsive">
                                <table class="table table-responsive table-borderless">
                                    <thead>
                                        <tr class="bg-light">
                                        <th scope="col" width="10%">ລະຫັດຜູ້ຂາຍ</th>
                                        <th scope="col" width="15%">ຊື່ ນາມສະກຸນ</th>
                                        <th scope="col" width="15%">ມູນຄ່າຂາຍໄດ້</th>
                                        <th scope="col" width="10%">ເປີເຊັນຂາຍໄດ້</th>
                                        <th scope="col" width="10%">ຍອດຖອກຕົວຈິງ</th>
                                        <th scope="col" width="10%">ຄ້າງ</th>
                                        <th scope="col" width="10%"><span>ວັນທີ່</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {names.map((item) => (
                                        <tr className="hover-tr">
                                            <td>{nums}</td>
                                            <td>ນາງ ອາລີນ....</td>
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

            <div className="hr" />
            {/* ຍອດເງີນຄ້າງລວມ */}

            <div className="card-boder">
                <div className="group">
                    <h3><strong>ລາຍງານຍອດເງີນຄ້າງ</strong></h3>
                </div>
            </div>&nbsp;
            <div className="row">
                <div className="col-md-6 font-20 div-container">
                    <label className="font-24"><strong>ລວມ</strong></label><br/>
                    <div className="w-100">
                        <label className="align z-indextop">ມູນຄ່າຂາຍໄດ້</label> <label className="align-end align">100.100.100 KIP</label><br/>
                        <label className="align z-indextop">ຍອດຖອກຕົວຈິງ</label> <label className="align-end align">100.100.100 KIP</label><br/>
                        <label className="align z-indextop">ຄ້າງ</label> <label className="align-end align">100.100.100 KIP</label><br/>
                    </div>
                </div>
                <div className="col-md-6 font-20 div-container">
                    <label className="font-24"><strong>ເຄື່ອງຂາຍເລກ</strong></label><br/>
                    <div className="w-100">
                        <label className="align z-indextop">ເຄື່ອງມີທັ້ງໝົດ</label> <label className="align-end align">100</label><br/>
                        <label className="align z-indextop">ເຄື່ອງທີ່ເປິດການຂາຍ</label> <label className="align-end align">100</label><br/>
                        <label className="align z-indextop">ເຄືອງທີ່ບໍ່ເປິດຂາຍ</label> <label className="align-end align">100</label><br/>
                    </div>
                </div>
            </div>&nbsp;
                <div className="container-table">
                    {/* <div className="card-header"><h3><strong>ລາຍຮັບ ຖອກເງີນເລກ ໜ່ວຍ</strong></h3></div> */}
                        <div class="card mt-4 px-2  columns-body">
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
                            <div class="table-responsive">
                                <table class="table table-responsive table-borderless">
                                    <thead>
                                        <tr class="bg-light">
                                        <th scope="col" width="10%">ໜ່ວຍ</th>
                                        <th scope="col" width="15%">ຊື່ ນາມສະກຸນ</th>
                                        <th scope="col" width="15%">ມູນຄ່າຂາຍໄດ້</th>
                                        <th scope="col" width="10%">ເປີເຊັນຂາຍໄດ້</th>
                                        <th scope="col" width="10%">ຍອດຖອກຕົວຈິງ</th>
                                        <th scope="col" width="10%">ຄ້າງ</th>
                                        <th scope="col" width="10%"><span>ວັນທີ່</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {names.map((item) => (
                                        <tr className="hover-tr">
                                            <td>{num}</td>
                                            <td>ນາງ ອາລີນ....</td>
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
    )
}