import React, { useState, useRef } from "react";
import { Button, Modal } from 'react-bootstrap';

export default function Md_Reward () {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button onClick={handleShow} className="form-control btn btn-ms btn-info">ຈ່າຍເງີນລາງວັນ</Button>
            <Modal show={show} onHide={handleClose}>
                <div class="modal-xl position-modal" role="document">
                    <div class="modal-content" id="background">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel"><strong>ໃບບີນຈ່າຍເງີນລາງວັນ</strong></h4>
                        <button type="button" onClick={handleClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="form-control btn btn-primary"><i class="bi bi-printer"></i> ອອກບີນ</button>
                    </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}