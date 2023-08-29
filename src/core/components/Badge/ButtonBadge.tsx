import React from 'react';
import './alert.css';

export type colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

type PillProperties = 
{
    msg: string
    color: colors
    text: string
    hasBorder: boolean
    borderColor: string
    badgeCount: number
    borderWidth: number
    textColor: string
}

export const ButtonBadge = ({msg, color, borderColor, text='', hasBorder=false, badgeCount=0, textColor='primary', borderWidth=0}: PillProperties)  =>
{
    const css: string =  hasBorder ? `btn btn-${color} mb-2 border-${borderColor} border-${borderWidth} text-${textColor}` : `btn btn-${color} mb-2`

    return (
        <button type="button" className={css}>
            {text} <span className="badge bg-white text-primary">{badgeCount}</span>
        </button>
    );
}

