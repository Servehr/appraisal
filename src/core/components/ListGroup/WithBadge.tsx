import React from 'react';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
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
}

export const WithBadge = ({color='', text, size='md', state='', title, removeBorder=false}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`   
    const remove: string = removeBorder ?  'list-group' : ''

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              
              <ul className={remove}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {text}
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  A second list item
                  <span className="badge bg-primary rounded-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  A third list item
                  <span className="badge bg-primary rounded-pill">1</span>
                </li>
              </ul>

            </div>
        </div>        
    );
}
