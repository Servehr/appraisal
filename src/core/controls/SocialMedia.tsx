import React from 'react'
import { Typography } from './Typography'

type Properties = 
{
    url: string
    media?: string
    margin?: number
    alt: boolean
}

export const SocialMedia = ({ url, media, margin=0, alt }: Properties) => 
{
    const social: string = `ti ti-${media}`
    const clax: string = (alt === true) ? `btn btn-social btn-${media}-alt` : `btn btn-social btn-${media}`

    return (
        <a href={url} className={clax} style={{margin: margin+'px'}}>
            <i className={social}></i>
        </a>
    )
}