import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";

export default function WD_machine () {

    return (
        <>
        <div class="modal fade" id="remove-machince" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ຖອນເຄື່ອງ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>ເລກທີ່ເຄື່ອງຂາຍເລກ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ລະຫັດຜູ້ຂາຍ"/>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label>ລຸ້ນຂອງເຄື່ອງພິມ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ລະຫັດຜູ້ຂາຍ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-shop-window"></i></span>
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ລະຫັດຜູ້ຂາຍ"/>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>ສະຖານະ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-toggle-off"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>ວັນທີເປີດໃຊ້ງານ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ເລກທີອ້າງອີງ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ສາເຫດການຖອນ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-shop-window"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ຊື່ພະນັກງານຜູ້ຖອນ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ຊື່"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ຍ້ອນກັບ</button>
                    <button type="button" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ຖອນ </button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}