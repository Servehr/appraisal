import React from 'react'
import { Arrays } from './Array';


type Properties = 
{
    fullname: string
    department: string;
    pics: string;
}[]

type Performer = {
    Performers: Properties
    width: number
    height: number
}

export const Performer = ({Performers, width=30, height=30}: Performer) => 
{
    return (
        <div className="card top-selling overflow-auto">
            <div className="filter">
                <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                    </li>
                </ul>
            </div>

            <div className="card-body pb-0">
                <h5 className="card-title" style={{fontSize: '18px', marginTop: '5px'}}>Top Performer</h5>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fullname</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            Performers.map((top, index) => <Arrays fullname={top.fullname} department={top.department} pics={top.pics} width={width} height={height} /> ) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
