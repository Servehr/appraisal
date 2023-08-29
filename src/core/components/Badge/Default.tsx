import React from 'react';

type AlertMessage = 
{
    msg: string;
    color: string;
}

export const Default = ({msg, color}: AlertMessage)  =>
{
  const css: string = `alert alert-${color}`

  return (
        <span className={css}>Primary</span>
  );
}
