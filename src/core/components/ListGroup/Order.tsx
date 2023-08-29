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
}

export const Order = ({color='', text, size='md', state='', title}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`  

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Cras justo odio</li>
              </ol>

            </div>
        </div>        
    );
}
