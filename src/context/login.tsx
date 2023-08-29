import { useContext } from "react"
import { LoginType } from "./Auth/loginType"
import { AuthContext, AuthLoginContext } from "./AuthContext"

export const Login = (props: LoginType) => 
{   
    const authContext = useContext(AuthContext)
    const Login = () =>
    {
        authContext.setUser(
            {
                email: "servertstng@gmail.com",
                password: "12345",
            }
        )
    }

    const LogOut = () => 
    {
        authContext.setUser(null)
    }
    return (
        <div>
            <h2>My email adderss is {props.details.email} and my password is {props.details.password}</h2>
            <h2>My new email {authContext.user?.email} and my password is {authContext.user?.password}</h2>
            <button onClick={Login}>Login</button>
            <button onClick={LogOut}>Logout</button>
        </div>
    )
}