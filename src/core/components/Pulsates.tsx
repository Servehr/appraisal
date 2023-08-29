import React from 'react'
// import '../css/style.css';

export type color = 'warning' | 'sucess' | 'danger' | 'info' | 'teal' | 'lime' | 'brown' | 'blue' | 'purple' | 'primary' | 'indigo' | 'green';

export type Parameters = {
    color?: string;
    icon: string;
    heading: string;
    figure: number;
    percent?: number;
    text: string;
    col?: string
};

export const Pulsates = ({color, icon, heading, figure, percent, col}: Parameters) => 
{
    const bg: string = `info-tile info-tile-alt tile-${color}`
    const graphic: string = `bi bi-${icon}`

    return (
        <div className="col" style={{paddingRight: '8px', paddingLeft: '8px'}}>
            <div className="card info-card revenue-card flex">
                <div className="card-body">
                    <h4 className="card-title" style={{marginBottom:'5px', fontSize: '14px'}}>{heading}</h4>

                    <div className="d-flex justify-content-between">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={graphic}></i>
                        </div>
                        <div className="ps-3 mt-3">
                            <div className='col-12' style={{fontSize: '25px'}}>{figure}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}