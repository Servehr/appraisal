import React from 'react'
import cx from 'classnames'
import '../css/switch.css'

export type Parameters = {
    col: string
    isToogle?: boolean
    onToogled?: () => void
};

export const ImageUpload = ({col}: Parameters) => 
{
    // const shape = cx('slider', { 'rounded': rounded })

    return (
        <div className={col}>
            <div className="fileinput fileinput-new" style={{width: "60%"}} data-provides="fileinput">
                <div className="fileinput-preview thumbnail mb20" data-trigger="fileinput" style={{width: "50%", height: "150px"}}></div>
				<div>
				    <a href="#/" className="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>
				    <span className="btn btn-default btn-file">
                        <span className="fileinput-new">Select image</span>
                        <span className="fileinput-exists">Change</span>
                        <input type="file" name="..."/>
                    </span>
                </div>
            </div>
		</div>
    )
}