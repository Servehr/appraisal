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

export const Toogle = ({color='primary', labelText, title, size='md', label=false}: Properties)  =>
{
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{labelText}</label>
        </div>
        
    );
}
