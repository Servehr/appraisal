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


export const Question = () =>
{
  const [name, setName] = useState<string>("")

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
                                <li className="breadcrumb-item"><a href="#/answers">Appraisal</a></li>
                                <li className="breadcrumb-item active">Question</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3 mb-3"> 
                <div className='col-12 col-sm-9' style={{backgroundColor: 'white', padding: '10px 20px', marginBottom: '20px'}}>
                {/* #b1dfdf */}
                    <div className="row mb-4 pt-4 pb-3" style={{paddingRight: '8px', paddingLeft: '10px', backgroundColor: 'white' }}>
                        <div className="col-6 col-md-5 md-offset-1">
                            <h6 style={{fontWeight: 'bold'}}>Total Questions: 10</h6>
                        </div>            
                        <div className="col-2 col-md-1 md-offset-2">
                            <h6 style={{fontWeight: 'bold'}}>1/10</h6>                            
                        </div>             
                        <div className="col-1 offset-2 col-md-1 md-offset-2">
                            <h6 style={{fontWeight: 'bold'}}>1/10</h6>                            
                        </div> 
                    </div>

                    <section className="section dashboard">
                        <div className="p-3">
                            <div className="row px-2 pb-4">
                                <div className="col-sm-12 form-group">
                                    <h5 style={{lineHeight: '35px'}}>
                                        {
                                            question.number.map((q, index) => {
                                                return <><span style={{marginRight:'20px', fontSize: '16px'}}>{q.id}.</span><span style={{fontSize: '16px'}}>{q.text}</span><br/></>
                                            })
                                        }
                                    </h5>
                                </div>
                            </div> 
                            <div className="row px-2 pt-4 pb-4">
                                <div className="col-sm-12 form-group">
                                    <SelectOption defaultValue={[{ id: -1, text: "Select Rating" }]} options={rating.score} fieldType={'role'} />
                                </div>
                            </div>                            
                        </div>
                    </section> 

                    <Pagination />

                </div>
                <div className='col-12 col-sm-3'>
                    <div className='col-112 offset-1'>
                                        
                        <div className="card info-card revenue-card flex px-3">
                            <div className='row px-3 pt-3'>
                                <div className='col-3'>By:</div>
                                <div className='col-9'>Mr Olawale Ibukunlola</div>
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
    </>
  );
}
