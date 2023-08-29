import React, { useEffect, useState } from 'react'
import '../css/checkBox.css'

type Properties = 
{
    id: string
    text: string
    col?: string
    yesOrNo?: boolean
}

export const SelectBox = ({col, text, id, yesOrNo=true}: Properties) => 
{
    const clax: string = `holder ${col}`
    const [isYesOrNo, setIsYesOrNo] = useState<boolean>(true)

    useEffect(() => 
    {
        setIsYesOrNo(yesOrNo)
    }, [])

    return (
        isYesOrNo ? 
            <div className={col}>
                <select className="form-control" disabled>
                    <option>Alaska</option>
                    <option>Lorem ipsum dolor.</option>
                    <option>Amet, impedit aperiam?</option>
                    <option>Nemo, alias, quasi?</option>
                    <option>Inventore, expedita.</option>
                </select>
            </div>
            :  
            <div className={col}>
                <select className="form-control">
                    <option>Alaska</option>
                    <option>Lorem ipsum dolor.</option>
                    <option>Amet, impedit aperiam?</option>
                    <option>Nemo, alias, quasi?</option>
                    <option>Inventore, expedita.</option>
                </select>
            </div> 
    )
}