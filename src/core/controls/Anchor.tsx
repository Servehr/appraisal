import React from 'react'

export type size = 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'warning' | 'error' | 'danger';
export type radius = 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow' | 'img-circle'

export type Parameters = {
    css?: string;
    id: string;
    padding?: number;
    bg?: string;
    width?: number;
    height?: number;
    radius?: radius
    url?: string
    text: string
    disabled?: boolean
};

export const Anchor = ({css, id, padding=0, bg, width=0, height=0, radius, url, text, disabled=true}: Parameters) => 
{
    return (
        <a aria-disabled={disabled} href={url} className={css} id={id} style={{borderRadius: radius, padding: padding, backgroundColor: bg, width: width, height: height}}>
            {text}
        </a>
    )
}