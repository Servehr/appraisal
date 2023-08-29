import React from 'react'
import { List } from './List';

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
    items: string[]
    text: string
};

export const ButtonDropDown = ({css, id, url, icon, items, text}: Parameters) => 
{
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                {text} <span className="caret"></span>
            </button>
            <List listType='none' items={items}/>
        </div>
    )
}