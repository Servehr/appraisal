import React from 'react';
import './alert.css';

export type colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'end' | 'center'


type Properties = 
{
    msg: string
    color: colors
    text: string
    position: string
    hasHomeIcon: boolean
}

export const Default = ({msg, color, text, position, hasHomeIcon}: Properties)  =>
{
    const css: string = `badge rounded-pill bg-${color}`
    const positioning: string =  `d-flex justify-content-${position}`

    return (
        <>
            {
                hasHomeIcon ?   
                <nav className={positioning}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="bi bi-house-door"></i></a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Default</li>
                    </ol>
                </nav> 
                : 
                <nav className={positioning}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Default</li>
                    </ol>
                </nav>
            }
        </>
        
    );
}