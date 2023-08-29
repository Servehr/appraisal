import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { PictureCard } from '../../core/components/Pictures';
import female from '../passports/female.jpg'
import '../../App.css'


export const Report = () =>
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
                    <h5>Report</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Report</li>
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
                <div className="table-responsive">
                    <table className="table datatable table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"></th>
                                <th scope="col">Fullname</th>
                                <th scope="col">Goals/Tasks</th>
                                <th scope="col">Body</th>
                                <th scope="col">Dated</th>
                                <th scope="col"><i className="bi bi-plus" style={{marginRight: '-10px'}}></i></th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr data-href='url://link-for-first-row/'>
                                    <td scope="row"><a href=''>1</a></td>
                                    <td><a href="#/" data-bs-toggle="modal" data-bs-target="#report"><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></a></td>
                                    <td><a href="#/" data-bs-toggle="modal" data-bs-target="#report">Brandon Jac</a></td>
                                    <td><a href="#/" data-bs-toggle="modal" data-bs-target="#report">Admin</a></td>
                                    <td><a href="#/" data-bs-toggle="modal" data-bs-target="#report">Manager</a></td>
                                    <td><a href="#/" data-bs-toggle="modal" data-bs-target="#report">22/10/2023</a></td>
                                    <td>
                                         <i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i>
                                        {/* <div className="card info-card revenue-card flex" style={{marginTop: '-15px'}}>
                                            <div className="filter">
                                                <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-reply" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                </ul>
                                            </div> 
                                        </div>   */}
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Bridie Kessler</td>
                                    <td>HR</td>
                                    <td>Staff</td>
                                    <td>21/10/2023</td>
                                    <td>
                                         <i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i>
                                        {/* <div className="card info-card revenue-card flex" style={{marginTop: '-15px'}}>
                                            <div className="filter">
                                                <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-reply" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                </ul>
                                            </div> 
                                        </div>   */} 
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">3</td>
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Ashleigh Langosh</td>
                                    <td>Admin</td>
                                    <td>HR</td>
                                    <td>20/12/2023</td>
                                    <td>
                                         <i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i>
                                        {/* <div className="card info-card revenue-card flex" style={{marginTop: '-15px'}}>
                                            <div className="filter">
                                                <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-reply" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                </ul>
                                            </div> 
                                        </div>   */}
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">4</td>
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Angus Grady</td>
                                    <td>Hr</td>
                                    <td>Recruiter</td>
                                    <td>24/02/2023</td>
                                    <td>
                                         <i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i>
                                        {/* <div className="card info-card revenue-card flex" style={{marginTop: '-15px'}}>
                                            <div className="filter">
                                                <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-reply" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                </ul>
                                            </div> 
                                        </div>   */} 
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">5</td>
                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                    <td>Raheem Lehner</td>
                                    <td>Hr</td>
                                    <td>Accountant</td>
                                    <td>30/12/2023</td>
                                    <td>
                                         <i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i>
                                        {/* <div className="card info-card revenue-card flex" style={{marginTop: '-15px'}}>
                                            <div className="filter">
                                                <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-download" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                    <li><a className="dropdown-item" href="#/"><i className="bi bi-reply" style={{fontSize: '14px', marginTop: '0px'}}></i></a></li>
                                                </ul>
                                            </div> 
                                        </div>   */}
                                    </td>
                                </tr>
                            </tbody>
                    </table>
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
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Make Report</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4">
                                <div className="col-sm-12 mb-3">
                                    <select className="form-select" id="task" name='task'>
                                        <option value={-1}>- Select Option -</option>
                                        <option value="goal">Goal</option>
                                        <option value="task">Task</option>
                                    </select>
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <select className="form-select" id="task" name='task'>
                                        <option value={-1}>- Select Option -</option>
                                        <option value="goal">Goal</option>
                                        <option value="task">Task</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <textarea cols={10} rows={5} className="form-control" id="inputText" placeholder='Enter Email'></textarea>
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

            <div className="modal fade" id="report">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Report on xxx</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-4">
                                <div className="col-sm-12 mb-3">
                                    <h5><strong>Goal:</strong> xxxx xxx xxxx xxx xxx xxx xx</h5>
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <h5><strong>Tasks:</strong> xxxx xxx xxxx xxx xxx xxx xx</h5>
                                </div>
                                <div className="col-sm-12">
                                    <h5><strong>Body:</strong> xxxx xxx xxxx xxx xxx xxx xx</h5>
                                </div>
                            </div>
                        </div>
                        <div className="rowmodal-footer">
                            <div className="col-12 d-flex mb-4 p-4" style={{marginTop: '-20px'}}>                            
                                <button type="button" className="col-2 btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="col-2 offset-8 btn btn-primary">Send</button>
                            </div>
                        </div>
                        <div className="overflow-auto p-3 bg-light" style={{maxWidth: '260px', maxHeight: '100px'}}>
                            This is an example of using <code>.overflow-auto</code>
                            on an element with set width and height dimensions. By design, this content will vertically scroll.
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </>
  );
}
