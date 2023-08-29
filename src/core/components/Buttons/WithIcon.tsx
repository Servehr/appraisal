import React from 'react';
export type colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

type Properties = 
{
    msg: string
    color: colors
    text: string
    position: string
    hasHomeIcon: boolean
    rounded: boolean
    icon: string
}

export const WithIcon = ({msg, color, text, position, hasHomeIcon, rounded=false, icon}: Properties)  =>
{
    const css: string = `btn btn-${color}`
    const bIcon: string = `bi bi-${position} me-1`

    return (
        <>
            <button type="button" className={css}>
                <i className={icon}>{text}</i> 
                {text}
            </button>
        </>
        
    );
}