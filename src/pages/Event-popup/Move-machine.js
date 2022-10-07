import React from "react";

export default function Move_machine () {
    return (
        <>
        <div class="modal fade" id="Move_machine" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ຍ້າຍເຄື່ອງ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div className="row">
                            <div className="col-md-6">

                            <div className="form-group">
                                    <label>ລະຫັດຜູ້ຂາຍ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-shop-window"></i></span>
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ລະຫັດຜູ້ຂາຍ"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ລຸ້ນຂອງເຄື່ອງຂາຍ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>ລຸ້ນຂອງເຄື່ອງພິມ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">

                                <div className="form-group">
                                    <label>ເລກທີອ້າງອີງ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col-md-4">
                                <div className="form-group">
                                    <label>ຫນ່ວຍ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-toggle-off"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="form-group">
                                    <label>ຍ້າຍໄປຫນ່ວຍ</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                        <input type="text" aria-label="First name" class="form-control"/>
                                    </div>
                                </div>
                                </div>
                                </div>

       
                            </div>
                            
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ຍ້າຍ</button>
                    <button type="button" class="btn btn-light"><i class="bi bi-cloud-download-fill"></i> ກັບຄືນ </button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}