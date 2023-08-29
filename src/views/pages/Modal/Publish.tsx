import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fields, SelectOption } from '../../../core/components';

import company from '../../../service/data/companies.json'
import department from '../../../service/data/department.json'
import branch from '../../../service/data/branches.json'
import roles from '../../../service/data/role.json'


export const Publish = () => 
{
  const [users, setUsers] = useState("")
  const [date, setDate] = useState<Date>(new Date)
  const [stateDate, setStartDate] = useState<Date>(new Date)
  const [endDate, setEndDate] = useState<Date>(new Date)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
            <div className="modal fade" id="publish">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Publish Questions</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4">    
                                <div className="col-10 col-sm-10 offset-1 mb-3">
                                    <SelectOption defaultValue={[{ id: -1, text: " Select Company " }]} options={company.companies} fieldType={'role'} />
                                </div> 
                                <div className="col-10 col-sm-10 offset-1 mb-3">
                                    <SelectOption defaultValue={[{ id: -1, text: "Select Branch" }]} options={branch.branches} fieldType={'role'} />
                                </div> 
                                <div className="col-10 col-sm-10 offset-1 mb-3">
                                    <SelectOption defaultValue={[{ id: -1, text: "Select Department" }]} options={department.list} fieldType={'role'} />
                                </div>     
                                <div className="col-10 col-sm-10 offset-1 mb-3">
                                    <SelectOption defaultValue={[{ id: -1, text: "Select Role" }]} options={roles.list} fieldType={'role'} />
                                </div> 
                                <div className="col-10 col-sm-10 offset-1">
                                    <Fields css="col-12" onChange={(event) => { setUsers(event?.target.value); } } field={'text'} placeHolder='Edit Company Name' fieldType={'companyName'}/>    
                                </div>
                                <div className="col-10 col-sm-10 offset-1 px-1">
                                    <div className='row g-2 g-gap-2'>
                                        <div className='col-12 col-md-6 mr-1'>
                                            <h6>Staff Elapsed Date</h6>
                                            <Fields css="col-12 form-control" onChange={(event) => {  } } field={'date'} placeHolder='dd' fieldType={'startDate'}/>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <h6>Manager Elapsed Date</h6>
                                            <Fields css="col-12 form-control" onChange={(event) => {  } } field={'date'} placeHolder='' fieldType={'endDate'}/>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            <div className="col-10 col-sm-10 offset-1 d-flex mb-4 p-4" style={{marginTop: '-60px'}}>                            
                                <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="col-5 offset-5 btn btn-primary">Broadcast/Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
}