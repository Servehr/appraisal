import React from 'react'
import { Anchor } from '../../controls';

export type size = 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'warning' | 'error' | 'danger';
export type radius = 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow' | 'img-circle'


export type Parameters = {
    css?: string;
    padding?: number;
    bg?: string;
    width?: number;
    height?: number;
    radius?: radius
    listType: string
    items: string[]
};

export const ListAnchor = ({css, padding=0, bg, width=0, height=0, radius, listType, items}: Parameters) => 
{
    const ul: any = items.map((item, index) => 
    {      
        const url: string = `www.${item}.com`
        return <li id={item+index} key={index} style={{listStyle: listType}}>
                    <Anchor id={item + index} text={item} url={url} />
                </li>
    })
    return (
        <ul>
            {ul}
        </ul>
    )
}