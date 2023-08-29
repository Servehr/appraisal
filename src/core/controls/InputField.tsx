import React, { FC, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import classNames from 'classnames'

export type InputSize = 'medium' | 'large';
export type InputType = 'text' | 'email' | 'password' | 'number' | 'date' | 'checkbox' | 'radio';


export type InputProps = {
    id: string;
    name: string;
    fieldType?: InputType;
    size?: InputSize;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'>;

const sizeMap: { [ key in InputSize ]: string } = 
{
    medium: 'p-3 text-base',
    large: 'p-4 text-base',
}


export const InputField = forwardRef<HTMLInputElement, InputProps>(
    (
      {
        id,
        name,
        fieldType,
        size = 'medium',
        className = '',
        placeholder,
        ...props
      },
      ref
    ) => {
      return (
        <input
          id={id}
          ref={ref}
          name={name}
          type={fieldType}
          placeholder={placeholder}
          className={className}
          {...props}
          style={{paddingLeft: '10px', borderStyle: '1px', outline: 'none !important', marginBottom: '0px', color: '#96989c', fontSize: '16px'}}
        />
      );
    }
  );
  