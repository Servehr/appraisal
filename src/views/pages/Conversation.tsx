import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import female from '../passports/female.jpg'
import { PictureCard } from '../../core/components/Pictures';
import { Pagination } from '../layout/paginate';
import rating from '../../service/data/rating.json'
import question from '../../service/data/question.json'
import { SelectOption } from '../../core/components';
import { TextArea } from '../../core/controls';
import { ChangeRating } from './Modal/ChangeRating';


export const Conversation = () =>
{
  const [message, setMessage] = useState<string>("")
  

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <Header/>
        <main id="main" className="main" style={{height: '100vh'}}>

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5 style={{marginLeft: '17px'}}>Questions</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Questions</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3 mb-3"> 
                <div className='col-12 col-sm-9' style={{backgroundColor: 'white', padding: '10px 20px', marginBottom: '20px'}}>
                {/* #b1dfdf */}
                    <div className="row mb-3 pt-4" style={{paddingRight: '8px', paddingLeft: '10px', backgroundColor: 'white' }}>
                        <div className="col-6 col-md-5 md-offset-1">
                            <h6 style={{fontWeight: 'bold', marginLeft: '13px'}}>Total Questions: 10</h6>
                        </div>   
                    </div>

                    <section className="card px-3 section dashboard">
                        <div className="table-responsive mb-4">
                            <table className="table datatable">
                                {/* <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {
                                        question.number.map((q, index) => {
                                            return <tr>
                                                <th scope="row">{q.id}</th>
                                                <td>{q.text}</td>
                                                <td><a data-bs-toggle="modal" data-bs-target="#changeRating" className="dropdown-item" href="#/"><i className="bi bi-check2-square" style={{fontSize: '20px'}}></i></a></td>
                                            </tr>
                                        })
                                    }                                                        
                                </tbody>
                            </table>
                        </div>

                        <Pagination />

                        
                        <div className="row px-2 pt-4 pb-4">
                            <div className="col-sm-12">
                                <TextArea id={'message'} name={'message'} rows={2} cols={10} placeholder={'Type Message'} onChange={(event) => setMessage(event.target.value)} label={false}></TextArea>
                            </div>
                        </div>

                        <div className='row mb-3 px-2'>
                            <div className='col-12 mb-1'>
                                <div className='d-flex col-12 p-2' style={{backgroundColor: '#f7f9fd'}}>
                                    <div className='col-1'>
                                        <PictureCard width={35} height={35} radius={'circle'} padding={5} image={female} ml={10}></PictureCard>
                                    </div>
                                    <div className='col-6'><h6 className='col pt-2'>Kehinde Maduchukwu</h6></div>
                                    <div className='col-2 offset-3 p-2'><span style={{fontSize:'12px'}}>20-12-2023</span></div>
                                </div>
                                <div className='col-12 px-3 py-2' style={{backgroundColor: '#f7f9fd' }}>                                 
                                    <p>whats your limitation in achieving your tasks whats your limitation in achieving your tasks whats your limitation in achieving your tasks</p>
                                </div>
                            </div>

                            <div className='col-12 mb-1'>
                                <div className='d-flex col-12 p-2' style={{backgroundColor: '#f7f9fd'}}>
                                    <div className='col-1'>
                                        <PictureCard width={35} height={35} radius={'circle'} padding={5} image={female} ml={10}></PictureCard>
                                    </div>
                                    <div className='col-6'><h6 className='col pt-2'>Kehinde Maduchukwu</h6></div>
                                    <div className='col-2 offset-3 p-2'><span style={{fontSize:'12px'}}>20-12-2023</span></div>
                                </div>
                                <div className='col-12 px-3 py-2' style={{backgroundColor: '#f7f9fd' }}>
                                    <p>whats your limitation in achieving your tasks whats your limitation in achieving your tasks whats your limitation in achieving your tasks</p>
                                </div>
                            </div>
                        </div>

                        <Pagination />

                    </section> 

                </div>
                <div className='col-12 col-sm-3'>
                    <div className='col-112 offset-1'>

                        <div className="card info-card revenue-card d-flex" style={{paddingTop: '15px', paddingBottom: '20px'}}>
                            <PictureCard width={85} height={85} radius={'circle'} padding={5} image={female} ml={65}>
                                <h5 className='col' style={{fontSize:'17px', margin: '3px 0px 3px -20px'}}>Kehinde Maduchukwu</h5>
                                <h6 className='col' style={{fontSize:'13px', margin: '3px 0px 3px 0px'}}>Software Developer</h6>
                                <h6 className='col' style={{fontSize:'13px', margin: '3px 0px 3px -10px'}}>Total QUestionaire: 23</h6>
                            </PictureCard>
                        </div>
                                        
                        <div className="card info-card revenue-card flex px-3">
                            <div className='row px-3 pt-3'>
                                <div className='col'><strong>Performance Scale</strong></div>
                            </div>
                            <table className="table datatable table-striped">
                                <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Poor</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Unsatisfactory</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Satisfactory</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Excellent</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>                    
                </div>
            </div>

        </main>

        <ChangeRating />
    </>
  );
}
