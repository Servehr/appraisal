import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.css'


type Properties = 
{
    onChange?: (date: React.SetStateAction<Date> ) => void  
}

export const CalendarDate = ({onChange}: Properties) => 
{

    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const onCalenderChanged = (date: any) => {
        setSelectedDate(date)
    }

    return (
        <div className="col-sm-7">
            <DatePicker selected={selectedDate} 
                        onChange={(date: React.SetStateAction<Date | null>) => setSelectedDate(date)} 
                        dateFormat="dd/MM/yyyy" 
                        placeholderText='Select a date' 
                        filterDate={(date: { getDay: () => number }) => date.getDay() !== 6 && date.getDay() !== 0}
                        customInput={<input className='form-control col-sm-12 shape'/>}
                        />
        </div>
    )
}