import React from 'react'
import '../css/checkBox.css'

type Properties = 
{
    id: string
    text: string
    col?: string
}

export const CheckBox = ({col, text, id}: Properties) => 
{
    const clax: string = `holder ${col}`
    
    return (
        <label className={clax}>
            {text}
            <input type="checkbox" id={id}/>
            <span className="mark"></span>
        </label>
    )
}