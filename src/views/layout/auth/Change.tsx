import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/hrcore-logo.png';
import passport from './images/passport.png';
import '../../../App.css';
import { Fields, Password } from '../../../core';


export const Change = () => 
{
  const [currentPassword, setCurrentPassword] = useState<string>("")
  const [isCurrentPassword, setIsCurrentPassword] = useState<boolean>(false)

  const [password, setPassword] = useState<string>("")
  const [isPassword, setIsPassword] = useState<boolean>(false)

  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false)

  const [message, setMessage] = useState<string>("")
  const [error, setIsError] = useState(false)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-sm-2 col-md-3"></div>

            <div className="col-sm-8 col-md-6 p-2">
                <div className="d-flex justify-content-center py-4 mb-4">
                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                        <img src="assets/img/logo.png" alt=""/>
                        <span className="d-none d-lg-block">180-CONDUCT</span>
                    </a>
                </div>

                <div className="card mb-5 p-2">
                    <div className="card-body">
                        
                        <h6 style={{ marginBottom: '20px'}} className="card-title text-left pb-0 fs-4 col-md-10 offset-md-1">Create New Password</h6>
                               
                        <Fields css="col-md-10 offset-md-1" onChange={(event) => { setCurrentPassword(event?.target.value); } } field={'password'} placeHolder='Enter your Password' icon={'unlock-fill'} fieldType={'currentPassword'}/>

                        <Fields css="col-md-10 offset-md-1" onChange={(event) => { setPassword(event?.target.value); } } field={'password'} placeHolder='Enter your new password' icon={'unlock-fill'} fieldType={'password'}/>

                        <Fields css="col-md-10 offset-md-1" onChange={(event) => { setConfirmPassword(event?.target.value); } } field={'password'} placeHolder='Reset your Password' icon={'unlock-fill'} fieldType={'confirmPassword'}/>

                        <div className="col-md-10 offset-md-1 d-flex">
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary p-2 w-100" onClick={() => navigate('/dashboard')}>SET PASSWORD</button> 
                            </div>
                        </div>

                        <div style={{margin: '20px'}}></div>
                    </div>
                </div>        
            </div>

            <div className="col-sm-2 col-md-3">
            </div>
        </div>
    </div>
    
    </>
  );
}
