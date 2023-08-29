import React from 'react'
import cx from 'classnames'
import '../css/switch.css'

export type Parameters = {
    rounded: boolean
    isToogle: boolean
    onToogled: () => void
};

export const ToogleSwitch = ({rounded}: Parameters) => 
{
    const shape = cx('slider', { 'rounded': rounded })

    return (
        <label className='switch'>
            <input type="checkbox" />
            <span className={shape} />
        </label>
    )
}