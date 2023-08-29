import React, { useState } from 'react'

export type size = 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'warning' | 'error' | 'danger';

export type Parameters<E extends React.ElementType> = {
    id: string;
    size?: number;
    color?: string;
    others?: string;
    css?: string;
    key?: string;
    as: E;
    case?: string | number;
    onClick?: () => void;
    children?: React.ReactNode;
};

type TextProperties<E extends React.ElementType> = Parameters<E> & React.ComponentProps<E>

export const Typography = <E extends React.ElementType>({id, size, css, as, color, others, children}: Parameters<TextProperties<E>>) => 
{
    const [isLabel, setIsLabel] = useState<boolean>(false)
    const Typo: any = as || 'div'

    return (
        <Typo className={css} id={id} style={{fontSize: size, color: color }}>{children}</Typo>
    )
}