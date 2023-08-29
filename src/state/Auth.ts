import create from 'zustand'
import { AuthInitialData, LoginType } from '../type/abstraction/LoginType'

export const useAuthStore = create<LoginType>((Set) => (
    {    
        user: AuthInitialData.user,
        role: AuthInitialData.role,
        loading: AuthInitialData.loading,
        success: AuthInitialData.success,
        failure: AuthInitialData.failure,
    }
))