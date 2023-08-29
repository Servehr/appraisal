import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = '' | 'end' | 'center'
export type size = '' | 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'active' | 'disabled'


type Properties = 
{
    msg: string
    color: colors
    text: string
    size: string
    state: string
    title: string
    removeBorder: boolean
    heading: string
    position: string
}

export const Default = ({color='', text, size='', state='', title, removeBorder=false, heading, position}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`   
    const remove: string = removeBorder ?  'list-group' : ''
    const positioning: string = `justify-content-${position} ${size}`

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{heading}</h5>

              <nav aria-label="Page navigation example">
                <ul className={positioning}>
                    <li className="page-item">
                        <a className="page-link" href="#">
                        {/* <span aria-hidden="true">&laquo;</span> */}
                            Previous
                        </a>
                    </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">                            
                    <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                     Next</a>                    
                    </li>
                </ul>
              </nav>

            </div>
          </div>       
    );
}
