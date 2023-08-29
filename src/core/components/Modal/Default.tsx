import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen'
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
    centralize: boolean
}

export const Order = ({color='', text, size='md', state='', title, heading, centralize=false}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`  
    const center: string = centralize ? `modal-dialog-centered` : ''
    const width: string = `modal-dialog-${size}`
    const style: string = `modal-dialog ${width} ${center}`

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                {title}
            </button>
            <div className="modal fade" id="basicModal" tabIndex={-1}>
                <div className={style}>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{heading}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      {text}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
            </div>
        </>       
    );
}
