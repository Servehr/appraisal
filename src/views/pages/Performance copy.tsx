import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { PictureCard } from '../../core/components/Pictures';
import female from '../passports/female.jpg'
import './css/style.css'

export default function Performance() 
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
        <main id="main" className="main">

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5>Performance Review</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Performance</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section className="section dashboard container">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-body pb-5">
                                <h5 className="card-title"></h5>

                                <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">Review</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Appraise</button>
                                    </li>
                                    {/* <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Basic Info</button>
                                    </li> */}
                                </ul>
                                <div className="tab-content pt-2" id="borderedTabContent">
                                    <div className="flex tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="container">
                                            <div className="row">
                                                <div className='col-sm-6 p-1'>
                                                    <div className="card">
                                                        <div className="card-body pb-0">
                                                            <div id="trafficChart" style={{minHeight: '400px', marginLeft: '-120px'}} className="echart"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-sm-6 p-1'>
                                                    <div className="card">
                                                        <div className="card-body pb-0">
                                                            <div id="trafficCharts" style={{minHeight: '400px', marginLeft: '-120px'}} className="echart"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row" style={{marginTop: '-40px'}}>
                                                <div className="col-sm-12 p-3 mb-5">
                                                    <table className="table datatable table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Reviewee</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Score</th>
                                                            <th scope="col">Date</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Brandon Jacob</td>
                                                            <td><span className="badge bg-primary">Started</span></td>
                                                            <td>28</td>
                                                            <td>2016-05-25</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Bridie Kessler</td>
                                                            <td><span className="badge bg-danger">Aborted</span></td>
                                                            <td>35</td>
                                                            <td>2014-12-05</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Ashleigh Langosh</td>
                                                            <td><span className="badge bg-warning">Pending</span></td>
                                                            <td>45</td>
                                                            <td>2011-08-12</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>Angus Grady</td>
                                                            <td><span className="badge bg-success">Primary</span></td>
                                                            <td>34</td>
                                                            <td>2012-06-11</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">5</th>
                                                            <td>Raheem Lehner</td>
                                                            <td><span className="badge bg-secondar text-dark">On-Going</span></td>
                                                            <td>47</td>
                                                            <td>2011-04-19</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="container">
                                            <div className="row" style={{marginBottom: '-15px'}}>
                                                <div className="col-md">
                                                    <div className="col-md-3 p-5" style={{marginLeft: '25px'}}>
                                                        <PictureCard width={200} height={200} radius={'circle'} padding={0} image={female}>
                                                            <h5 style={{fontSize:'25px', margin: '15px 0px 3px  -15px'}}>Kehinde Maduchukwu</h5>
                                                            <h6 style={{fontSize:'16px', margin: '3px 0px 3px 30px'}}>Software Developer</h6>
                                                        </PictureCard>
                                                    </div>
                                                    <div className="col-md p-5" style={{marginTop: '-60px', marginLeft: '30px'}}>
                                                        <i className="bi bi-star m-2 rating" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                                                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#basicModal" style={{ fill: 'yellow', color: "yellow", fontSize: '25px', cursor: 'pointer'}}></i>
                                                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                                                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                                                        <i className="bi bi-star m-2" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '25px', cursor: 'pointer'}}></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 p-4 mt-3" style={{border: '1px solid #f0f1f2', borderRadius: '10px'}}>
                                                        <h6 className='text-bold mb-4'><strong>Area of Improvement, if any</strong></h6>
                                                        <div className="container px-4">
                                                            <div className="row gx-5">
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Time Management</div> 
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Quality Work</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Team Work</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Communication Skills</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Punctuation</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Attendance</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Feedback</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Comprehensive Report</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Bonding</div>
                                                                <div className="col p-3 mx-1 mb-2 text-center" style={{backgroundColor: "#f0f4f4", objectFit: 'contain', cursor: 'pointer'}}>Leadership Quality</div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="container">
                                            <div className="row" style={{marginBottom: '-15px' }}>
                                                <div className="col-md-7 m-3 p-3" style={{border: '1px solid #f0f1f2', borderRadius: '10px'}}>

                                                    <div className="container px-4">
                                                        <div className="row gx-5">
                                                            <div className="col-12 flex"><span className="col-md-3">Firstname:</span><span className="col-md-8 offset-1 pull-left" style={{fontSize: '18px'}}>Emmanuel</span></div>
                                                            <div className="col-12 flex"><span className="col-md-3">Surname:</span><span className="col-md-8 offset-1 pull-left" style={{fontSize: '18px'}}>Adamu Adamu</span></div>
                                                            <div className="col-12 flex"><span className="col-md-3">Level/Grade:</span><span className="col-md-8 offset-1" style={{fontSize: '18px'}}>2</span></div>
                                                            <div className="col-12 flex"><span className="col-md-3">Position:</span><span className="col-md-8 offset-1" style={{fontSize: '18px'}}>Supervisor</span></div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-md mb-5">
                                                    <div className="col-md-3 p-5" style={{marginLeft: '25px'}}>
                                                        <PictureCard width={200} height={200} radius={'circle'} padding={0} image={female}>
                                                            <h5 style={{fontSize:'25px', margin: '15px 0px 3px  -15px'}}>Kehinde Maduchukwu</h5>
                                                            <h6 style={{fontSize:'16px', margin: '3px 0px 3px 30px'}}>Software Developer</h6>
                                                        </PictureCard>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="basicModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">Leave A Note</h5>
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

            </section>
        </main>
    </>
  );
}
