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
    hasHomeIcon: boolean
    rounded: boolean
    withIcon: boolean
    outLineColor: colors
    size: string
    state: string
}

export const ButtonDefault = ({msg, color='primary', text, position, hasHomeIcon, rounded=false, outLineColor='', size='md', state=''}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`
    const positioning: string = rounded ? `d-flex justify-content-${position} rounded-pill` : `d-flex justify-content-${position}`    

    return (
        <>
            <button type="button" className={css}>Primary</button>
        </>
        
    );
}
