import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import female from '../passports/female.jpg'
import { PictureCard } from '../../core/components/Pictures';
import { Pagination } from '../layout/paginate';
import performance from '../../service/data/performance.json'

import company from '../../service/data/companies.json'
import department from '../../service/data/department.json'
import branch from '../../service/data/branches.json'
import roles from '../../service/data/role.json'
import { Fields, SelectOption } from '../../core/components';

export const Performance = () => 
{
  const [user, setUsers] = useState<string>("")
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
                    <h5 style={{fontWeight: 'bold'}}>Performance</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    {/* <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href='#/performance'>Performance</a></li>
                                <li className="breadcrumb-item active"><a href='#/dashboard'>Dashboard</a></li>
                            </ol>
                        </nav>
                    </div> */}
                </div>
            </div>

            <div className="row mb-1 p-3 pb-0 mb-1" style={{backgroundColor: 'white'}}>       
                <div className="col-12 col-sm-2 mb-3">
                    <div className='col-12 col-md-11'>
                        <SelectOption defaultValue={[{ id: -1, text: "Select Role" }]} options={roles.list} fieldType={'role'} />
                    </div>
                </div>                 
                <div className="col-12 col-sm-3 mb-3">
                    <div className='col-12 col-md-11'>
                        <SelectOption defaultValue={[{ id: -1, text: "Select Company" }]} options={company.companies} fieldType={'role'} />
                    </div>
                </div>   
                <div className="col-12 col-sm-3 mb-3">
                    <div className='col-12 col-md-11'>
                        <SelectOption defaultValue={[{ id: -1, text: "Select Branch" }]} options={branch.branches} fieldType={'role'} />
                    </div>
                </div>    
                <div className="col-12 col-sm-3 mb-3">
                    <div className='col-12 col-md-11'>
                        <SelectOption defaultValue={[{ id: -1, text: "Select Department" }]} options={department.list} fieldType={'role'} />
                    </div>
                </div> 
                <div className="col-12 col-sm-1 mb-3">
                    <div className='col-12 col-md-11 offset-md-1'>
                        <button type='submit' className='btn btn-primary col-sm-12 form-control' style={{height: '47px'}}>Search</button>
                    </div>
                </div> 
            </div>

            <section className="section dashboard row" style={{backgroundColor: 'white'}}>
                <div className="table-responsive px-3 py-3">
                    <table className="table datatable table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>  
                                <th scope="col">Appraisal</th>
                                <th scope="col">Total Attempt</th>
                                <th scope="col">Published</th>
                                <th scope="col">Staff Elapsed</th>
                                <th scope="col">Manager Elapsed</th>
                                <th scope="col">Days</th>
                                <th scope="col"><i className="bi bi-plus" style={{marginRight: '-10px'}}></i></th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    performance.folders.map((folder, index) => {
                                        return  <tr key={index}>
                                            <td scope="row"><a href='#/answers'>{folder.id}</a></td>
                                            <td><a href="#/answers">{folder.folder}</a></td>
                                            <td><a href="#/answers">{folder.totalAttempt}</a></td>
                                            <td><a href="#/answers">{folder.published}</a></td>
                                            <td><a href="#/answers">{folder.staffElapsed}</a></td>
                                            <td><a href="#/answers">{folder.managerElapsed}</a></td>
                                            <td><a href="#/answers">{folder.days}</a></td>
                                            <td>
                                                <a className="btn btn-primary" href="#/answers"><i className="bi bi-eye" style={{padding: '3px'}}></i></a>
                                             </td>
                                        </tr>   
                                    })                                 
                                }
                            </tbody>
                    </table>

                    <Pagination />
                    
                </div>
            </section>
            

        </main>
    </>
  );
}
