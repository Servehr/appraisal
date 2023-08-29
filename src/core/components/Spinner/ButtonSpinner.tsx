import React from 'react';
import './alert.css';

export type colors =  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'active' | 'disabled'
export type which = 'grow' | 'spin'


type Properties = 
{
    size: size
    color: colors
    which: which
}

export const LoaderSpinner = ({color='primary', size='md', which='spin'}: Properties)  =>
{
    const btn: string = `btn btn-`
    const spinner: string = `spinner-border spinner-border-${size}`
    const grow: string = `spinner-grow spinner-grow-${size} text-${color}`

    return (
        <button className={btn} type="button" disabled>
            { which === 'spin' ? <span className={spinner} role="status" aria-hidden="true"></span> : <span className={grow} role="status" aria-hidden="true"></span>}
            <span className="visually-hidden">Loading...</span>
        </button>      
    );
}
