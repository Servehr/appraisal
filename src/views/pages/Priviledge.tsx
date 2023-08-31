import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { Pagination } from '../layout/paginate';
import { CreatePrivilege } from './Modal/privilege/CreatePrivilege';
import { EditPrivilege } from './Modal/privilege/EditPrivilege';
import { DeletePrivilege } from './Modal/privilege/DeletePrivilege';
import { AssignPermissionToPrivilege } from './Modal/privilege/AssignPermissionToPrivilege';
import privilege from '../../service/data/privilege.json'


export const Privilege = () => 
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
                    <h5>Privilege</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        {/* <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Privilege</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </div>

            <div className="row mb-5" style={{paddingRight: '8px', paddingLeft: '10px'}}>
                <div className="col-2">
                    <div className="col">
                        <i className="bi bi-file-plus-fill float-start" data-bs-toggle="modal" data-bs-target="#createPrivilege" style={{fontSize: '34px', color: '#444444', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                        <i className="bi bi-file-plus-fill float-start" data-bs-toggle="modal" data-bs-target="#assignPermissionToPrivilege" style={{fontSize: '34px', color: '#7f7c7c', marginTop: '1px', cursor: 'pointer', float: 'left'}}></i>
                    </div>
                </div>            
                <div className="col-8 px-3">
                    <input type="text" name="query" placeholder="Search Privileges" className='col-12 pull-right' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                </div>              
                <div className="col-2 col-sm-2">
                        <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                </div>
            </div>

            <section className="section dashboard container">
                <div className="container">

                    <div className="row gx-1">

                            {
                                privilege.right.map((role: any, index: number) => {
                                    return <div className="col-3 text-center" style={{padding: '8px'}}>
                                            <div className="card info-card revenue-card flex">
                                                <div className="card-body mt-2">
                                                    <div className="col-md-12 p-1 text-center">
                                                        <span className="card-title col-md-10" style={{fontSize: '14px', marginTop: '2px'}}>{role.text}</span>
                                                        {
                                                            privilege.flyOut.map((action, index) => {
                                                                let clax:string = `bi bi-${action.icon} col-md-1 float-end`
                                                                return <i className={clax} data-bs-toggle="modal" data-bs-target={action.target} style={{fontSize: '15px', cursor: 'pointer', 'marginLeft': '12px'}}></i>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                })
                            }
                            
                    </div>

                </div>
            </section>

            <Pagination />

            <AssignPermissionToPrivilege />
            
            <CreatePrivilege />

            <EditPrivilege />

            <DeletePrivilege />

  </main>
    </>
  );
}
