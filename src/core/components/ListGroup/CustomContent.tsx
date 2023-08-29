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
    badgeCount: number
}

export const CustomContent = ({color='', text, size='md', heading, badgeCount, subHeading}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size}`

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{heading}</h5>

          <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{subHeading}</div>
                    {text}
                </div>
                <span className="badge bg-primary rounded-pill">{badgeCount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>

        </div>
      </div>        
    );
}
