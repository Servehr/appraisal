import React from 'react'
import { Typography } from './Typography'

export type media = 'facebook' | 'twitter' | 'github' | 'flickr' | 'jsfiddle' | 'reddit' | 'youtube' | 'google' | 'apple' | 'soundcloud' | 'wordpress' | 'skype' | 'android' | 'linkedin' | 'google' | 'instagram' | 'microsoft'

type Properties = 
{
    url: string
    media: media
    padding?: string
    bg?: string
    margin?: number
    text: string
}

export const SocialMediaFull = ({ url, media, padding, bg, margin=0, text }: Properties) => 
{
    const social: string = `ti ti-${media}`
    const clax: string = `btn btn-label btn-social btn-${media}`

    return (
        <a href={url} className={clax} style={{margin: margin+'px'}}>
            <i className={social}></i>{text}
        </a>
    )
}