import React from 'react';
import './alert.css';

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

export const Default = ({color='', text, size='md', state='', title, removeBorder=false}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`   
    const remove: string = removeBorder ?  'list-group' : ''

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <ul className="list-group">
                <li className="list-group-item">{text}</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>

            </div>
        </div>        
    );
}
