import React from 'react';
import './alert.css';

export type colors = '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type position = 'left' | 'top' | 'bottom'
export type size = 'sm' | 'md' | 'lg' | 'xl'
export type state = '' | 'disabled'


type Properties = 
{
    color: colors
    text: string
    size: string
    title: string
    headerText: string 
    footerText: string
    no: number 
    image: string
    imagePosition: string
}

export const CardImage = ({image, no=4, text, title, size='md', imagePosition='left'}: Properties)  =>
{
    const css: string = `col-md-${no}`   

    return (
        <>
            {
                (imagePosition === 'left')  ??
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className={css}>
                                <img src={image} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {
                (imagePosition === 'top')  ??
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            }
            {
                (imagePosition === 'bottom')  ??
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                    <img src={image} className="card-img-bottom" alt="..."/>
                </div>
               
            }
        </>
        
    );
}
