import { useContext } from "react"
import { Theme } from "../views/Theme/Theme"
import { ThemeContext } from "../views/Theme/Context/ThemeContext"


export const Register = () => 
{   
    const context = useContext(ThemeContext)

    return (
        <div>
            <h2 style={{background: Theme.primary.background, color: Theme.primary.color}}>Great Men</h2>
        </div>
    )
}