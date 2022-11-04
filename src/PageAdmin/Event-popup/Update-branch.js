import React from "react";

const Update_branch = () => {
    return (
        <>
            <div class="modal fade staticBackdrop" id="Update_branch" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="staticBackdropLabel"><strong><i class="bi bi-person-lines-fill"></i> ແກ້ໄຂຂໍ້ມູນ ສາຂາ</strong></h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>ສາຂາ</label>
                                        <input type="text" className="form-control" placeholder="ກະລຸນາປ່ອນ ສາຂາ"/>
                                    </div>&nbsp;
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

export default Update_branch