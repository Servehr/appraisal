import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonDefault, Fields } from '../../../../core/components';


export const CreateResource = () => 
{
  const [currentPassword, setFolderName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setIsError] = useState(false)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
            <div className="modal fade" id="createResource">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Create Folder</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className="col-sm-12 form-group">
                              <Fields css="col-12 px-2" onChange={(event) => { setFolderName(event?.target.value); } } field={'text'} placeHolder='Enter Folder Name' fieldType={'folderName'}/>
                            </div>
                        </div>
                    </div>
                    <div className="rowmodal-footer">
                        <div className="col-12 d-flex mb-5 p-4" style={{marginTop: '-20px'}}>   
                            <div className='col-3 offset-3'>
                                <ButtonDefault msg={'Disable'} color={'secondary'} text={'CANCEL'} dismiss={true} position={''} size={''} state={''} />
                            </div>
                            <div className='col'>
                                <ButtonDefault msg={'Disable'} color={'danger'} text={'CREATE'} dismiss={false} position={''} size={''} state={''} />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
  );
}