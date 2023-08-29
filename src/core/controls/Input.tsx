import { IInputField } from '../../interface/IInputField';
import '../styles/x.css';

export const Input = (props: IInputField) => 
{
    const { label } = props;

    return (
        <div className="root">
            { label && <label>{ label }</label> }
            <input type="text" className="input" />
        </div>
    )
}