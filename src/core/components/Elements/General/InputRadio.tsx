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

export const InputRadio = ({color='primary', labelText, title, size='md', label=false, type, htmlFor=''}: Properties)  =>
{
    return (
        <>
            { label ?? <label htmlFor={htmlFor} className="col-12 col-form-label">{labelText}</label>}
            <div className="col-12">
                <input type="radio" className="form-check-input" name="gridRadios" id="gridRadios1" value="option1" checked/>
            </div>
        </>
        
    );
}
