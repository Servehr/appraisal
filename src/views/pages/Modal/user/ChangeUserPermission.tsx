import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonDefault, SelectOption } from '../../../../core/components/index';
import roleList from '../../../../service/data/role.json'


export const ChangeUserPermission = () => 
{
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setIsError] = useState(false)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <div className="modal fade" id="changeUserPermission">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Change User Permission</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row g-3 mt-1 px-3'>
                            <div className='col-12 px-2 mb-1'>
                                <SelectOption defaultValue={[{ id: -1, text: "Select Role" }]} options={roleList.list} fieldType={'role'} />
                            </div>
                        </div>
                    </div>
                    <div className="rowmodal-footer">
                        <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>
                            <div className='col-3 offset-3'>
                                <ButtonDefault msg={'Disable'} color={'secondary'} text={'CANCEL'} dismiss={true} position={''} size={''} state={''} />
                            </div>
                            <div className='col'>
                                <ButtonDefault msg={'Disable'} color={'danger'} text={'CHANGE'} dismiss={false} position={''} size={''} state={''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
