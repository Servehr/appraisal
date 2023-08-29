import React from 'react';
import './alert.css';

export type colors =  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'start' | 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'active' | 'disabled'
export type which = 'grow' | 'spin'


type Properties = 
{
    size: size
    color: colors
    which: which
    position: position
}

export const LoaderSpinner = ({color='primary', size='md', which='spin', position='center'}: Properties)  =>
{
    const pst: string = `d-flex justify-content-${position}`  
    const spinner: string = `spinner-border spinner-border-${size} text-${color}`
    const grow: string = `spinner-grow spinner-grow-${size} text-${color}`

    return (
        <div className={pst}>
            {
                which === 'spin' ?? <span className={spinner} role="status" aria-hidden="true"></span> 
            }
            {
                which === 'grow' ?? <span className={grow} role="status" aria-hidden="true"></span>
            }
        </div>      
    );
}
