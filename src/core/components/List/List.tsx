import { url } from "inspector"

type Properties = 
{
    listType: 'disc' | 'circle' | 'decimal' | 'decimal-leading-zero' | 'disc' | 'outside' | 'inside' | 'none'
    items: string[]    
}

export const List = ({items, listType}: Properties) => 
{
    const ul: any = items.map((item, index) => 
    {      
        return <li key={index} style={{listStyle: listType}}><a href={item}>{item}</a></li>
    })
    return (
        <ul className='dropdown-menu' role='menu'>{ul}</ul>
    )
}