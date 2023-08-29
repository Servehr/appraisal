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

export const WithIcon = ({color='', text, size='md', state='', title, removeBorder=false}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`   
    const remove: string = removeBorder ?  'list-group' : ''

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <ul className="list-group">
                <li className="list-group-item"><i className="bi bi-star me-1 text-success"></i>{text}</li>
                <li className="list-group-item"><i className="bi bi-collection me-1 text-primary"></i> A second item</li>
                <li className="list-group-item"><i className="bi bi-check-circle me-1 text-danger"></i> A third item</li>
                <li className="list-group-item"><i className="bi bi-exclamation-octagon me-1 text-warning"></i> A fourth item</li>
              </ul>

            </div>
        </div>        
    );
}
