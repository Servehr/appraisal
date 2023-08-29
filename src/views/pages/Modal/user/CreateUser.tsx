import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fields } from '../../../../core';
import { SelectOption } from '../../../../core/components';
import departmentList from '../../../../service/data/department.json'
import roleList from '../../../../service/data/role.json'


export const CreateUser = () => 
{
  const [firstName, setFirtName] = useState<string>("")
  const [isFirstName, setIsFirtName] = useState<boolean>(false)

  const [surname, setSurname] = useState<string>("")
  const [isSurname, setIsSurname] = useState<boolean>(false)

  const [email, setEmail] = useState<string>("")
  const [isEmail, setIsEmail] = useState<boolean>(false)

  const [employeeId, setEmployeeId] = useState<string>("")
  const [isEmployeeId, setIsEmployeeId] = useState<boolean>(false)

  const [department, setDepartment] = useState<number>(-1)
  const [isDepartment, setIsDepartment] = useState<number>(-1)

  const [role, setRole] = useState<number>(-1)
  const [isRole, setIsRole] = useState<number>(-1)

  const [error, setIsError] = useState(false)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <div className="modal fade" id="createUser">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Create User</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className='row g-3'>
                                <div className='col-12 col-md-6'>
                                    <Fields css="col-12 px-2" onChange={(event) => { setFirtName(event?.target.value); } } field={'text'} placeHolder='Enter Firstname' fieldType={'firstname'}/>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <Fields css="col-12 px-2" onChange={(event) => { setSurname(event?.target.value); } } field={'text'} placeHolder='Enter Surname' fieldType={'surname'}/>
                                </div>
                            </div>
                            <div className='row g-3 mt-1'>
                                <div className='col-12 col-md-6'>
                                    <Fields css="col-12 px-2" onChange={(event) => { setEmail(event?.target.value); } } field={'text'} placeHolder='Enter Email' fieldType={'email'}/>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <Fields css="col-12 px-2" onChange={(event) => { setEmployeeId(event?.target.value); } } field={'text'} placeHolder='Enter EmployeeId' fieldType={'employeeId'}/>
                                </div>
                            </div>
                            <div className='row g-3 mt-1'>
                                <div className='col-12 col-md-6 px-2 mb-1'>
                                    <SelectOption defaultValue={[{ id: -1, text: "Select Department" }]} options={departmentList.list} fieldType={'department'} />
                                </div>
                                <div className='col-12 col-md-6 px-2 mb-1'>
                                    <SelectOption defaultValue={[{ id: -1, text: "Select Role" }]} options={roleList.list} fieldType={'role'} />
                                </div>
                            </div>
                            <div className='row g-3 p-2 mt-3 mb-2'>
                                <div className='col-5'>
                                    <button type="button" className="col-6 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                <div className='col-5 offset-2'>
                                    <button type="button" className="col-6 offset-6 btn btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rowmodal-footer">
                        {/* <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>  </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
