import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { CreateCompany } from './Modal/company/CreateCompany';
import { Pagination } from '../layout/paginate';
import company from  '../../service/data/companies.json'
import female from '../passports/female.jpg'
import { PictureCard } from '../../core/components/Pictures';
import { EditCompany } from './Modal/company/EditCompany';
import { DisableCompnay } from './Modal/company/DisableCompnay';

export const Company = ()  =>
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
        <main id="main" className="main" style={{height: '100vh', paddingBottom: '150px'}}>

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5>Company</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Company</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3"> 
                <div className="col-1 col-sm-1">
                    <i className="bi bi-file-plus-fill col-12" data-bs-toggle="modal" data-bs-target="#createCompany" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                </div>     
                <div className="col-8 col-sm-9 px-3">
                    <input type="text" name="query" placeholder="Search Folders" className='col-12' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                </div>                
                <div className="col-3 col-sm-2">
                        <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                    {/* <i className="bi bi-file-plus-fill" data-bs-toggle="modal" data-bs-target="#basicModal" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i> */}
                </div>
            </div>

            <section className="section dashboard container mb-5">
                <div className="container pb-3 table-responsive" style={{backgroundColor: 'white', paddingLeft: '15px', paddingRight: '15px' }}>
                    <table className="table datatable table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"></th>
                                <th scope="col" style={{width:'200px'}}>Name</th>
                                <th scope="col" style={{width:'200px'}}>Branch Manager</th>
                                <th scope="col" style={{width: '30px'}}>Department</th>
                                <th scope="col" style={{width:'60px'}}>Staffs</th>
                                <th scope="col">About</th>
                                <th scope="col"><i className="bi bi-plus" style={{marginRight: '10px'}}></i></th>
                            </tr>
                            </thead>
                            <tbody>
                                    {
                                        company.companiesWith.map((comp: any, index: number) => {
                                            return <tr>
                                                        <td scope="row">{comp.id}</td>
                                                        <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                                        <td>{comp.text}</td>
                                                        <td>{comp.branchManager}</td>
                                                        <td>{comp.department}</td>
                                                        <td>{comp.staff}</td>
                                                        <td>{comp.about}</td>
                                                        <td>
                                                            <div className="card info-card revenue-card flex" style={{marginTop: '-5px'}}>
                                                                <div className="filter">
                                                                    <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                                        {
                                                                            company.flyOut.map((out: any, index:number) => {
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

                    <Pagination/>
                </div>
            </section>

            <CreateCompany />   

            <EditCompany />

            <DisableCompnay />

  </main>
    </>
  );
}
