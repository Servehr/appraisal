import React from 'react';
import './ProgressBar.css';

type stacks = 
{
   stack: string
}
type properties = 
{
    css: string;
    colors: string[];
    type: string;
    stacks: string[]
}

export const ProgressBarStack = ({css, colors, type, stacks}: properties)  =>
{
  const progressType: string = `progress ${type}`
  const state: string = `progress-bar progress-bar-${css}`

  const bars: any = stacks.map((stack, index) => 
  {      
      return <div key={index} className={state} style={{width: stack}}></div>
      // colors.map((color) => {
      //   console.log(color)
      //   const state: string = `progress-bar progress-bar-${color}`
      //   return (
      //     <div className={state} style={{width: stack}}></div>
      //   )
      // })
  })

  return (
        <div className={progressType}>    
            {bars}
        </div>
  );
}
