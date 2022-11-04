import axios from "axios";
import React, { useEffect, useState } from "react";
import Manage_data from "../Manage_data";

const Update_manage = () => {


function Update ({_id}) {
    console.log(_id)
}

    return (
        <>  
            <div class="modal fade staticBackdrop" id="Update_manage" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="staticBackdropLabel"><strong><i class="bi bi-person-lines-fill"></i> ຈັດການແກ້ໄຂຂໍ້ມູນ ຜູ້ບໍລິຫານ</strong></h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ຊື່ແລະນາມສະກູນ</label>
                                        
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ຊື່ແລະນາມສະກູນ"/>
                                    </div>&nbsp;

                                    <div className="form-group">
                                        <label>ເບີໂທ</label>
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ເບີໂທ"/>
                                    </div>&nbsp;

                                    <div className="form-group">
                                        <label>ລະຫັດຜ່ານ</label>
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ລະຫັດຜ່ານ"/>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ສະຂາ</label>
                                        <select type="text" className="form-control">
                                            <option value="">ກະລຸນາເລືອກ</option>
                                        </select>
                                    </div>&nbsp;

                                    <div className="form-group">
                                        <label>ສະຖານະຜູ້ຂາຍ</label>
                                        <select type="text" className="form-control">
                                            <option value="">ກະລຸນາເລືອກ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                            <button type="button" class="btn btn-primary"><i class="bi bi-cloud-plus-fill"></i> ແກ້ໄຂຂໍ້ມູນ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update_manage