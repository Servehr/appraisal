import React from 'react';
import './alert.css';

type AlertMessage = 
{
    msg: string;
    css: string;
}

export const Alert = ({msg, css}: AlertMessage)  =>
{
  const alertState: any = `alert alert-${css} takeUp`

  return (
      <div className={alertState}>
          <button className='close' type='button' data-dismiss='alert'>X</button>
          <h6 className='white'>{msg}</h6>
      </div>
  );
}
