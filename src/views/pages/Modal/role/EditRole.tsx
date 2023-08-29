import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fields } from '../../../../core';
import { FileInput, TextArea } from '../../../../core/controls';
import { ButtonDefault } from '../../../../core/components';


export const EditRole = () => 
{
    const [roleName, setRoleName] = useState<string>("")
    const [aboutCompany, setRoleDescription] = useState<string>("")
    
  
    const  navigate = useNavigate()
  
    const [isToggled, setIsToogled] = useState(false)
  
    return (
        <div className="modal fade" id="editRole">
            <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                      <h5 className="modal-title">Edit Role</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <div className="row p-4">
                              <div className="col-sm-12 form-group">
                                <Fields css="col-12 px-2" onChange={(event) => { setRoleName(event?.target.value); } } field={'text'} placeHolder='Change Role Name' fieldType={'departmentName'}/>
                              </div>                
                              <div className="col-sm-12">
                                  <TextArea id={'companyAddress'} name={'companyAddress'} rows={2} cols={10} placeholder={'Change Role Description'} onChange={(event) => setRoleDescription(event.target.value)} label={false}></TextArea>
                              </div>
                          </div>
                      </div>
                      <div className="rowmodal-footer">
                          <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>
                              <div className='col-3 offset-3'>
                                  <ButtonDefault msg={'Disable'} color={'secondary'} text={'CANCEL'} dismiss={true} position={''} size={''} state={''} />
                              </div>
                              <div className='col'>
                                  <ButtonDefault msg={'Disable'} color={'primary'} text={'UPDATE'} dismiss={false} position={''} size={''} state={''} />
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    );
}