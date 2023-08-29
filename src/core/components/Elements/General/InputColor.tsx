import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'disabled'
export type type = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' 


type Properties = 
{
    color: colors
    text: string
    size: string
    title: string
    label: boolean
    labelText: string
    type: type
    htmlFor: string
}

export const InputColor = ({color='primary', labelText, title, size='md', label=false, type, htmlFor=''}: Properties)  =>
{
    return (
        <>
            { label ?? <label htmlFor={htmlFor} className="col-12 col-form-label">{labelText}</label>}
            <div className="col-12">
                <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color"></input>
            </div>
        </>
        
    );
}
