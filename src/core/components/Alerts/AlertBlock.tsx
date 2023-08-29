import React from 'react';
import './alert.css';
import { Typography } from '../../controls/index'

type Properties = 
{
    msg: string;
    css: string;
    attention: string;
    icon: string;
    col?: string | undefined;
}

export const AlertBlock = ({msg, css, attention, icon, col=undefined}: Properties)  =>
{
  const alertState: any = `alert alert-dismissable alert-${css}`
  const buttonCss: any = `btn btn-${css}`

  return (
      <div className={alertState}>
        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <Typography id={'id'} as='h4'>{attention}</Typography>

        <Typography id={'id'} as='p'>{msg}</Typography>
        <br/>
        <Typography id={'id'} as='p'>
          <a className={buttonCss} href="#/">Okay</a>
        </Typography>
      </div>
  );
}
