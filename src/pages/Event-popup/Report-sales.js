import React from "react";
import {useState} from "react";


export default function Report_sales () {
    const [showhide, setShowHide] = useState("ເລືອກລາຍງານ");

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowHide(getuser);
    }

    return (
        <>


        <button type="button" class="btn btn-light bt">ນຳອອກ file Excel</button>
            <div class="card-body">ລາຍງານຍອດຂາຍເລກ 6 ໂຕ</div>

            <div class="card-body row colums-group-padding search-pd">
                <li class="nav-item row col-md-6">
                    <ul>ລວມ</ul>
                    <div class="col-md-3 border-bt">
                    <ul class="text-left">ລວມຍອດຂາຍ</ul>
                    <ul class="text-left">ເປີເຊັນການຂາຍ 25% </ul>
                    <ul class="text-left">ຍອດທີ່ຕ້ອງຖອກ </ul>
            </div>
                    
                    <div class="col-md-3 border-bt">
                    <ul class="number-right"> 116,926,000</ul>
                    <ul class="number-right"> 29.000.000</ul>
                    <ul class="number-right"> 87,694,500</ul>

                    </div>
                </li>
            </div>

            <div class="card row col-md-12 colums-group-padding">
    
                <div class="row col-md-12">
                    <div class="nav-item row col-md-2">
                        <input type="text" class="number-block" placeholder="ເລກອອກ 051025"/>
                    </div>

                    <div class="btn-time col-md-4">
                        <text>ງວດ</text>
                        <label class=" col-md-2" >
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
                                    <th class="tb-near" scope="col">ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col">ຈຳນວນເງິນ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>21809234</th>
                                    <th>74,000</th>

                                </tr>
                                <tr>
                                    <th>21809234</th>
                                    <th>74,000</th>
                                </tr>
                                <tr>
                                    <th>21809234</th>
                                    <th>74,000</th>
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