import React, { useState, forwardRef, DetailedHTMLProps, InputHTMLAttributes  } from 'react';
import '../../App.css';
import './css/input.css';
import { InputField } from '../controls/index';

type ChangeUserName = 
{
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    css: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ''>;

export const Password = ({onChange, css}: ChangeUserName)  =>
{
  const styles: any = `${css} noPadding spaceDown`
  const [password, setPassword] = useState("")
  const [isPassword, isPasswordSet] = useState(false)

  return (

    <>  
        <div className={styles}>
            <div className="input-group">
                <span className={ !isPassword ? 'input-group-text border ikon' : 'input-group-text redBackground' } style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderColor: 'none', padding: '6px'}}>
                    <i className={ !isPassword? 'ri ri-lock-2-fill fadedBlack' : 'ri ri-lock-2-fill white' } style={{fontSize: '17px'}}></i>
                </span>
                <InputField 
                    type="password" 
                    className={ (password === "") ? `input-group-addon form-control employeeId ${css}` : `input-group-addon form-control employeeId` }
                    id="password" 
                    name='password' 
                    placeholder='Provide your password' 
                    required
                    onChange={(event) => {
                        setPassword(event.target.value)
                        isPasswordSet(true)
                        onChange(event)
                    }}
                    />                    
            </div>
            {/* <span>{ employeeId !== 'empty' ? "" : "" }</span> */}
            {/* <span className='red'>{ password === '' ? "EmployeeId cannot be left empty" : ""}</span> */}
        </div>
    </>
  );
}
