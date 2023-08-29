import React from 'react';
import './alert.css';

type AlertMessage = 
{
    msg?: string;
    css: string;
    iconName?: string;
}

export const AlertIconWithHeading = ({msg, css, iconName}: AlertMessage)  =>
{
  const alertState: string = `alert alert-${css} alert-dismissible fade show`
  const icon: string = `bi bi-${iconName} me-1`

  return (
        <div  className={alertState} role="alert">
            
                <h4 className="alert-heading"><i className={icon}></i> Primary Heading</h4>
                <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                <hr/>
                <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  );
}
