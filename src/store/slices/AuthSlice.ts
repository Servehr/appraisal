import { StateCreator } from "zustand";
import { IAuthState } from "../types/IAuthState";

const createAuthSlice: StateCreator<IAuthState> = (set, get) => (
    {
        user: {
            id: 0,
            firstName: "Moham",
            surname: "Wright",
            email: "servertstng@gmail.com",
            employeeId: "MOWR"
        },
        setUser(user: any)
        {
            set(state => ({user: state.user}))
        },
        token: '',
        setToken(token: string)
        {
            set(state => ({token: token}))
        }
    }
)


export default createAuthSlice;