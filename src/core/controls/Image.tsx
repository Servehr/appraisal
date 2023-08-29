import React from 'react'

export type size = 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'warning' | 'error' | 'danger';
export type radius = 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow' | 'img-circle'

export type Parameters = {
    src: string;
    alt: string;
    css?: string;
    id: string;
    padding?: number;
    bg?: string;
    width?: number;
    height?: number;
    radius?: radius
};

export const Image = ({src, alt, css, id, padding=0, bg, width=0, height=0, radius}: Parameters) => 
{
    return (
        <img src={src} alt={alt} className={css} id={id} style={{objectFit: 'cover', borderRadius: radius, padding: padding, backgroundColor: bg, width: width, height: height, margin: 'auto'}}/>
    )
}