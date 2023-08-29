import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonDefault } from '../../../../core/components/Buttons/ButtonDefault';


export const DeleteQuestion = () => 
{
    const [question, setQuestion] = useState<string>("")

    const  navigate = useNavigate()

    const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <div className="modal fade" id="deleteQuestion">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Delete Question</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4" style={{marginLeft: '30px'}}>
                            <h6>You are about to take an action to delete a question</h6>
                        </div>
                    </div>
                    <div className="rowmodal-footer">
                        <div className="col-12 d-flex mb-5 p-4" style={{marginTop: '-20px'}}>   
                            <div className='col-3 offset-3'>
                                <ButtonDefault msg={'Disable'} color={'secondary'} text={'Cancel'} dismiss={true} position={''} size={''} state={''} />
                            </div>
                            <div className='col'>
                                <ButtonDefault msg={'Disable'} color={'danger'} text={'Delete'} dismiss={false} position={''} size={''} state={''} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
