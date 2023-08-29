import React from 'react';
import './alert.css';

export type colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

type PillProperties = 
{
    msg: string
    color: colors
    text: string
}

export const Pill = ({msg, color, text}: PillProperties)  =>
{
    const css: string = `badge rounded-pill bg-${color}`

    return (
        <span className={css}><i className="bi bi-star me-1"></i>{text}</span>
    );
}