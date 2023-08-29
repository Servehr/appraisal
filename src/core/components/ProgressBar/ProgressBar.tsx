import React from 'react';
import './ProgressBar.css';

type properties = 
{
    css: string;
    width: number;
    type: string;
}

export const ProgressBar = ({css, width, type}: properties)  =>
{
  const progressType: string = `progress ${type}`
  const state: string = `progress-bar progress-bar-${css}`
  const percent: string = `${width}%`

  return (
        <div className={progressType}>    
          <div className={state} style={{width: percent}}></div>
        </div>
  );
}
