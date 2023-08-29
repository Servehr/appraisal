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
}

export const Default = ({color='', text, size='md', state='', title}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`  

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">Default</h5>

              <div className="progress">
                {/* <div className="progress-bar" role="progressbar" style={{ width: "25%", ariaValueNow={25}  }}></div> */}
              </div>

            </div>
          </div>       
    );
}
