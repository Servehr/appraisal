import React from 'react'
import '../css/radioButton.css'

type Properties = 
{
    id: string
    text: string
    col?: string
    name: string
}

export const RadioButton = ({col, text, id, name}: Properties) => 
{
    const clax: string = `holder ${col}`
    
    return (
        <label className={clax}>
            {text}
            <input type="radio" id={id} name={name}/>
            <span className="mark"></span>
        </label>
    )
}