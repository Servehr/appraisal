import React from 'react';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'disabled'


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

export const ButtonGroup = ({msg, color='primary', text, position, hasHomeIcon, rounded=false, outLineColor='', size='md', state=''}: Properties)  =>
{
    const css: string = `btn btn-${color} btn-outline-primary-${color} btn-${size} ${state}`   

    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className={css}>{text}</button>
            </div>
        </>
        
    );
}
