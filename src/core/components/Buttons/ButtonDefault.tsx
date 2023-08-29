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
    position: string
    hasHomeIcon?: boolean
    rounded?: boolean
    withIcon?: boolean
    outLineColor?: colors
    size: string
    state: string
    dismiss: boolean
}

export const ButtonDefault = ({msg, color='primary', text, position, hasHomeIcon, rounded=false, outLineColor='', size='md', state='', dismiss}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`
    const positioning: string = rounded ? `d-flex justify-content-${position} rounded-pill` : `d-flex justify-content-${position}`    
    const dismissed: string = dismiss ? 'modal' : ''

    return (
        <>
            <button type="button" className={css} data-bs-dismiss={dismissed} aria-label='Close'>{text}</button>
        </>
        
    );
}