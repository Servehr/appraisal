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
    color: string
};

export const AnchorLineButton = ({css, id, url, text, color}: Parameters) => 
{
    const clax: string = `btn btn-${css}-alt`
    return (
        <>  
            <a href={url} className={clax} id={id} style={{borderColor: color, color: color}}>
                {text}
            </a>
        </>
    )
}