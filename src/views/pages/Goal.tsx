import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';



export const Goal = () => 
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
                    <h5>To-Do</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">To-Do</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3 mb-3"> 
                <div className="col-1 col-sm-1">
                    <i className="bi bi-file-plus-fill col-12" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                    {/* <select className="form-select" id="task" name='task' style={{height: '47px'}}>
                        <option value={-1}>- Select Option -</option>
                        <option value="goal">Goal</option>
                        <option value="task">Task</option>
                    </select> */}
                </div>     
                <div className="col-8 col-sm-9 px-3">
                    <input type="text" name="query" placeholder="Search Folders" className='col-12' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                </div>                
                <div className="col-3 col-sm-2">
                        <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                    {/* <i className="bi bi-file-plus-fill" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i> */}
                </div>
            </div>

            <section className="section dashboard container">
                <div className="container">
                    <div className="row">
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>35</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Communal Report</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>15</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Evaluation</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>6</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Interactive Session</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>17</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Evidence</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>3</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Challenges</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>11</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Man Power</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>5</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Production</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                            <a href='task'>
                                <div className="card info-card revenue-card flex">
                                    <div className="filter" style={{marginTop: '-8px'}}>
                                        <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li><a className="dropdown-item" href="#/">Today</a></li>
                                            <li><a className="dropdown-item" href="#/">This Month</a></li>
                                            <li><a className="dropdown-item" href="#/">This Year</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title" style={{marginBottom:'5px'}}>Revenue <span>| This Month</span></h5> */}
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-file-earmark-pdf" style={{fontSize: '22px'}}></i>
                                            </div>
                                            <div className="ps-3 mb-3">
                                                <div className='col-12' style={{fontSize: '25px', marginTop: '10px', marginBottom: '-20px'}}>4</div>
                                                {/* <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span> */}
                                            </div>
                                        </div>
                                        <h4 className="card-title text-center" style={{marginBottom:'-5px', fontSize: '14px'}}>Effort</h4>
                                    </div>
                                </div>
                            </a>
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

            <div className="modal fade" id="basicModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Create File</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row p-4">
                            <div className="col-sm-12 form-group">
                                <input type="text" className="form-control" id="inputText" placeholder='Enter File Name' style={{paddingLeft: '10px'}}/>
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
