import React from 'react'

type Properties = 
{
    variant: string
    children: React.ReactNode;
}

export const Wells = ({variant, children}: Properties) => 
{
    const clax: string = `well ${variant} tooltips`

    return (
        <div className="tab-pane active" id="domwell">
            <div className={clax} data-trigger="hover" data-original-title=".well">
                {children}
            </div>
        </div>
    )
}