import React from 'react';
import './alert.css';

type AlertMessage = 
{
    msg?: string;
    css: string;
}

export const Default = ({msg, css}: AlertMessage)  =>
{
  const alertState: any = `alert alert-${css} alert-dismissible fade show`

  return (
        <div  className={alertState} role="alert">
            A simple secondary alert—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  );
}
