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
    outline: boolean
    type?: string
};

export const ButtonDropDownIcon = ({css, id, url, icon, items, outline, type='midnightblue'}: Parameters) => 
{
    const clax: string = `ti ti-${icon}`
    const group: string = (outline === true) ? `btn btn-${type}-alt dropdown-toggle` : `btn btn-${type} dropdown-toggle`

    return (
        <div className="btn-group">
            <button type="button" className={group} data-toggle="dropdown">
                <i className={clax}></i> <span className="caret"></span>
            </button>
            <List listType='none' items={items}/>
        </div>
    )
}