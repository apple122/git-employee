import React from "react";
import { Link } from "react-router-dom";
import Md_Reward from "./Event-popup/Md_Reward";


const Pay_the_reward = () => {
    return (
        <>
            <div className="container-content colums-group-padding">
                <div className="container-full">
                    <div class="card-body colums-group-padding">
                        <div className="row">
                            <div className="col-md-12">
                                <div class="card colums-group-padding p-2">
                                    <div className="group-header d-flex justify-content-center p-2"><h4><strong>ຈ່າຍເງີນລາງວັນ</strong></h4></div>
                                    <div className="d-flex justify-content-center colums-group-padding">
                                        <div className="col-6">
                                            <div className="input-group">
                                                <input type="search" className="form-control btn-time-center" placeholder="ຄິບີນ"/>
                                                <button className="input-group-text btn btn-ms btn-info"><i class="bi bi-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                   <div className="d-flex justify-content-center">
                                        <div className="row col-6 font-size-18 colums-group-padding">
                                            <h5 className="btn-time-center"><strong>ຂໍ້ມູນການຖືກລາງວັນ</strong></h5>
                                            <hr/>
                                            <div className="col-md-6 p-1">
                                                <label>ຂໍ້ມູນຖືກເລກ : <strong>1,2,3,4,5,6</strong></label>
                                            </div>
                                            <div className="col-md-6 p-1">
                                                <label>ຈຳນວນເງີນຖືກລາງວັນ : <strong>200,000 ₭</strong></label>
                                            </div>
                                            <div className="col-md-6 p-1">
                                                <label>ງວດທີ່ : <strong>1</strong></label>
                                            </div>
                                            <div className="col-md-6 p-1">
                                                <label>ວັນທີ່ເລກອອກ : <strong>02-02-2022</strong></label>
                                            </div>
                                        </div>
                                   </div>
                                   <div className="d-flex justify-content-center">
                                        <div className="row col-6 font-size-18">
                                            <hr/>
                                            <Md_Reward />
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal  */}
            {/* Modal  */}
        </>
    )
}

export default Pay_the_reward