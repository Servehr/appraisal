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
    label: boolean
    labelText: string
}

export const InputFile = ({color='primary', labelText, title, size='md', label=false}: Properties)  =>
{
    return (
        <>
            { label ?? <label htmlFor="inputText" className="col-12 col-form-label">{labelText}</label>}
            <div className="col-12">
                <input type="text" className="form-control"/>
            </div>
        </>
        
    );
}
