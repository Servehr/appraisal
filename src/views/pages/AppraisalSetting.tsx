import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { PictureCard } from '../../core/components/Pictures';
import female from '../passports/female.jpg'
import './css/style.css'


export const AppraisalSetting = () => 
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
                    <h5>Appraisal Settings</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Appraisal Settings</li>
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
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">Settings</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">#</button>
                                    </li>
                                    {/* <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Basic Info</button>
                                    </li> */}
                                </ul>
                                <div className="tab-content pt-2" id="borderedTabContent">
                                    <div className="flex tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="container">
                                            <div className="row">
                                                <p>Set Me</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="container">
                                            <div className="row" style={{marginBottom: '-15px'}}>
                                                <div className="col-md">
                                                    <p>Great</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
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
