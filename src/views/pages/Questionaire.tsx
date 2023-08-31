import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { Pagination } from '../layout/paginate';
import questionaire from '../../service/data/questionaire.json'
import { CreateQuestionaire } from './Modal/questionaire/CreateQuestionaire';
import { EditQuestionaire } from './Modal/questionaire/EditQuestionaire';
import { DeleteQuestionaire } from './Modal/questionaire/DeleteResource';


export const Questionaire = () =>
{
    const [folderName, setFolderName] = useState<string>("")
  
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
                      <h5>Questionaire</h5>
                  </div>
                  <div className="col-sm-4">
                  </div>
                  <div className="col-sm-4 flex">
                      <div className="pagetitle float-end">
                          <nav>
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                  <li className="breadcrumb-item active">Questionaire</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
  
              <div className="row mb-1 p-3 mb-3"> 
                  <div className="col-1 col-sm-1">
                      <i className="bi bi-file-plus-fill col-12" data-bs-toggle="modal" data-bs-target="#createQuestionaire" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
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
                    <div className="row mb-4">

                        {
                            questionaire.questions.map((rsur: any, index: number) => {
                                let clax:string = `bi bi-${rsur.icon} col-md-1 float-end`
                                return <div className="col-6 col-md-3 mb-3" style={{paddingRight: '8px', paddingLeft: '8px', position: 'relative'}} key={index}>
                                            <div className='d-flex row'>
                                                
                                            <a href='#/files' className='col-11 mx-2'>
                                                <div className="card info-card revenue-card flex" style={{marginBottom: '0px'}}>
                                                    <div className="card-body">
                                                        <h4 className="card-title" style={{marginBottom:'5px', fontSize: '14px'}}>{rsur.text}</h4>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                                <i className="bi bi-folder2-open" style={{fontSize: '22px'}}></i>
                                                            </div>
                                                            <div className="p-0">
                                                                <div className='col-12' style={{fontSize: '27px', marginTop: '-15px'}}>{rsur.files}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            
                                            <div className='col-11 p-1' style={{bottom: 0, left: 0}}>
                                                            {
                                                                questionaire.flyOut.map((action, index) => {
                                                                    let clax:string = `bi bi-${action.icon} col-md-1 float-end`
                                                                    return <i className={clax} data-bs-toggle="modal" data-bs-target={action.target} style={{fontSize: '15px', cursor: 'pointer', 'marginLeft': '30px'}}></i>
                                                                })
                                                            }
                                                        </div>
                                            </div>
                                        </div>
                            })
                        }

                    </div>
                </div>
              </section>
  
              <Pagination />
  
              <CreateQuestionaire />

              <EditQuestionaire />
  
              <DeleteQuestionaire />
  
          </main>
      </>
    );
}
