import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import female from '../passports/female.jpg'
import { PictureCard } from '../../core/components/Pictures';


export const Interaction = () => 
{
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setIsError] = useState(true)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <Header/>
        <main id="main" className="main" style={{height: '100vh'}}>

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5 style={{marginLeft: '17px'}}>INTERACTION</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Interaction</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3 mb-3"> 
                <div className='col-12 col-sm-9'>

                    <div className="row mb-4" style={{paddingRight: '8px', paddingLeft: '10px'}}>
                        <div className="col-1 col-sm-1" style={{paddingRight: '10px', backgroundColor: 'none'}}>
                            <div className='col-12' style={{padding: '5px', backgroundColor: 'none'}}>
                                <i className="bi bi-reply-all-fill col-12" data-bs-toggle="modal" data-bs-target="#basicModal" style={{marginLeft: '15px', fontSize: '24px', padding: '10px', paddingTop: '0px', marginTop: '6px', cursor: 'pointer', borderStyle: 'solid', border: '2px solid none', color: 'red'}}></i>
                            </div>
                        </div>   
                        <div className="col-9 col-sm-9">
                            <input type="text" name="query" placeholder="Search Conversation" className='col-12' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                        </div>                
                        <div className="col-2 col-sm-2">
                                <button type='submit' className='btn btn-primary col-sm-11 offset-1' style={{height: '47px'}}>Search </button>
                            {/* <i className="bi bi-file-plus-fill" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i> */}
                        </div>
                    </div>

                    <section className="section dashboard">
                        <div className="table-responsive">
                        <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Week One
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Week Two
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Week Three
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                        </div>
                    </div>
                        </div>
                    </section> 

                    <div className="row mb-1 p-3"> 
                        <div className="col-2 col-sm-4"></div>     
                        <div className="col-6 col-sm-4 px-3">
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex={1} aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>                
                        <div className="col-4 col-sm-4"></div>
                    </div>                   
                </div>
                <div className='col-12 col-sm-3'>
                    <div className='col-11 offset-1'>
                                        
                        <div className="card info-card revenue-card flex">
                            <div className="card-body" style={{marginLeft: '40px', paddingTop: '30px'}}>
                                <PictureCard width={100} height={100} radius={'circle'} padding={0} image={female}>
                                    <h5 style={{fontSize:'20px', margin: '15px 0px 3px -25px'}}>Mathew James</h5>
                                    <h6 style={{fontSize:'15px', margin: '3px 0px 3px 0px'}}>Branch Manager</h6>
                                </PictureCard>
                            </div>
                        </div>

                    </div>                    
                </div>
            </div>

            <div className="modal fade" id="publish">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Publish Questions</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4">
                                <div className="col-10 col-sm-10 offset-1 mb-3">
                                    <select className="form-select" id="task" name='task'>
                                        <option value={-1}>- Select Department -</option>
                                        <option value="goal">All</option>
                                        <option value="task">Finance</option>
                                        <option value="task">Payroll</option>
                                    </select>
                                </div>
                                <div className="col-10 col-sm-10 offset-1 mb-3">
                                    <select className="form-select" id="task" name='task'>
                                        <option value={-1}>- Select Option -</option>
                                        <option value="goal">All</option>
                                        <option value="task">Team Member</option>
                                    </select>
                                </div>
                                <div className="col-10 col-sm-10 offset-1 mb-3">
                                    <input className="form-control" id="inputText" placeholder='Enter Member Name'/>
                                </div>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            <div className="col-10 col-sm-10 offset-1 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>                            
                                <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="col-5 offset-5 btn btn-primary">Broadcast/Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="questions">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Reply Mathew James</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className="col-sm-12 form-group">
                                <textarea className="form-control" rows={4} cols={10} id="inputText" placeholder='Enter Folder Name' style={{paddingLeft: '10px'}}></textarea>
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

            <div className="modal fade" id="basicModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">Reply Mathew James</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row p-4">        
                                    <div className="col-sm-12">
                                        <textarea id='textarea' className='form-control' rows={3} cols={10}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="rowmodal-footer">
                                <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>                            
                                    <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="col-2 offset-8 btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

        </main>
    </>
  );
}
