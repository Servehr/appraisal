import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { PictureCard } from '../../core/components/Pictures';
import female from '../passports/female.jpg'
import './css/style.css'
import { Fields } from '../../core';
import { TextArea } from '../../core/controls';
import { ButtonDefault } from '../../core/components';
import { Academic } from './profile/Academic';


export const Profile = ()  =>
{
  const [firstname, setFirstName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [nationlity, setNationality] = useState<string>("")
  const [address, setAddress] = useState<string>("")

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <Header/>
        <main id="main" className="main">

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5>Profile</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Profile</li>
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
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">Bio-Data</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#academicHistory" type="button" role="tab" aria-controls="home" aria-selected="true">Academic History</button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-2" id="borderedTabContent">
                                    <div className="flex tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="container">
                                            <div className="row" style={{marginBottom: '-35px'}}>
                                                <div className="col-md">
                                                    <div className="col-md-3 p-5" style={{marginLeft: '25px'}}>
                                                        <PictureCard width={200} height={200} radius={'circle'} padding={0} image={female}>
                                                            <h5 style={{fontSize:'25px', margin: '15px 0px 3px  -15px'}}>Kehinde Maduchukwu</h5>
                                                            <h6 style={{fontSize:'16px', margin: '3px 0px 3px 30px'}}>Software Developer</h6>
                                                        </PictureCard>
                                                    </div>
                                                    <div className="row mb-4" style={{paddingRight: '8px', paddingLeft: '10px'}}>
                                                        <div className="col-8 offset-1">
                                                            <input type="file" className="form-control" id="inputText" placeholder='Enter Folder Name' style={{paddingLeft: '10px'}}/>
                                                        </div>              
                                                    </div>
                                                </div>
                                                <div className="col-md-7 pt-3 px-4 mt-3" style={{border: '1px solid #f0f1f2', borderRadius: '10px'}}>                                           
                                                        <div className="row">
                                                            <div className='col-12 col-md-6'>
                                                                <Fields css="col-12 px-2" onChange={(event) => { setFirstName(event?.target.value); } } field={'text'} placeHolder='Enter Firstname' fieldType={'firstname'}/>
                                                            </div>
                                                            <div className='col-12 col-md-6'>
                                                                <Fields css="col-12 px-2" onChange={(event) => { setSurname(event?.target.value); } } field={'text'} placeHolder='Enter Surname' fieldType={'surname'}/>
                                                            </div>
                                                        </div>          
                                                        <div className="row">
                                                            <div className='col-12 col-md-6'>
                                                                <Fields css="col-12 px-2" onChange={(event) => { setDate(event?.target.value); } } field={'text'} placeHolder='Enter Other name (optional)' fieldType={'otherName'}/>
                                                            </div>
                                                            <div className='col-12 col-md-6'>
                                                                <select id='gender' name='gender' className='form-select' style={{height:'44px'}}>
                                                                    <option value={-1}>- Select Option -</option>
                                                                    <option value={1}>Male</option>
                                                                    <option value={2}>Female</option>
                                                                </select>
                                                            </div>
                                                        </div>                                                  
                                                        <div className="row">
                                                            <div className='col-12 col-md-6'>
                                                                <Fields css="col-12 px-2" onChange={(event) => { setEmail(event?.target.value); } } field={'email'} placeHolder='Enter Email' fieldType={'email'}/>
                                                            </div>
                                                            <div className='col-12 col-md-6'>
                                                                <Fields css="col-12 px-2" onChange={(event) => { setPhoneNumber(event?.target.value); } } field={'text'} placeHolder='Enter Phone Number' fieldType={'phoneNumber'}/>
                                                            </div>
                                                        </div>    
                                                        <div className="row">
                                                            <div className='col-12 col-md-6'>
                                                                <Fields css="col-12 px-2" onChange={(event) => { setDate(event?.target.value); } } field={'date'} placeHolder='Enter Date' fieldType={'date'}/>
                                                            </div>
                                                            <div className='col-12 col-md-6'>
                                                                <Fields css="col-12 px-2" onChange={(event) => { setNationality(event?.target.value); } } field={'text'} placeHolder='Enter Your Country' fieldType={'country'}/>
                                                            </div>
                                                        </div>                
                                                        <div className="col-sm-12">
                                                            <TextArea id={'address'} name={'address'} rows={2} cols={10} placeholder={'Enter Your Address'} onChange={(event) => setAddress(event.target.value)} label={false}></TextArea>
                                                        </div>

                                                        <div className="row modal-footer">
                                                            <div className="col-12 d-flex mb-2 p-4" style={{marginTop: '10px'}}>
                                                                <div className='col-3'>
                                                                    <ButtonDefault msg={'Disable'} color={'primary'} text={'SAVE'} dismiss={false} position={''} size={''} state={''} />
                                                                    {/* <ButtonDefault msg={'Disable'} color={'secondary'} text={'CANCEL'} dismiss={true} position={''} size={''} state={''} /> */}
                                                                </div>
                                                                <div className='col-1 offset-8'>
                                                                    {/* <ButtonDefault msg={'Disable'} color={'primary'} text={'SAVE'} dismiss={false} position={''} size={''} state={''} /> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                   
                                </div>
                                <div className="tab-content pt-2" id="borderedTabContent">
                                    <div className="flex tab-pane fade show active" id="academicHistory" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="container">
                                            <div className="row" style={{marginBottom: '-15px'}}>
                                                <Academic/>
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
