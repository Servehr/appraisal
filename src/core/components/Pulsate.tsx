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

export const Pulsate = ({color, icon, heading, figure, percent, col}: Parameters) => 
{
    const bg: string = `info-tile info-tile-alt tile-${color}`
    const graphic: string = `ti ti-${icon}`

    return (
        <div className={col} style={{visibility: 'visible', opacity: 1, display: 'block', transform: 'translateY(0px)'}}>
			<div className={bg}>
				<div className="tile-icon"><i className={graphic}></i></div>
				<div className="tile-heading"><span>{heading}</span></div>
				<div className="tile-body"><span>{figure}</span></div>
				<div className="tile-footer"><span className="text-success">{'+'+percent+'%'}</span></div>
			</div>
		</div>
    )
}