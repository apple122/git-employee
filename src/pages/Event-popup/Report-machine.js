import React from "react";
import {useState} from "react";


export default function Report_machine () {
    const [showhide, setShowHide] = useState("ເລືອກລາຍງານ");

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowHide(getuser);
    }

    return (
        <>

        <button type="button" class="btn btn-light bt">ນຳອອກ file Excel</button>
            <div class="card-body">ລາຍງານເຄື່ອງຂາຍຫວຍ</div>

            <div class="card-body row colums-group-padding search-pd">
                <li class="nav-item row col-md-6">
                    <ul>ເຄື່ອງຂາຍຫວຍ</ul>
                    <div class="col-md-3 border-bt">
                    <ul class="text-left">ເຄື່ອງມີທັງຫມົດ </ul>
                    <ul class="text-left">ເຄື່ອງທີ່ເປີດຂາຍ </ul>
                    <ul class="text-left">ເຄື່ອງທີ່ບໍ່ເປີດຂາຍ </ul>
                    <ul class="text-left">ເຄື່ອງວ່າງ </ul>
                    </div>
                    
                    <div class="col-md-3 border-bt">
                    <ul class="number-right"> 331</ul>
                    <ul class="number-right"> 286</ul>
                    <ul class="number-right"> 45</ul>
                    <ul class="number-right"> 10</ul>
                    </div>
                </li>
            </div>
                <div class="card colums-group-padding">
                <div class="card-body">ເຄື່ອງວ່າງ</div>
                <div class="card-body">ທັງຫມົດ 45 ຫນ່ວຍ</div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ເລກທີ່ເຄື່ອງຂາຍເລກ</th>
                                <th scope="col">ເລກອ້າງອີງ</th>
                                <th scope="col">ລຸ້ນເຄື່ອງຂາຍ</th>
                                <th scope="col">ລຸ້ນເຄື່ອງພຶມ</th>
                                <th scope="col">ສະຖານະ</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>ວ່າງ</th>

                                </tr>
                                <tr><th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>ວ່າງ</th>

                                </tr>
                                <tr>
                                <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>ວ່າງ</th>
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
                <div class="card colums-group-padding">
                <div class="row col-md-12 float-left">           
                <div class="float-left col-md-2 ">ເຄື່ອງທີ່ເປີດຂາຍ<p>ທັງຫມົດ 288 ຫນ່ວຍ</p></div>
                <div class="btn-time-center col-md-2">
                        <text>ຫນ່ວຍ</text>
                        <label class=" col-md-8" >
                    <select className="form-control border-input-box ">
                        <option value="">ຫນ່ວຍ</option>
                        <option value="">81</option>
                        <option value="">82</option>
                        <option value="">83</option>
                        <option value="">84</option>
                        <option value="">85</option>
                    </select>
                        </label>
                    </div>
                </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ລະຫັດຜູ້ຂາຍ</th>
                                <th scope="col">ເລກອ້າງອີງ</th>
                                <th scope="col">ລຸ້ນເຄື່ອງຂາຍ</th>
                                <th scope="col">ລຸ້ນເຄື່ອງພຶມ</th>
                                <th scope="col">ຫນ່ວຍ</th>
                                <th scope="col">ເບີໂທ</th>
                                <th scope="col">ສະຖານະ</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>81</th>
                                    <th>02055225522</th>
                                    <th>ວ່າງ</th>

                                </tr>
                                <tr>            
                                    <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>81</th>
                                    <th>02055225522</th>
                                    <th>ວ່າງ</th>

                                </tr>
                                <tr>
                                <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>81</th>
                                    <th>02055225522</th>
                                    <th>ວ່າງ</th>
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

                    <div class="card colums-group-padding">
                    <div class="row col-md-12 float-left">
                    <div class="float-left col-md-2 ">ເຄື່ອງທີ່ເປີດຂາຍ<p>ທັງຫມົດ 288 ຫນ່ວຍ</p></div>
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
                                    <th scope="col">ເລກອ້າງອີງ</th>
                                    <th scope="col">ລຸ້ນເຄື່ອງຂາຍ</th>
                                    <th scope="col">ລຸ້ນເຄື່ອງພຶມ</th>
                                    <th scope="col">ຫນ່ວຍ</th>
                                    <th scope="col">ງວດທີເປີດຂາຍ</th>
                                    <th scope="col">ເບີໂທ</th>
                                    <th scope="col">ສະຖານະ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>81</th>
                                    <th>107</th>
                                    <th>02055225522</th>
                                    <th>ວ່າງ</th>

                                </tr>
                                <tr>            
                                    <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>81</th>
                                    <th>107</th>
                                    <th>02055225522</th>
                                    <th>ວ່າງ</th>

                                </tr>
                                <tr>
                                <th>21809234</th>
                                    <th>44926</th>
                                    <th>LENOVO</th>
                                    <th>MTP-II</th>
                                    <th>81</th>
                                    <th>107</th>
                                    <th>02055225522</th>
                                    <th>ວ່າງ</th>
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