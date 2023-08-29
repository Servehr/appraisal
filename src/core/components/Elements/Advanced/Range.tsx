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

export const Range = ({color='primary', labelText, title, size='md', label=false}: Properties)  =>
{
    return (
        <div>
            <label htmlFor="customRange1" className="form-label">Example range</label>
            {/* <input type="range" className="form-range" id="customRange1"/> */}
            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange2"></input>
        </div>
        
    );
}
