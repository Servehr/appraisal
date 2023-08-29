import React from 'react'
import female from './images/female.jpg'

export type color = 'warning' | 'sucess' | 'danger' | 'info' | 'teal' | 'lime' | 'brown' | 'blue' | 'purple' | 'primary' | 'indigo' | 'green';

export type Parameters = {
    color?: string
    icon: string
    heading: string
    figure: number
    percent?: number
    text: string
    col?: string
    count: number 
    percentage: number
};

export const TopSelling = ({color, icon, heading, figure, percent, col, count, percentage}: Parameters) => 
{
    const bg: string = `info-tile info-tile-alt tile-${color}`
    const graphic: string = `ti ti-${icon}`

    return (
          <div className="row">
            <div className="col p-2">
                <div className="card top-selling overflow-auto">

                    <div className="filter">
                    <a className="icon" href="#/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                        </li>

                        <li><a className="dropdown-item" href="#/">Current Month</a></li>
                        <li><a className="dropdown-item" href="#/">Last Month</a></li>
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
                        <tr>
                            <th scope="row"><img src={female} alt="Profile" className="rounded-circle" width={30} height={30}/></th>
                            <td><a href="#/" className="text-primary fw-normal">Rita Nnwosu</a></td>
                            <td>Marketing</td>
                        </tr>
                        <tr>
                        <th scope="row"><img src={female} alt="Profile" className="rounded-circle" width={30} height={30}/></th>
                            <td><a href="#/" className="text-primary fw-normal">Emmanuel Chris</a></td>
                            <td>Fianance</td>
                        </tr>
                        <tr>
                        <th scope="row"><img src={female} alt="Profile" className="rounded-circle" width={30} height={30}/></th>
                            <td><a href="#/" className="text-primary fw-normal">Badmus Elohy</a></td>
                            <td>Production</td>
                        </tr>
                        <tr>
                        <th scope="row"><img src={female} alt="Profile" className="rounded-circle" width={30} height={30}/></th>
                            <td><a href="#/" className="text-primary fw-normal">Maltida Rufus</a></td>
                            <td>Recruitment</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                </div>
            </div>
            <div className="col p-2">
                <div className="card">
                    <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                    </div>

                <div className="card-body">
                <h5 className="card-title" style={{fontSize: '18px', marginTop: '5px'}}>Recent Activity</h5>

                <div className="activity">
                    <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                        <div className="activity-content">
                            Rufus created a questions
                        </div>
                    </div>
                    <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                        <div className="activity-content">
                            Marcus answered submitted his questionaire
                        </div>
                    </div>
                    <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                        <div className="activity-content">
                            Ruth requested for leave
                        </div>
                    </div>
                    <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                        <div className="activity-content">
                            Badmus self-appraised himself
                        </div>
                    </div>
                    <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                        <div className="activity-content">
                            Tijani Submitted a report
                        </div>
                    </div>
                    <div className='p-3'></div>
                </div>
                </div>
                </div>
            </div>
          </div>
    )
}