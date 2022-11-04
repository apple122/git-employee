import React, { useState } from "react";

const Insert_branch = () => {

    const [valuename, setValue] = useState({})
    const handleChange = (e) => {
        const {name, value} = e.target
        setValue({...valuename, [name]: value})
    }



    return (
        <>
            <div class="modal fade staticBackdrop" id="Insert_branch" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="staticBackdropLabel"><strong><i class="bi bi-person-lines-fill"></i> ເພີມຂໍ້ມູນ ສາຂາ</strong></h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>ແຂວງ</label>
                                        <input type="text" className="form-control" name="province" placeholder="ກະລຸນາປ່ອນ ສາຂາ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ເມືອງ</label>
                                        <input type="text" className="form-control" name="district" placeholder="ກະລຸນາປ່ອນ ສາຂາ"/>
                                    </div>&nbsp;
                                    <div className="form-group">
                                        <label>ບ້ານ</label>
                                        <input type="text" className="form-control" name="village" placeholder="ກະລຸນາປ່ອນ ສາຂາ"/>
                                    </div>&nbsp;
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-x-diamond-fill"></i> Close</button>
                            <button type="button" class="btn btn-primary"><i class="bi bi-cloud-plus-fill"></i> ບັນທືກຂໍ້ມູນ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Insert_branch