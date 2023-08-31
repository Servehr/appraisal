import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { PictureCard } from '../../core/components/Pictures';
import female from '../passports/female.jpg'
import { Pagination } from '../layout/paginate';
import { CreateFiles } from './Modal/files/CreateFiles';
import resources from '../../service/data/resources.json'
import { EditFiles } from './Modal/files/EditFiles';
import { DeleteFiles } from './Modal/files/DeleteFiles';

export const Files = () => 
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
                    <h5>Files</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href='#/questionaire'>Questionaires</a></li>
                                <li className="breadcrumb-item active"><a href='#/files'>Files</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3 mb-3"> 
                <div className="col-1 col-sm-1">
                    <i className="bi bi-file-plus-fill col-12" data-bs-toggle="modal" data-bs-target="#createFile" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                </div>     
                <div className="col-8 col-sm-9 px-3">
                    <input type="text" name="query" placeholder="Search Folders" className='col-12' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                </div>                
                <div className="col-3 col-sm-2">
                    <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                </div>
            </div>

            <section className="section dashboard container">
                <div className="card p-3 table-responsive">
                    <table className="table datatable table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Uploaded By</th>
                                <th scope="col">Author</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                resources.document.map((file: any, index: number) =>  {
                                    
                                    return <tr>
                                                <td scope="row">{file.id}</td>
                                                <td>{file.fileName}</td>
                                                <td>{file.uploadedBy}</td>
                                                <td>{file.pages}</td>
                                                <td>
                                                    <i className='bi bi-download' onClick={() => alert("Download Begins")} style={{fontSize: '15px', cursor: 'pointer', 'marginLeft': '12px'}}></i>
                                                </td>
                                                <td>
                                                    {
                                                        resources.link.map((action, index) => {
                                                            let clax:string = `bi bi-${action.icon} col-md-1 float-end`
                                                            return <i className={clax} data-bs-toggle="modal" data-bs-target={action.target} style={{fontSize: '15px', cursor: 'pointer', 'marginLeft': '25px' }}></i>
                                                        })
                                                    }
                                                </td>
                                                <td></td>
                                            </tr>
                                })
                            }

                            </tbody>
                    </table>
                </div>
            </section>

            <Pagination />

            <CreateFiles />

            <EditFiles />

            <DeleteFiles />

  </main>
    </>
  );
}
