import React from 'react'

type Properties = 
{
    radius: number
    padding: number
    plus?: number
    badge: 'default' | 'primary' | 'success' | 'info' |  'secondary' | 'warning' | 'danger'
    children: React.ReactNode;
}

export const Badge = ({radius, padding, children, badge, plus=0}: Properties) => 
{
    const clax: string = `badge badge-${badge}`
    const addPadding:  number = padding+plus
    return (
        <span className={clax} style={{width: 'fit-content', paddingTop: padding, paddingBottom: padding, paddingLeft: addPadding, paddingRight: addPadding}}>{children}</span>
    )
}