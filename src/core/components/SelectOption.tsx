import React, { useState } from 'react'
import { List } from './List';

export type icon = 'cloud' | 'alert' | 'check' | 'settings' | 'alt' | 'close' | 'panel';
export type size = 'medium' | 'large';
export type color = 'primary' | 'secondary' | 'warning' | 'error' | 'danger';
export type radius = 'circle' | 'circleWithShadow' | 'rectangle' | 'rectangleWithShadow' | 'img-circle'

export type defaultValue = {
    id: number
    text: string
}[]

export type optionParameters = {
    css?: string;
    defaultValue: defaultValue;
    options: defaultValue
    url?: string
    icon?: icon
    fieldType: string
};

export const SelectOption = ({css, defaultValue, options, url, icon, fieldType}: optionParameters) => 
{
    const [message, setMessage] = useState<string>('')

    const [department, setDepartment] = useState<number>(-1)
    const [isDepartment, setIsDepartment] = useState<boolean>(false)

    const [role, setRole] = useState<number>(-1)
    const [isRole, setIsRole] = useState<boolean>(false)

    const [rating, setRating] = useState<number>(-1)
    const [isRating, setIsRating] = useState<boolean>(false)

    const validateOption = (value: any) => 
    {
        const selectedOption = parseInt(value)

        if(fieldType === 'department')
        {
            if(selectedOption === -1)
            { 
                setIsDepartment(true)
                setDepartment(-1)
            } else {
                setIsDepartment(false)
                setDepartment(value)
            }
        }

        if(fieldType === 'role')
        {
            if(selectedOption === -1)
            { 
                setIsRole(true)
                setRole(-1)
            } else {
                setIsRole(false)
                setRole(value)
            }
        }

        if(fieldType === 'rating')
        {
            if(selectedOption === -1)
            { 
                setIsRating(true)
                setRating(-1)
            } else {
                setIsRating(false)
                setRating(value)
            }
        }
    }

    return (
            <div className='col-12'>
                <select className="form-select col-12 px-2 mb-2" id="task" name='task' style={{height: '47px'}} onChange={(e) => validateOption(e.target.value)}>
                    <option value={defaultValue[0].id}>- {defaultValue[0].text} -</option>
                    {
                        options.map((option: any, index:number) => {
                            return <option key={index} value={option.id}> {option.text} </option>
                        })
                    }
                </select>
                <span className='red' style={{fontSize: '15px'}}>{ isDepartment? 'Select an option' : '' }</span>
                <span className='red' style={{fontSize: '15px'}}>{ isRole? 'Select an option' : '' }</span>
                <span className='red' style={{fontSize: '15px'}}>{ isRating? 'Select an option' : '' }</span>
            </div>
    )
}