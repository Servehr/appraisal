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
    heading: string
}

export const Default = ({color='', text, size='md', state='', title, removeBorder=false, heading}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`   
    const remove: string = removeBorder ?  'list-group' : ''

    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{heading}</h5>

            <ul className={remove}>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                  {text}
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Second checkbox
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Third checkbox
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Fourth checkbox
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                Fifth checkbox
              </li>
            </ul>

          </div>
        </div>       
    );
}
