import React from 'react';
import './alert.css';

export type colors =  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'active' | 'disabled'


type Properties = 
{
    msg: string
    color: colors
    text: string
    size: string
    position: string
    title: string
}

export const Default = ({color='primary', text, size='md', position='start', title}: Properties)  =>
{
    const css: string = `d-flex justify-content-${position}`  
    const colorr: string = `text-${color}`

    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>      
    );
}
