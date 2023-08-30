import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import female from '../passports/female.jpg'
import { PictureCard } from '../../core/components/Pictures';
import answers from '../../service/data/answers.json'
import { Pagination } from '../layout/paginate';
import { ChangeRating } from './Modal/ChangeRating';


export const Answers = () => 
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

            <div className="row" style={{paddingRight: '8px', paddingLeft: '0px'}}>
                <div className="col-sm-4">
                    <h5 style={{fontWeight: 'bold'}}>Answers</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Answers</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 px-3 mb-3 py-4" style={{backgroundColor: 'white'}}>    
                <div className="col-10 col-sm-10 px-3">
                    <input type="text" name="query" placeholder="Enter search keyword" className='col-12 form-control' height='50' style={{paddingLeft: '10px'}}/>
                </div>                
                <div className="col-2 col-sm-2">
                        <button type='submit' className='btn btn-primary col-sm-12 form-control' style={{height: '46px'}}>Search</button>
                    {/* <i className="bi bi-file-plus-fill" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i> */}
                </div>
            </div>

            <section className="section dashboard row" style={{backgroundColor: 'white'}}>
                <div className="table-responsive px-3 py-3">
                    <table className="table datatable table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>  
                                <th scope="col"></th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Attempted On</th>
                                <th scope="col">Self Rate</th>
                                <th scope="col">Manager</th>
                                <th scope="col">Chat</th>
                                <th scope="col"><i className="bi bi-plus" style={{marginRight: '-10px'}}></i></th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                        answers.questions.map((question, index) => {
                                            return <tr>
                                                <td scope="row"><a href='#/question'>{question.id}</a></td>
                                                <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                                <td><a href="#/question">{question.firstname}</a></td>
                                                <td><a href="#/question">{question.surname}</a></td>
                                                <td><a href="#/question">{question.attemptedOn}</a></td>
                                                <td><a href="#/question">{question.selfRate}</a></td>
                                                <td><a href="#/question" data-bs-toggle="modal" data-bs-target="#changeRating">{question.manager}  <i className="bi bi-check2-square" style={{color: 'green', padding: '3px'}}></i></a></td>
                                                <td>
                                                    <a className="" href="#/conversation"><i className="bi bi-chat-text" style={{padding: '3px'}}></i> 23</a>
                                                </td>
                                                <td>
                                                    <a className="btn btn-primary" href="#/question"><i className="bi bi-eye" style={{padding: '3px'}}></i></a>
                                                </td>
                                            </tr>
                                            
                                        })
                                }
                            </tbody>
                    </table>

                    <Pagination />
                    
                </div>
            </section>

            <ChangeRating />

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
