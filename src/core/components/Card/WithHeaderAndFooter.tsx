import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'disabled'


type Properties = 
{
    color: colors
    text: string
    size: string
    title: string
    headerText: string 
    footerText: string
}

export const WithHeaderAndFooter = ({color='primary', text, title, size='md', headerText='', footerText=''}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size}`   

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {headerText}
                </div>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                    {text}
                </div>
                <div className="card-footer">
                    {footerText}
                </div>
          </div>
        </>
        
    );
}
