import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import female from '../passports/female.jpg'
import { PictureCard } from '../../core/components/Pictures';


export const Appraisal = () => 
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
                    <h5 style={{marginLeft: '17px'}}>Tasks</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Tasks</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3 mb-3"> 
                <div className='col-12 col-sm-12'>

                    <div className="row mb-4" style={{paddingRight: '8px', paddingLeft: '10px'}}>
                        <div className="col-1">
                            <div className="col">
                                <i className="bi bi-file-plus-fill float-start" data-bs-toggle="modal" data-bs-target="#questions" style={{fontSize: '34px', color: 'blue', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                            </div>
                        </div>            
                        <div className="col-9 px-3">
                            <input type="text" name="query" placeholder="Search Privileges" className='col-12 pull-right' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                        </div>              
                        <div className="col-2 col-sm-2">
                                <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                            {/* <i className="bi bi-file-plus-fill" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i> */}
                        </div>
                    </div>

                    <section className="section dashboard">
                        <div className="container pb-3 table-responsive" style={{backgroundColor: 'white', paddingLeft: '15px', paddingRight: '15px' }}>
                            <table className="table datatable table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col"></th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">Surname</th>
                                        <th scope="col">Task</th>
                                        <th scope="col">Start Time</th>
                                        <th scope="col">End Time</th>
                                        <th scope="col">Days</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Self Rated</th>
                                        <th scope="col">Rate College</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Gbenga</td>
                                    <td>Junior</td>
                                            <td>how you doing</td>
                                            <td>00:12:23</td>
                                            <td>00:01:23</td>
                                            <td>5 Days</td>
                                            <td><span className="badge bg-warning">Running</span></td>
                                            <td>4</td>
                                            <td><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#endTask" href="#/">
                                            <button type="button" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
              </button>
                                                </a></td>
                                    </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Gbenga</td>
                                    <td>Junior</td>
                                                            <td>are you having challenge in your carrying out your task</td>
                                                            <td>00:01:29</td>
                                                            <td>00:02:30</td>
                                                            <td>5 Hours</td>
                                                            <td><span className="badge bg-success">Completed</span></td>
                                                            <td>2</td>
                                                            <td><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#endTask" href="#/">
                                            <button type="button" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
              </button>
                                                </a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            {/* <td>resourcing gathering</td> */}
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Gbenga</td>
                                    <td>Junior</td>
                                                            <td>tell us about your team work</td>
                                                            <td>08:00:00</td>
                                                            <td>04:00:30</td>
                                                            <td>3 Hours 30 Minutes</td>
                                                            <td><span className="badge bg-danger">Cancelled</span></td>
                                                            <td>3</td>
                                                            <td><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#endTask" href="#/">
                                            <button type="button" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
              </button>
                                                </a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            {/* <td>meeting with project manager on plan on execution</td> */}
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Gbenga</td>
                                    <td>Junior</td>
                                                            <td>do you need assistance in any area</td>
                                                            <td>11:45:00</td>
                                                            <td>5:00:00</td>
                                                            <td>2 days</td>
                                                            <td><span className="badge bg-primary">Started</span></td>
                                                            <td>5</td>
                                                            <td><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#endTask" href="#/">
                                            <button type="button" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
              </button>
                                                </a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">5</th>
                                                            {/* <td>dividing tasks among members</td> */}
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Gbenga</td>
                                    <td>Junior</td>
                                                            <td>whats your limitation in achieving your tasks</td>
                                                            <td>08:00:00</td>
                                                            <td>04:30:00</td>
                                                            <td>4 days</td>
                                                            <td><span className="badge bg-secondary">Stopped</span></td>
                                                            <td>4</td>
                                                            <td><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#endTask" href="#/">
                                            <button type="button" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
              </button>
                                                </a></td>
                                                        </tr>
                                                    </tbody>
                                            </table>
                        </div>
                    </section> 

                    <div className="row mb-1 p-3 mt-3"> 
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
                        <h5 className="modal-title">Create Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4" style={{marginBottom: '-25px'}}>
                                <div className="col-12 col-sm-12">
                                    <input className="form-control" id="inputText" placeholder='Enter Task Name'/>
                                </div>
                            </div>

                            <div className="row p-4" style={{marginBottom: '-40px'}}>
                                <div className="col-12 col-sm-6 p-1 mb-3">
                                    <span>Start Date</span>
                                    <input type='date' className="form-control" id="inputText"/>
                                </div>
                                <div className="col-12 col-sm-6 p-1 mb-4">
                                    <span>End Date</span>
                                    <input type='date' className="form-control" id="inputText"/>
                                </div>
                            </div>
                            <div className='row' style={{marginTop: '0px'}}>                                
                                <div className="col-sm-12 p-4">
                                    <textarea className="form-control" rows={2} cols={10} id="inputText" placeholder='Leave a note' style={{paddingLeft: '10px'}}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-35px'}}>                            
                                <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="col-2 offset-8 btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editTask">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4" style={{marginBottom: '-25px'}}>
                                <div className="col-12 col-sm-12">
                                    <input className="form-control" id="inputText" placeholder='Enter Task Name'/>
                                </div>
                            </div>

                            <div className="row p-4" style={{marginBottom: '-40px'}}>
                                <div className="col-12 col-sm-6 p-1 mb-3">
                                    <span>Start Date</span>
                                    <input type='date' className="form-control" id="inputText"/>
                                </div>
                                <div className="col-12 col-sm-6 p-1 mb-4">
                                    <span>End Date</span>
                                    <input type='date' className="form-control" id="inputText"/>
                                </div>
                            </div>
                            <div className='row' style={{marginTop: '0px'}}>                                
                                <div className="col-sm-12 p-4">
                                    <textarea className="form-control" rows={2} cols={10} id="inputText" placeholder='Leave a note' style={{paddingLeft: '10px'}}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-35px'}}>                            
                                <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="col-4 offset-6 btn btn-primary">Update Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="deleteTask">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Delete Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4 align-content-center justify-center">          
                                 <h5 className='text-center mb-4'>You are about to delete a task, are you sure?</h5>            
                                <button type="button" className="col-2 offset-3 btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="col-3 offset-2 btn btn-primary">Delete</button>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            {/* <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-35px'}}>                            
                                <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="col-4 offset-6 btn btn-primary">Update Task</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="startTask">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Start Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4 align-content-center justify-center">          
                                 <h5 className='text-center mb-4'>You are about to start a task, are you sure?</h5>            
                                <button type="button" className="col-2 offset-3 btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="col-3 offset-2 btn btn-primary">Start</button>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="stopTask">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Stop Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4 align-content-center justify-center">          
                                 <h5 className='text-center mb-4'>You are about to stop a task, are you sure?</h5>            
                                <button type="button" className="col-2 offset-3 btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="col-3 offset-2 btn btn-secondary">Stop</button>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>

<div className="modal fade" id="endTask">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title">Give your rating</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row p-4 align-content-center justify-center">          
                    <h5 className='text-center mb-4'>You are about to end a end, are you sure?</h5>
                    <div className="col-12 p-5" style={{marginTop: '-50px', marginLeft: '80px'}}>
                        <i className="bi bi-star offset-3 m-2 rating" data-bs-toggle="modal" data-bs-target="#/" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#/" style={{ fill: 'yellow', color: "yellow", fontSize: '25px', cursor: 'pointer'}}></i>
                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#/" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#/" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#/" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                    </div>        
                    <div className="col-sm-12 mb-4">
                        <div className='text-center'><em><strong>Tell any challenge, if any</strong></em></div>
                        <textarea id='textarea' className='form-control' rows={2} cols={10}></textarea>
                    </div>            
                    <button type="button" className="col-2 offset-3 btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="col-3 offset-2 btn btn-success">End</button>
                </div>
            </div>
            <div className="rowmodal-footer">
                
            </div>
        </div>
    </div>
</div>

        </main>
    </>
  );
}
