import React from 'react';
import './alert.css';

export type colors =  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'top' | 'right' | 'bottom' | 'left'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'active' | 'disabled'


type Properties = 
{
    position: position
    color: colors
    text: string
    size: string
    title: string
    placement: string
}

export const Default = ({color='primary', text, size='md', placement='start', title, position}: Properties)  =>
{
    const css: string = `d-flex justify-content-${position}`  
    const where: string = `text-${placement}`
    const btn: string = `btn btn-${color}`

    return (
            <button type="button" className={btn} data-bs-toggle="tooltip" data-bs-placement={position} title={title}>
               {text}
            </button>     
    );
}
