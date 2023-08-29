import React from 'react'
import cx from 'classnames'
import '../css/switch.css'

export type Parameters = {
    css: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
};

export const FileInput = ({css, onChange}: Parameters) => 
{
    // const shape = cx('slider', { 'rounded': rounded })
    const clax:string = `form-control ${css}`

    return (
        <input className={clax} type="file" />
    )
}