import React from 'react';
import './alert.css';

type AlertMessage = 
{
    msg: string;
    css: string;
    attention: string;
    icon: string;
    col?: string | undefined;
}

export const AlertWithIcon = ({msg, css, attention, icon, col=undefined}: AlertMessage)  =>
{
  const alertState: any = `alert alert-dismissable alert-${css}`
  const alertIcon: any = `ti ti-${icon}`

  return (
        <div className={col}>            
          <div className={alertState}>
            <i className={alertIcon}></i>&nbsp; <strong>{attention}</strong>{msg}
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          </div>
        </div>
  );
}
