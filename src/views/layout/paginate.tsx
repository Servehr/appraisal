import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Pagination = () => 
{
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [error, setIsError] = useState(false)

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (
    <>
        <div className="row mb-1 p-3"> 
            <div className="col-2 col-sm-4"></div>     
            <div className="col-6 col-sm-4 px-3">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={1} aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>                
            <div className="col-4 col-sm-4"></div>
        </div>
    </>
  );
}