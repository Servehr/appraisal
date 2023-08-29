import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fields } from '../../../core';
import { ButtonDefault } from '../../../core/components';
import { TextArea } from '../../../core/controls';


export const Academic = () => 
{
    const [firstname, setFirstName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [stateDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [nationlity, setNationality] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [qualification, setQualifcation] = useState<string>("")

  const  navigate = useNavigate()

  const [isToggled, setIsToogled] = useState(false)

  return (    
        <div className="col-12 pt-3 px-4 mt-2"> 
        <div className="row">
            <div className='col-12 col-md-6'>
                <Fields css="col-12 px-1" onChange={(event) => { setFirstName(event?.target.value); } } field={'text'} placeHolder='Enter Institution' fieldType={'institution'}/>
            </div>
        </div> 
        <div className="row">
            <div className='col-12 col-md-6'>
                <Fields css="col-12 px-1" onChange={(event) => { setQualifcation(event?.target.value); } } field={'text'} placeHolder='Enter Qualification' fieldType={'qualifidation'}/>
            </div>
        </div>
            <div className="row">
                <div className='col-12 col-md-6'>
                    <Fields css="col-12 px-1" onChange={(event) => { setFirstName(event?.target.value); } } field={'text'} placeHolder='Enter Discipline' fieldType={'discipline'}/>
                </div>
            </div> 
            <div className="row">
                <div className='col-12 col-md-6'>
                    <Fields css="col-12 px-1" onChange={(event) => { setQualifcation(event?.target.value); } } field={'text'} placeHolder='Enter Grade' fieldType={'grade'}/>
                </div>
            </div>
            <div className='row g-2 g-gap-2'>
                <div className='col-12 col-md-3 mr-1'>
                    <Fields css="col-12 form-control" onChange={(event) => { setStartDate(event?.target.value); } } field={'date'} placeHolder='' fieldType={'startDate'}/>
                </div>
                <div className='col-12 col-md-3'>
                    <Fields css="col-12 form-control" onChange={(event) => { setEndDate(event?.target.value); } } field={'date'} placeHolder='' fieldType={'endDate'}/>
                </div>
            </div>
                

            <div className="row modal-footer">
                <div className="col-12 d-flex mb-1 px-2" style={{marginTop: '10px'}}>
                    <div className='col-1'>
                        <ButtonDefault msg={'Disable'} color={'primary'} text={'SAVE'} dismiss={false} position={''} size={''} state={''} />
                        {/* <ButtonDefault msg={'Disable'} color={'secondary'} text={'CANCEL'} dismiss={true} position={''} size={''} state={''} /> */}
                    </div>
                    <div className='col-1 offset-10'>
                        {/* <ButtonDefault msg={'Disable'} color={'primary'} text={'SAVE'} dismiss={false} position={''} size={''} state={''} /> */}
                    </div>
                </div>
            </div>
        </div>
  );
}
