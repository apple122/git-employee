import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import Payment_unit from "./Payment_unit";

const No_payment = () => {
    return (
        <>
            <div className="container-content colums-group-padding">
                <div className="container-full">
                    <div class="card-body row colums-group-padding search-pd">
                        <div className="col-md-4">
                            <input type="search" class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                        </div>
                        <div className="col-md-8">
                            <div class="nav group-event-table">
                                <div className="nav respon-ul-link label-font-12 item-align-end">
                                    <div class="nav-item position-right" role="presentation">
                                        <label for="import-excel" className="btn btn-primary label-font-12"><i class="bi bi-filetype-xlsx"></i> Import Excel</label>
                                        <input class="custom-file-input form-control li-link-input" id="import-excel" type="file" />
                                    </div>
                                    <div class="nav-item position-right windows-res" role="presentation">
                                        <Link to="/Payment_unit" class="nav-link li-link-border respon-li btn-sm" id="submit" >ຖອກເງິນຫນ່ວຍ</Link>
                                    </div>
                                    <div class="nav-item position-right windows-res" role="presentation">
                                        <Link to="/Payment_machine" class="nav-link li-link-border respon-li btn-sm" id="all">ຖອກເງິນເຄື່ອງ</Link>
                                    </div>
                                    <div class="nav-item position-right windows-res" role="presentation">
                                        <Link to="/No_payment" class="nav-link active li-link-border respon-li btn-sm" id="no_submit" >ບໍ່ໄດ້ຖອກ</Link>
                                    </div>
                                    &nbsp;
                                    <div class="dropdown position-right mb-res">
                                        <a class="btn btn-secondary dropdown-toggle label-font-12" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ເລືອກການຈັດການ
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><Link to="/Payment_unit" class="dropdown-item" href="#">ຖອກເງິນ</Link></li>
                                            <li><Link to="/Payment_machine" class="dropdown-item" href="#">ຖອກເງິນເຄື່ອງ</Link></li>
                                            <li><Link to="/No_payment" class="dropdown-item active" href="#">ບໍ່ໄດ້ຖອກ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row card-body">
                        <div className="col-md-4"><h4><strong>ຖອກເງິນເຄື່ອງ</strong></h4></div>
                        <div className="col-md-2">
                            <select className="form-control">
                                <option>ງວດ</option>
                                <option>ງວດ</option>
                                <option>ງວດ</option>
                            </select>
                        </div>&nbsp;
                        {/* <div className="col-md-4"></div> */}
                        {/* <div className="col-md-2">
                            <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#Pour_unit"><i class="bi bi-download"></i> ຖອກເງິນເຄື່ອງ</button>
                        </div> */}
                    </div>
                    <div class="card colums-group-padding scollview-table">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ຫນ່ວຍ</th>
                                    <th scope="col">ຊື່ ແລະ ນາມສະກຸນ</th>
                                    <th scope="col">ມູນຄ່າຂາຍໄດ້</th>
                                    <th scope="col">ເປີເຊັນຂາຍ</th>
                                    <th scope="col">ຍອດຖອກຕົວຈິງ</th>
                                    <th scope="col">ເງິນສົດ</th>
                                    <th scope="col">ໂອນ</th>
                                    <th scope="col">ຄ້າງ</th>
                                    <th scope="col">ງວດ</th>
                                    <th scope="col">ວັນທີ່</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>82</th>
                                    <th>ນາງ ອາລິນ</th>
                                    <th>304,000</th>
                                    <td>60,800</td>
                                    <td class="text-success">243,200</td>
                                    <td class="text-success">243,200</td>
                                    <td class="text-success">0</td>     
                                    <td class="text-danger">0</td>       
                                    <td>107</td>      
                                    <td>12/10/2021</td>                
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="row card-body">
                        <div className="col-md-4"><h4><strong>ຖອກເງິນເຄື່ອງ</strong></h4></div>
                        <div className="col-md-2">
                            <select className="form-control">
                                <option>ງວດ</option>
                                <option>ງວດ</option>
                                <option>ງວດ</option>
                            </select>
                        </div>&nbsp;
                        {/* <div className="col-md-4"></div> */}
                        {/* <div className="col-md-2">
                            <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#Pour_unit"><i class="bi bi-download"></i> ຖອກເງິນເຄື່ອງ</button>
                        </div> */}
                    </div>
                    <div class="card colums-group-padding scollview-table">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ຫນ່ວຍ</th>
                                    <th scope="col">ຊື່ ແລະ ນາມສະກຸນ</th>
                                    <th scope="col">ມູນຄ່າຂາຍໄດ້</th>
                                    <th scope="col">ເປີເຊັນຂາຍ</th>
                                    <th scope="col">ຍອດຖອກຕົວຈິງ</th>
                                    <th scope="col">ເງິນສົດ</th>
                                    <th scope="col">ໂອນ</th>
                                    <th scope="col">ຄ້າງ</th>
                                    <th scope="col">ງວດ</th>
                                    <th scope="col">ວັນທີ່</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>82</th>
                                    <th>ນາງ ອາລິນ</th>
                                    <th>304,000</th>
                                    <td>60,800</td>
                                    <td class="text-success">243,200</td>
                                    <td class="text-success">243,200</td>
                                    <td class="text-success">0</td>     
                                    <td class="text-danger">0</td>       
                                    <td>107</td>      
                                    <td>12/10/2021</td>                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default No_payment
