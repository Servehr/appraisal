import React from 'react'
import { Image } from '../../controls/index'
import './pictures.css';

type Properties = 
{
    radius: 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow' | 'img-circle' | 'rounded-circle'
    padding: number
    width?: number
    height?: number
    ml?: number
    bg?: string
    image: string
    fullname?: string
    profession?: string
    css?: React.ReactNode
    children?: React.ReactNode
}

export const PictureCard = ({radius, padding, width=180, height=180, bg, fullname, profession, image, children, ml}: Properties) => 
{
    return (
        <div style={{width: 'max-content', padding: 0.5, marginLeft: ml}}>
            <div className="panel panel-profile">
            <div className="panel-body" style={{ margin: 'auto', alignContent: 'center' }}>   
                <Image id='img' src={image} alt='user-image' height={height} width={width} padding={padding} css='rounded-circle'/>       
                {children}
            </div>
            </div>
        </div>
    )
}