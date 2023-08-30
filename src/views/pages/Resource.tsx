import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { Pagination } from '../layout/paginate';
import resources from '../../service/data/resources.json'
import { CreateResource } from './Modal/resource/createResource';
import { DeleteResource } from './Modal/resource/DeleteResource';
import { EditResource } from './Modal/resource/EditResource';


export const Resource = () =>
{
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setIsError] = useState(true)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  const callMe = (e: any) => 
  {
     e.preventdefault();
     alert('Great')
     return false;
  }

  return (
    <>
        <Header/>
        <main id="main" className="main">

            <div className="row" style={{paddingRight: '8px', paddingLeft: '8px'}}>
                <div className="col-sm-4">
                    <h5>Resources</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Resources</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3 mb-3"> 
                <div className="col-1 col-sm-1">
                    <i className="bi bi-file-plus-fill col-12" data-bs-toggle="modal" data-bs-target="#createResource" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                </div>     
                <div className="col-8 col-sm-9 px-3">
                    <input type="text" name="query" placeholder="Search Folders" className='col-12' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                </div>                
                <div className="col-3 col-sm-2">
                        <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                </div>
            </div>

            <section className="section dashboard container">
                <div className="container">
                    <div className="row">

                        {
                            resources.resource.map((rsur: any, index: number) => {
                                let clax:string = `bi bi-${rsur.icon} col-md-1 float-end`
                                return <div className="col-6 col-md-3" style={{paddingRight: '8px', paddingLeft: '8px', position: 'relative'}} key={index}>
                                            <a href='#/files' className='col-12'>
                                                <div className="card info-card revenue-card flex">
                                                    <div className="card-body">
                                                        <h4 className="card-title" style={{marginBottom:'5px', fontSize: '14px'}}>{rsur.text}</h4>                
                                                        <div className="d-flex justify-content-between">
                                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                                <i className="bi bi-folder2-open" style={{fontSize: '22px'}}></i>
                                                            </div>
                                                            <div className="ps-3 mt-3">
                                                                <div className='col-12' style={{fontSize: '27px'}}>{rsur.files}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className='col-12'> 
                                                {
                                                    resources.flyOut.map((action, index) => {
                                                            let clax:string = `bi bi-${action.icon} col-md-1 float-end`
                                                            return <i className={clax} data-bs-toggle="modal" data-bs-target={action.target} style={{fontSize: '15px', cursor: 'pointer', 'marginLeft': '12px'}}></i>
                                                        })
                                                }
                                            </div>
                                        </div>
                            })
                        }

                    </div>
                </div>
            </section>

            <Pagination />

            <CreateResource />

            <DeleteResource />

            <EditResource />

        </main>
    </>
  );
}
