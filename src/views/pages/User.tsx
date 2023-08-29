import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSlashSquare } from "react-icons/bs";
import { Header } from '../layout/header';
import { PictureCard } from '../../core/components/Pictures';
import female from '../passports/female.jpg'
import { CreateUser } from './Modal/user/CreateUser';
import { Pagination } from '../layout/paginate';
import userTable from '../../service/data/users.json'
import { EditUser } from './Modal/user/EditUser';
import { DisableUser } from './Modal/user/DisableUser';
import { AssignRoleToUser } from './Modal/user/AssignRoleToUser';
import { ReAssign } from './Modal/user/ReAssign';
import { ChangeUserPermission } from './Modal/user/ChangeUserPermission';
import { ChangeUserDepartment } from './Modal/user/ChangeUserDepartment';
import { ButtonDefault } from '../../core/components';


export const User = () =>
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
                    <h5>Users</h5>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4 flex">
                    <div className="pagetitle float-end">
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">User</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row mb-1 p-3"> 
                <div className="col-1 col-sm-1">
                    <i className="bi bi-file-plus-fill col-12" data-bs-toggle="modal" data-bs-target="#createUser" style={{fontSize: '34px', marginTop: '1px', cursor: 'pointer', float: 'right'}}></i>
                </div>     
                <div className="col-8 col-sm-9 px-3">
                    <input type="text" name="query" placeholder="Search Folders" className='col-12' title="Enter search keyword" height='50' style={{paddingLeft: '10px'}}/>
                </div>                
                <div className="col-3 col-sm-2">
                    <button type='submit' className='btn btn-primary col-sm-12' style={{height: '47px'}}>Search</button>
                    {/* <ButtonDefault msg={'Disable'} color={'primary'} text={'Search'} position={''} size={''} state={''} dismiss={false} /> */}
                </div>
            </div>

            <section className="section dashboard container">
                <div className="table-responsive">
                    <table className="table datatable table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"></th>
                                <th scope="col">Firstname</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Department</th>
                                <th scope="col">Roles</th>
                                <th scope="col">Departments</th>
                                <th scope="col"><i className="bi bi-plus" style={{marginLeft: '45px'}}></i></th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    userTable.allUser.map((user: any, index: number) => {
                                        return <tr>
                                                    <td scope="row">{user.id}</td>
                                                    <td><PictureCard width={25} height={25} radius={'circle'} padding={0} image={female}></PictureCard></td>
                                                    <td>{user.firstname}</td>
                                                    <td>{user.surname}</td>
                                                    <td>{user.company}</td>
                                                    <td>{user.department}</td>
                                                    <td>{user.roles}</td>
                                                    <td>
                                                        <div className="card info-card revenue-card flex" style={{marginTop: '-5px'}}>
                                                            <div className="filter">
                                                                <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots-vertical" style={{fontSize: '20px'}}></i></a>
                                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                                    {
                                                                        userTable.flyOut.map((out: any, index:number) => {
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
            </section>

            <Pagination/>

            <CreateUser/>   

            <EditUser />

            <DisableUser />

            <ChangeUserPermission />

            <ChangeUserDepartment />

            <ReAssign />

            <AssignRoleToUser />

  </main>
    </>
  );
}
