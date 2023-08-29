import React, { FC, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import classNames from 'classnames'

export type InputSize = 'medium' | 'large';
export type InputType = 'text' | 'email' | 'password' | 'number' | 'date' | 'checkbox' | 'radio';

export type InputProps = {
    id: string
    name: string
    rows: number
    cols: number
    type?: InputType
    size?: InputSize
    className?: string
    placeholder?: string
    label?: boolean
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
} 

const sizeMap: { [ key in InputSize ]: string } = 
{
    medium: 'p-3 text-base',
    large: 'p-4 text-base',
}

export const TextArea = ( {onChange, id, cols, rows, name, size = 'medium', className = '', placeholder, label=false, ...props }: InputProps ) => {

      const clax = `form-control ${className}`
      
      const checkFieldLength = (value: any) => 
      {

      }

      return (
          <>              
            { label && <span>{placeholder}</span> }
            <textarea id={id} rows={rows} cols={cols} name={name} placeholder={placeholder} className={clax} {...props}
              onChange={(event) => 
                {
                  checkFieldLength(event.target.value)
                  onChange(event)
                }}
            > 
            </textarea>
          </>
      );
};
  