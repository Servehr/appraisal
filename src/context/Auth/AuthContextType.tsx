import { AuthType } from "./AuthType"

export type AuthContextType = 
{  
    user: AuthType | null,
    setUser: React.Dispatch<React.SetStateAction<AuthType | null>>
}