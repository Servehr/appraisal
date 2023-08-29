import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonDefault, Fields } from '../../../../core/components';
import { FileInput } from '../../../../core/controls';


export const CreateFiles = () => 
{
  const [folderName, setFileName] = useState<string>("")
  const [documents, setDocuments] = useState<[string]>([""])

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
            <div className="modal fade" id="createFile">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Upload Documents</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className="col-sm-12 form-group">
                              <Fields css="col-12 px-2" onChange={(event) => { setFileName(event?.target.value); } } field={'text'} placeHolder='Enter File Name' fieldType={'document'}/>
                            </div> 
                        </div>
                        <div className="row p-4" style={{marginTop: "-40px"}}>
                            <div className="col-sm-12 form-group">
                                <input type="file" className="form-control" id="inputText" style={{paddingLeft: '10px'}}/>
                            </div> 
                        </div>
                    </div>
                    <div className="rowmodal-footer">
                        <div className="col-12 d-flex mb-5 px-4" style={{marginTop: '0px'}}>   
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