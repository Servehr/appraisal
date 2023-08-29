import React from 'react'
import female from './../../views/passports/female.jpg'


type Items = 
{
    fullname: string
    department: string
    pics: string | null
    width?: number 
    height?: number
}

export const Arrays = ({fullname, department, pics=null, height, width}: Items) => 
{

    return (
        <>
            {
                (pics !== null) 
                ? 
                    <tr>
                        <th scope="row"><img src={ pics ?  pics : female } alt="Profile" className="rounded-circle" width={width} height={height}/></th>
                        <td><a href="#/" className="text-primary fw-normal">{fullname}</a></td>
                        <td>{department}</td>
                    </tr>
                :
                    <tr>
                        <td><a href="#/" className="text-primary fw-normal">{fullname}</a></td>
                        <td>{department}</td>
                    </tr>
            }
        </>
    )
}