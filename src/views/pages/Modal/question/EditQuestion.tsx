import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonDefault, Fields } from '../../../../core/components';
import { FileInput } from '../../../../core/controls';


export const EditQuestion = () => 
{
  const [question, setQuestion] = useState<string>("")

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
      <div className="modal fade" id="editQuestion">
          <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header">
              <h5 className="modal-title">Edit Question</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <div className="row p-4">
                      <div className="col-sm-12 form-group">
                          <textarea className="form-control" rows={4} cols={10} id="inputText" placeholder='Edit Question' style={{paddingLeft: '10px'}}></textarea>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>
                        <div className='col-3 offset-3'>
                                <ButtonDefault msg={'Disable'} color={'secondary'} text={'Cancel'} dismiss={true} position={''} size={''} state={''} />
                            </div>
                            <div className='col'>
                                <ButtonDefault msg={'Disable'} color={'primary'} text={'Update'} dismiss={false} position={''} size={''} state={''} />
                            </div>
                  </div>
              </div>
          </div>
          </div>
      </div>
  );
}