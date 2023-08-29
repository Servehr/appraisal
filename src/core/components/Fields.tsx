import React, { useState, forwardRef, DetailedHTMLProps, InputHTMLAttributes  } from 'react';
import '../../App.css';
import './css/input.css';
import { InputField } from '../controls/index';
import { InputType } from '../controls/InputField';

type ChangeUserName = 
{
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.ChangeEvent<HTMLInputElement>) => void
    css: string
    field: InputType
    fieldType: string
    placeHolder?: string
    msg?: string
    icon?: string
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ''>;


export const Fields = ({onChange, onKeyUp, css, field, placeHolder, icon='', fieldType}: ChangeUserName)  =>
{
  const styles: any = `${css} noPadding spaceDown`

  const [employeeId, setEmployeeId] = useState<string>("")
  const [isEmployeeId, setIsEmployeeId] = useState<boolean>(false)

  const [password, setPassword] = useState<string>("")
  const [isPassword, setIsPassword] = useState<boolean>(false)
  
  const [firstname, setFirstName] = useState<string>("")
  const [isFirstname, setIsFirstname] = useState<boolean>(false)
  
  const [surname, setSurname] = useState<string>("")
  const [isSurname, setIsSurname] = useState<boolean>(false)
  
  const [email, setEmail] = useState<string>("")
  const [isEmail, setIsEmail] = useState<boolean>(false)

  const [msg, setMsg] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  
  useState(() => {
    
  })

  const validateEmployeeId = (value: string) => 
  { 
      if(value === '' || value === null)
      {
          setError(true) 
          setEmployeeId('Invalid Text Parameter Passed')
          setIsEmployeeId(true) 
      }   else {    
        setError(false) 
        setEmployeeId('')
        setIsEmployeeId(false) 
      }
  }

  const validatePassword = (value: string) => 
  { 
      if(value === '' || value === null)
      {
          setError(true) 
          setPassword('Your password no correct')
          setIsPassword(true) 
      }   else {    
          setError(false) 
          setPassword('')
          setIsPassword(false)  
      }
  }

  const validateFirstName = (value: string) => 
  { 
      if(value === '' || value === null)
      {
          setFirstName('Enter Firstname')
          setIsFirstname(true) 
      }   else {    
          setError(false) 
          validateFirstName('')
          setIsFirstname(false)  
      }
  }

  const validateSurname = (value: string) => 
  {  
    if(value === '' || value === null)
    {
        setSurname('Enter Surname')
        setIsSurname(true) 
    }   else {    
        setSurname('')
        setIsSurname(false)  
    }
  }

  const validateEmail = (value: string) => 
  { 
    if(value === '' || value === null)
    {
        setEmail('Enter Email')
        setIsEmail(true) 
    }   else {    
        setEmail('')
        setIsEmail(false)  
    }
  }

  const checkFieldLength = (parameter: any) => 
  {    
    if(fieldType === 'employeeId'){ validateEmployeeId(parameter); }
    if(fieldType === 'password'){ validatePassword(parameter); }
    if(fieldType === 'firstname'){ validateFirstName(parameter); }
    if(fieldType === 'surname'){ validateSurname(parameter); }  
    if(fieldType === 'email'){ validateEmail(parameter); }
  }
  
  const Icon: string = `bi bi-${icon} fadedBlack`
  const Ikon: string = `bi bi-${icon} white`
  //   mail-line

  return (

    <>  
        <div className={styles}>
            {msg}
            <div className="input-group col icon">
                {
                    (icon !== '') &&
                    <span className={ !error ? 'input-group-text border ikon' : 'input-group-text redBackground' } style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderColor: 'none', padding: '6px'}}>
                        <i className={ !error? Icon : Ikon } style={{fontSize: '20px'}}></i>
                    </span>
                }
                <InputField
                    fieldType={field}
                    className={ (employeeId === 'empty') ? `input-group form-control shadow-none employeeId` : `input-group form-control shadow-none employeeId` }
                    id="employeeId" 
                    name='employeeId' 
                    placeholder={placeHolder} 
                    required
                    onChange={(event) => 
                      {
                        checkFieldLength(event.target.value)
                        onChange(event)
                      }
                   }
                    // onKeyUp={checkFieldLength}
                />                    
            </div>
            <span className='red' style={{marginTop: '-50px'}}>{ isFirstname?  "Enter Firstname": ''}</span>
            <span className='red' style={{marginTop: '-50px'}}>{ isSurname?  "Enter Surname": ''}</span>
            <span className='red' style={{marginTop: '-50px'}}>{ isEmail?  "Enter Email": ''}</span>
            <span className='red' style={{marginTop: '-50px'}}>{ isEmployeeId?  "Enter Employee Id": ''}</span>
        </div>
    </>
  );
}
