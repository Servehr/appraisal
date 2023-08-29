type user = {
    id: number,
    firstname: string,
    surname: string,
    email: string,
    token: string,
    usertype: string
}

type permission = {
    id: number,
    name: string
}

type resource = {
    previlege: string,
    permission: permission[]
}

export type LoginType = 
{
    user: user,
    role: resource,
    loading: boolean,
    success: boolean;
    failure: boolean
}

export const AuthInitialData = {
    user: {
        id: -1,
        firstname: '',
        surname: '',
        email: '',
        token: '',
        usertype: ''
    },
    role: {
        previlege: '',
        permission: [
            {
                id: -1,
                name: ''
            }
        ]
    },    
    loading: false,
    success: false,
    failure: true
}
        