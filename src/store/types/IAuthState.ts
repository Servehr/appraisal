export interface IAuthState 
{
    user : { 
        id: number
        firstName: string
        surname: string
        email: string
        employeeId: string
    },
    token: string

    setUser: (user: any) => void;
    setToken: (token: string) => void
}

