import React from 'react';
import './alert.css';

type AlertMessage = 
{
    msg?: string;
    css: string;
    bg: string;
    textColor: string;
}

export const AlertSolid = ({msg, css, bg, textColor}: AlertMessage)  =>
{
  const alertState: string = `alert alert-${css} bg-${bg} text-${textColor} border-0 alert-dismissible fade show`
  

  return (
        <div  className={alertState} role="alert">
            <i className="bi bi-star me-1"></i>
                A simple primary alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  );
}
