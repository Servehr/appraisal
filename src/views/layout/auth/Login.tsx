import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/hrcore-logo.png';
import passport from './images/passport.png';
import '../../../App.css';
import { Alert, Fields, Password } from '../../../core';



export const Login = () => 
{
  const [employeeId, setEmployeeId] = useState<string>("")
  const [isEmployeeId, setIsEmployeeId] = useState<boolean>(false)

  const [password, setPassword] = useState<string>("")
  const [isPassword, setIsPassword] = useState<boolean>(false)  

  const [msg, setMsg] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [error, setIsError] = useState(false)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)


  useState(() => 
  { 
     if(employeeId.length < 3){ setEmployeeId('EmployeeId too short') }
  })

  const checkFieldLength = () => 
  {
    if(employeeId.length < 3){ setMsg('EmployeeId too short') }
    console.log("We are moving")
  }

  return (
    <>
    {/* <Alert.AlertSolid msg='Great' css='primary' bg='primary' textColor='dark'/> */}
    <div className="container">
        <div className="row mt-5">
            <div className="col-sm-2 col-md-3"></div>

            <div className="col-sm-8 col-md-6 p-2">
                <div className="d-flex justify-content-center py-4">
                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                        <img src="assets/img/logo.png" alt=""/>
                        <span className="d-none d-lg-block">180-CONDUCT</span>
                    </a>
                </div>

                <div className="card mb-5 p-2">
                    <div className="card-body">
                        
                        <h5 style={{ marginBottom: '20px'}} className="card-title text-left pb-0 fs-4 col-md-10 offset-md-1">Login</h5>
                               
                        <Fields css="col-md-10 offset-md-1" onChange={(event) => { setEmployeeId(event?.target.value); } } field={'text'} placeHolder='Enter Employee Id' msg={msg} icon={'person'} fieldType={'employeeId'}/>
                                
                        <Fields css="col-md-10 offset-md-1" onChange={(event) => { setPassword(event?.target.value); } } field={'password'} placeHolder='Enter your Password' icon={'unlock-fill'} fieldType={'password'}/>

                        <div className="col-md-10 offset-md-1 d-flex">
                            <div className="col-sm-2 col-md-3">
                                <button className="btn btn-primary w-100" onClick={() => navigate('/dashboard')}>Login</button> 
                            </div>
                            <div className="col-sm-7 col-md-6"></div>
                            <div className="col-sm-3 col-md-3">
                                <a href='forgot' className="w-100" style={{fontWeight: 'bold', fontSize: '14px', marginTop: '20px'}} onClick={() => navigate('/dashboard')}>forgot password</a> 
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
