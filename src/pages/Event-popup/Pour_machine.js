import React from "react";

export default function Pour_machine () {
    return (
        <>
        <div class="modal fade" id="Pour_machine" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ຖອກເງິນເຄື່ອງ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form>
                        <div className="row ">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ເລກທີ່ເຄື່ອງຂາຍເລກ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ງວດທີ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-123"></i></span>
                                        <select class="form-select" aria-label="Default select example">
                                        <option selected>ງວດ</option>
                                        <option value="1">107</option>
                                        <option value="2">106</option>
                                        <option value="3">105</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ວັນທີ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>ຊື່ ແລະ ນາມສະກຸນ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-person-lines-fill"></i></span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>ມູນຄ່າຂາຍໄດ້</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>ເປີເຊັນຂາຍ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-percent"></i></span>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>ຍອດຖອກຕົວຈິງ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                                        <input type="text" className="form-control text-success"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>ເງິນສົດ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                                        <input type="text" className="form-control text-success"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>ໂອນ</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                                        <input type="text" className="form-control text-success"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> ບັນທຶກ</button>
                    <button type="button" class="btn btn-primary"><i class="bi bi-cloud-download-fill"></i> ກັບຄືນ </button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}