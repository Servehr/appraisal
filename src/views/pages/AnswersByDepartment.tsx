import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';


export const AnswersByDepartment = () => 
{
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setIsError] = useState(true)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  const callMe = (e: any) => 
  {
     e.preventdefault();
     alert('Great')
     return false;
  }

  return (
    <>
        <Header/>
        <main id="main" className="main">

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5>By Department</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Resources</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* <div className="row mb-1 p-3 mb-3"> 
                <div className="col-1 col-sm-1">
                    <i className="bi bi-file-plus-fill col-12" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i> */}
                    {/* <select className="form-select" id="task" name='task' style={{height: '47px'}}>
                        <option value={-1}>- Select Option -</option>
                        <option value="goal">Goal</option>
                        <option value="task">Task</option>
                    </select> */}
                {/* </div>     
                <div className="col-8 col-sm-9 px-3">
                    <input type="text" name="query" placeholder="Search Folders" className='col-12' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                </div>                
                <div className="col-3 col-sm-2"> */}
                        {/* <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button> */}
                    {/* <i className="bi bi-file-plus-fill" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i> */}
                {/* </div>
            </div> */}

            <section className="section dashboard container">
                <div className="container">
                    <div className="row gx-1 p-5" style={{backgroundColor: 'white'}}>
                        <div className="col text-center" style={{paddingRight: '8px'}}>
                            <a href='appraisals' className='text-white font-bold'>
                                <div className="card info-card revenue-card flex">
                                    <div className="card-body mt-2 p-3" style={{backgroundColor: '#b1dfdf'}}>
                                        <div className="col-md-12 p-1 text-center">
                                            <span className="card-title col-md-10" style={{fontSize: '15px', color:'black', marginTop: '2px'}}>Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col text-center" style={{paddingRight: '8px'}}>
                            <a href='appraisals' className='text-white font-bold'>
                                <div className="card info-card revenue-card flex">
                                    <div className="card-body mt-2 p-3" style={{backgroundColor: '#b1dfdf'}}>
                                        <div className="col-md-12 p-1 text-center">
                                            <span className="card-title col-md-10" style={{fontSize: '15px', color:'black', marginTop: '2px'}}>Finance</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col text-center" style={{paddingRight: '8px'}}>
                            <a href='appraisals' className='text-white font-bold'>
                                <div className="card info-card revenue-card flex">
                                    <div className="card-body mt-2 p-3" style={{backgroundColor: '#b1dfdf'}}>
                                        <div className="col-md-12 p-1 text-center">
                                            <span className="card-title col-md-10" style={{fontSize: '15px', color:'black', marginTop: '2px'}}>Sales</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col text-center" style={{paddingRight: '8px'}}>
                            <a href='appraisals' className='text-white font-bold'>
                                <div className="card info-card revenue-card flex">
                                    <div className="card-body mt-2 p-3" style={{backgroundColor: '#b1dfdf'}}>
                                        <div className="col-md-12 p-1 text-center">
                                            <span className="card-title col-md-10" style={{fontSize: '15px', color:'black', marginTop: '2px'}}>Account</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </section>                                                                          

            <div className="modal fade" id="basicModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Create Folder</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className="col-sm-12 form-group">
                                <input type="text" className="form-control" id="inputText" placeholder='Enter Folder Name' style={{paddingLeft: '10px'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="rowmodal-footer">
                        <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>                            
                            <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="col-2 offset-8 btn btn-primary">Save</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

        </main>
    </>
  );
}
