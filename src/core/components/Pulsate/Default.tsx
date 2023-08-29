import React from 'react';
import './alert.css';

export type colors =  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'top' | 'right' | 'bottom' | 'left'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'active' | 'disabled'


type Properties = 
{
    position: position
    color: colors
    text: string
    size: string
    title: string
    placement: string
    no: number
    sales: string
}

export const Default = ({color='primary', text, size='md', placement='start', title, position, sales, no=4}: Properties)  =>
{
    const col: string = `"col-xxl-4 col-md-${no}"`  
    // const where: string = `text-${placement}`
    // const btn: string = `btn btn-${color}`

    return (
        <div className={col}>
            <div className="card info-card sales-card">

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
                <h5 className="card-title">Sales <span>| Today</span></h5>

                <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-cart"></i>
                </div>
                <div className="ps-3">
                    <h6>{sales}</h6>
                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
                </div>
            </div>

            </div>
        </div>    
    );
}
