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

export const TextArea = ({color='primary', labelText, title, size='md', label=false}: Properties)  =>
{
    return (
        <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '100px'}}></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
        </div>
        
    );
}
