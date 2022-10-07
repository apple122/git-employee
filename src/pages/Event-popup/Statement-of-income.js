import React from "react";
import {useState} from "react";

export default function Statement_of_income () {
    const [showhide, setShowHide] = useState("ເລືອກລາຍງານ");

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowHide(getuser);
    }

    return (
        <>


        <button type="button" class="btn btn-light bt">ນຳອອກ file Excel</button>
            <div class="card-body">ລາຍງານ ລາຍຣັບ</div>
            

            <div class="card-body row colums-group-padding search-pd">
                <li class="nav-item row col-md-6">
                    <ul>ລວມ</ul>
                    <div class="col-md-3 border-bt">
                    <ul class="text-left">ບິນ </ul>
                    <ul class="text-left">ໂອນ </ul>
                    <ul class="text-left">ຈ່າຍສົດ </ul>
            </div>
                    
                    <div class="col-md-3 border-bt">
                    <ul class="number-right"> 9.206.000</ul>
                    <ul class="number-right"> 24.000.000</ul>
                    <ul class="number-right"> 15.000.000</ul>

                    </div>
                </li>
                <li class="nav-item row  col-md-6">

                    <div class="col-md-3 border-bt">
                    <ul>ຄ້າງ</ul>
                    <ul>ລວມ</ul>
                    <ul>ຫມາຍເຫດ</ul>
                    </div>

                    <div class="col-md-3 border-bt">
                    <ul class="number-right"> 12.000.000</ul>
                    <ul class="number-right"> 46.00.000</ul>
                    <ul class="number-right"> 295.000</ul>
                    </div>
                </li>
            </div>
            <div class="card float-left row col-md-12 colums-group-padding">

                <div class="row col-md-12 float-left">
              
                <div class="float-left col-md-2 ">ຫນ່ວຍ<p>ທັງຫມົດ 25 ຄົນ</p></div>

                    <div class="btn-time-center col-md-2">
                        <text>ເດືອນ/ປີ</text>
                        <button type="button" class="btn btn-light ">ກັນຍາ 21</button>

                    </div>

                    <div class="btn-time-center col-md-2">
                        <text>ງວດ</text>
                        <label class=" col-md-8" >
                            <select className="form-control border-input-box ">
                        <option value="">ງວດ</option>
                        <option value="">107</option>
                        <option value="">106</option>
                        <option value="">105</option>
                        <option value="">104</option>
                        <option value="">103</option>
                    </select>
                        </label>
                    </div>

                    <div class="btn col-md-2">
                        <text> ວັນທີ 13/09/2021 </text>
                    </div>
                </div>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col">ມູນຄ່າຂາຍໄດ້</th>
                                    <th scope="col">ມູນຄ່າຖືກລາງວັນ</th>
                                    <th scope="col">ຈ່າຍສົດ</th>
                                    <th scope="col">ຄ້າງ</th>
                                    <th scope="col">ລວມ</th>
                                    <th scope="col">ຫມາຍເຫດ</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>81</th>
                                    <th> </th>
                                    <th>5,859,000</th>
                                    <th>14,000,000</th>
                                    <th>681,000</th>
                                    <th>21,449,000</th>
                                    <th>295,000</th>
                                </tr>
                                <tr>
                                    <th>81</th>
                                    <th> </th>
                                    <th>5,859,000</th>
                                    <th>14,000,000</th>
                                    <th>681,000</th>
                                    <th>21,449,000</th>
                                    <th>295,000</th>
                                </tr>
                                <tr>
                                    <th>81</th>
                                    <th> </th>
                                    <th>5,859,000</th>
                                    <th>14,000,000</th>
                                    <th>681,000</th>
                                    <th>21,449,000</th>
                                    <th>295,000</th>
                                </tr>
                                <tr>
                                    <th>81</th>
                                    <th> </th>
                                    <th>5,859,000</th>
                                    <th>14,000,000</th>
                                    <th>681,000</th>
                                    <th>21,449,000</th>
                                    <th>295,000</th>
                                </tr>
                                <tr>
                                    <th>81</th>
                                    <th> </th>
                                    <th>5,859,000</th>
                                    <th>14,000,000</th>
                                    <th>681,000</th>
                                    <th>21,449,000</th>
                                    <th>295,000</th>
                                </tr>
                                <tr>
                                    <th>81</th>
                                    <th> </th>
                                    <th>5,859,000</th>
                                    <th>14,000,000</th>
                                    <th>681,000</th>
                                    <th>21,449,000</th>
                                    <th>295,000</th>
                                </tr>
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation" >
                            <ul class="pagination d-flex justify-content-end flex-wrap pagination-rounded-flat pagination-success">
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true"></span>
                                    <span class="sr-only"> <i class="bi bi-chevron-left"></i> </span>
                                </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true"></span>
                                    <span class="sr-only"> <i class="bi bi-chevron-right"></i> </span>
                                </a>
                                </li>
                            </ul>
                        </nav>
            </div>
                   

        </>
    )
}
