import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fields } from '../../../../core';
import { FileInput, TextArea } from '../../../../core/controls';
import { ButtonDefault, SelectOption } from '../../../../core/components';
import permission from '../../../../service/data/permission.json'
import privilege from '../../../../service/data/privilege.json'


export const AssignPermissionToPrivilege = () => 
{
    const [roleName, setRoleName] = useState<string>("")
    const [aboutCompany, setRoleDescription] = useState<string>("")
    
  
    const  navigate = useNavigate()
  
    const [isToggled, setIsToogled] = useState(false)
  
    return (
        <div className="modal fade" id="assignPermissionToPrivilege">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Attach Permission To Privilege</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className='col-12 px-2 mb-2'>
                                <SelectOption defaultValue={[{ id: -1, text: "Select Role" }]} options={privilege.right} fieldType={'role'} />
                            </div> 
                            <div className='col-12 px-2 mb-2'>
                                <SelectOption defaultValue={[{ id: -1, text: "Select Privilege" }]} options={permission.canDo} fieldType={'privilege'} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="rowmodal-footer">
                        <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>
                            <div className='col-3 offset-3'>
                                <ButtonDefault msg={'Disable'} color={'secondary'} text={'CANCEL'} dismiss={true} position={''} size={''} state={''} />
                            </div>
                            <div className='col'>
                                <ButtonDefault msg={'Disable'} color={'primary'} text={'ATTACH'} dismiss={false} position={''} size={''} state={''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}