export interface IInputField extends React.AllHTMLAttributes<HTMLInputElement>
{
    label?: string;
    onChange?: () => void
}