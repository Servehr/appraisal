import React from 'react';
import './alert.css';

type AlertMessage = 
{
    msg?: string;
    css: string;
}

export const AlertIconOutline = ({msg, css}: AlertMessage)  =>
{
  const alertState: string = `alert border-${css} alert-dismissible fade show`

  return (
        <div  className={alertState} role="alert">
            <i className="bi bi-star me-1"></i>
                A simple primary alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  );
}
