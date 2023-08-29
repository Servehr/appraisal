import React, { useEffect, useState } from 'react';

type properties = 
{
    bg?: string
    col: string
    text: string
    heading: string
    footerText?: string
    scrollable: boolean
    height?: number
    wantFooter?: boolean
}

export const Panel = ({bg='default', col, text, heading, footerText, scrollable, height, wantFooter=false}: properties)  =>
{
  const state: any = `panel panel-${bg} takeUp`
  const panelBody: string = (scrollable === true) ? `panel-body scroll-pane` : `panel-body`

  const [showFooter, setIsShowFooter] = useState(true)

  useEffect(() => 
  {
        setIsShowFooter(wantFooter)
  }, [wantFooter]);

  return (    
    
    <div className={col}>
        <div className={state} data-widget='{"draggable": "false"}'>
            <div className="panel-heading">
                <h2>{heading}</h2>
                <div className="panel-ctrls" data-actions-container="" data-action-collapse='{"target": ".panel-body"}'></div>
            </div>
            <div className={panelBody} style={{height: height+'px'}}>
                <div className="scroll-content" style={{ paddingBottom: '10px', marginBottom: '20px'}}>
                     {text}
                 </div>
            </div>
		    {   
                showFooter && <div className="panel-footer">
				    <span className="text-gray"><em>{footerText}</em></span>
			    </div>
            }
        </div>
    </div>
  );
}
