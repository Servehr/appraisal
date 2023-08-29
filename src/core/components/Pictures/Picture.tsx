import React from 'react'
import './pictures.css';

type Properties = 
{
    radius: 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow'
    padding: number
    width?: number
    height?: number
    bg?: string
    children?: React.ReactNode;
}

export const Picture = ({radius, padding, children, width, height, bg}: Properties) => 
{
    return (
        <div className={radius} style={{padding: padding, backgroundColor: bg, width: width, height: height}}>
            {children}
        </div>
    )
}