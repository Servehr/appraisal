import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type size = 'sm' | 'md' | 'lg' | 'xl'


type Properties = 
{
    color: colors
    text: string
    title: string
}

export const CardLink = ({text, title, color}: Properties)  =>
{
    const css: string = `btn btn-${color}`   

    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
              <p className="card-text"><a href="#" className={css}>Button</a></p>
              {/* <a href="#" className="card-link">Card link</a> */}
            </div>
          </div>
        
    );
}
