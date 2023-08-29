import React from 'react'

export type icon = 'cloud' | 'alert' | 'check' | 'settings' | 'alt' | 'close' | 'panel';
export type size = 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'warning' | 'error' | 'danger';
export type radius = 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow' | 'img-circle'

export type Parameters = {
    css?: string;
    id: string;
    radius?: radius
    url?: string
    icon: icon
};

export const AnchorIcon = ({css, id, url, icon}: Parameters) => 
{
    const clax: string = `btn btn-${css}`
    const haiy: string = `ti ti-${icon}`

    return (
        <a href={url} className={clax} id={id}>
            <i className={haiy}></i>
        </a>
    )
}