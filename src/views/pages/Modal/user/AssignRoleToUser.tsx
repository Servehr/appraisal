import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const AssignRoleToUser = () => 
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
        <div className="modal fade" id="assignRoleToUser">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Assign Role</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className="col-sm-12 form-group mb-3">
                                <input type="text" className="form-control" id="inputText" placeholder='Enter Email'/>
                            </div>                
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputEmail" placeholder='Enter Password'/>
                            </div>
                        </div>
                    </div>
                    <div className="rowmodal-footer">
                        <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>                            
                            <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="col-2 offset-8 btn btn-primary">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
