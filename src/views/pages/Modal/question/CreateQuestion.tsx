import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonDefault, Fields } from '../../../../core/components';
import { FileInput } from '../../../../core/controls';


export const CreateQuestion = () => 
{
  const [folderName, setFolderName] = useState<string>("")

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
      <div className="modal fade" id="createQuestion">
          <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header">
              <h5 className="modal-title">Set Question</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <div className="row p-4">
                      <div className="col-sm-12 form-group">
                          <textarea className="form-control" rows={4} cols={10} id="inputText" placeholder='Enter Question' style={{paddingLeft: '10px'}}></textarea>
                      </div>
                  </div>
              </div>
              <div className="rowmodal-footer">
                  <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>                            
                      <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="col-2 offset-8 btn btn-primary">Set</button>
                  </div>
              </div>
          </div>
          </div>
      </div>
  );
}