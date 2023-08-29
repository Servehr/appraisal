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
    heading: string 
    subHeading: string
    when: Date
    footer: string
}

export const Content = ({color='', text, size='md', heading, when, footer, subHeading}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size}`

    return (
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{heading}</h5>

            <div className="list-group">
                 <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{subHeading}</h5>
                    <small>{when.getDate()}</small>
                  </div>
                  <p className="mb-1">{text}</p>
                  <small>{footer}</small>
                </a>
              </div>

            </div>
          </div>        
    );
}
