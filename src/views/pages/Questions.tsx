import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import female from '../passports/female.jpg'
import { PictureCard } from '../../core/components/Pictures';
import { Pagination } from '../layout/paginate';
import question from '../../service/data/question.json'
import { CreateQuestion } from './Modal/question/CreateQuestion';
import { EditQuestion } from './Modal/question/EditQuestion';
import { DeleteQuestion } from './Modal/question/DeleteQuestion';
import { Publish } from './Modal/Publish';
import { ButtonDefault } from '../../core/components';


export const Questions = () =>
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
                <div className='col-12 col-sm-9'>

                    <div className="row mb-4" style={{paddingRight: '8px', paddingLeft: '10px'}}>
                        <div className="col-1">
                            <div className="col">
                                <i className="bi bi-file-plus-fill float-start" data-bs-toggle="modal" data-bs-target="#createQuestion" style={{fontSize: '34px', color: 'blue', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                            </div>
                        </div>            
                        <div className="col-9 px-3">
                            <input type="text" name="query" placeholder="Search Privileges" className='col-12 pull-right' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                        </div>              
                        <div className="col-2 col-sm-2">
                                <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                        </div>
                    </div>

                    <section className="card px-3 section dashboard">
                        <div className="table-responsive">
                            <table className="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Questions</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        question.number.map((q, index) => {
                                            return <tr>
                                                <th scope="row">{q.id}</th>
                                                <td>{q.text}</td>
                                                <td>
                                                    <div className="card info-card revenue-card flex" style={{marginTop: '-5px'}}>
                                                        <div className="filter">
                                                            <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                                {
                                                                    question.flyOut.map((out: any, index:number) => {
                                                                        return <li><a data-bs-toggle="modal" data-bs-target={out.target} className="dropdown-item" href="#/">{out.menu}</a></li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </div> 
                                                    </div>  
                                                </td>
                                            </tr>
                                        })
                                    }                                                        
                                </tbody>
                            </table>
                        </div>

                        <Pagination />
                    </section>                   
                </div>
                
                <div className='col-12 col-sm-3'>
                    <div className='col-11 offset-1'>
                                        
                        <div className="card info-card revenue-card d-flex" style={{paddingTop: '15px', paddingBottom: '20px'}}>
                            <PictureCard width={85} height={85} radius={'circle'} padding={5} image={female} ml={65}>
                                <h5 className='col' style={{fontSize:'17px', margin: '3px 0px 3px -20px'}}>Kehinde Maduchukwu</h5>
                                <h6 className='col' style={{fontSize:'13px', margin: '3px 0px 3px 0px'}}>Software Developer</h6>
                                <h6 className='col' style={{fontSize:'13px', margin: '3px 0px 3px -10px'}}>Total QUestionaire: 23</h6>
                            </PictureCard>
                        </div>
                                        
                        <div className="card info-card revenue-card flex">
                            <div className="card-body" style={{padding: '35px'}}>
                                {/* <ButtonDefault msg={'Disable'} color={'primary'} text={'Update'} dismiss={false} position={''} size={'20'} state={''} /> */}
                                <a data-bs-toggle="modal" data-bs-target="#publish" className='col-12 btn btn-primary' style={{padding: '20px 0px'}}>Publish</a>
                            </div>
                        </div>

                    </div>                    
                </div>
            </div>

            

        
         <CreateQuestion />

         <EditQuestion />

         <DeleteQuestion />

         <Publish />

        </main>
    </>
  );
}
