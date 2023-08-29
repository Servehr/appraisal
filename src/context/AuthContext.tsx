import { useState, Context, useContext, createContext } from "react";
import { AuthType } from "./Auth/AuthType";
import { AuthContextProviderType } from "./contextProvider/AuthContextProviderType";
import { AuthContextType } from "./Auth/AuthContextType";

export const AuthContext = createContext({} as AuthContextType);

export const AuthLoginContext = ({children}: AuthContextProviderType) => 
{
        const [user, setUser] = useState<AuthType | null>(null);   
        return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
