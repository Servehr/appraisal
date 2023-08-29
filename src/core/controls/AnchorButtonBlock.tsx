import React from 'react'

export type size = 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'warning' | 'error' | 'danger';
export type radius = 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow' | 'img-circle'

export type Parameters = {
    css?: string;
    id: string;
    radius?: radius
    url?: string
    text: string
    type: string
};

export const AnchorButtonBlock = ({css, id, url, text, type}: Parameters) => 
{
    const clax: string = `btn btn-${type} btn-lg btn-block`
    return (
        <a href={url} className={clax} id={id}>
            {text}
        </a>
    )
}