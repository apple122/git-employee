import React, { useEffect, useReducer, useState } from "react";
import { Combobox } from '@headlessui/react'
import { Link } from "react-router-dom";
import './style.css'
import History_revoke from "./History_revoke";
import Withdraw_machine from "./Event-popup/Withdraw-machine"
import axios from "axios";

const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
  ]

const Salses = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState('')
  
    const filteredPeople =
      query === ''
        ? people
        : people.filter((person) => {
            return person.toLowerCase().includes(query.toLowerCase())
          })
    return (
        <>
        <div className="container-content colums-group-padding">
            <div class="card-body row colums-group-padding search-pd">
                <div className="col-md-4">
                    <input type="search" class="form-control float-start col-md-4" placeholder="ຄົ້ນຫາ"/>
                </div>
                <div className="col-md-8">
                    <div class="nav group-event-table">
                        <div className="nav respon-ul-link label-font-12 item-align-end">
                            <div class="nav-item position-right li-link-border-mb" role="presentation">
                                <Link to="/Sales" class="nav-link li-link-border active respon-li" id="no_submit" >ຖອນເຄື່ອງ</Link>
                            </div>
                            <div class="nav-item position-right li-link-border-mb" role="presentation">
                                <Link to="/History_revoke" class="nav-link li-link-border respon-li" id="all">ປະຫວັດຖອນ</Link>
                            </div>
                                    
                        </div>
                    </div>
                </div>
            </div>
            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                <Combobox.Options>
                    {filteredPeople.map((person) => (
                    <Combobox.Option key={person} value={person}>
                        {person}
                    </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
                <div>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#remove-machince"><i class="bi bi-cloud-download-fill"></i> ຖອນເຄື່ອງຂາຍ</button>
                </div>&nbsp;
                <div class="card colums-group-padding">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ລະຫັດຜູ້ຂາຍ</th>
                                    <th scope="col">ເລກອ້າງອີງ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງຂາຍເລກ</th>
                                    <th scope="col">ລຸ້ນຂອງເຄື່ອງພິມ</th>
                                    <th scope="col">ສະຖານະ</th>
                                    <th scope="col">ວັນທີ່ລົງທະບຽນ</th>
                                    <th scope="col">ຊື່ພະນັກງານຜູ້ຖອນ</th>
                                    <th scope="col">ສາເຫດການຖອນເຄື່ອງ</th>
                                    <th scope="col">ຈັດການ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>21809234</th>
                                    <td>44938</td>
                                    <td>LENOVO</td>
                                    <td>LENOVO</td>
                                    <td>LENOVO</td>
                                    <td>LENOVO</td>
                                    <td><button type="input" class="Btn-flex btn btn-outline-secondary btn-sm">107$</button></td>     
                                    <td> <a class="label btn btn-success btn-sm">ໃຊ້ງານ</a></td>       
                                    <td><button type="input" class="Btn-flex btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#WD_machine">ຖອນ</button> </td>                    
                                </tr>
                                </tbody>
                        </table>
                </div>
                    <div class="card-body colums-group-padding">
                        <div className="col-12">
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
                </div>

        </div>

        <Withdraw_machine/>

        </>
       

       )
   
   }
   export default Salses