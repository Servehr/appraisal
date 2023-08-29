import create from 'zustand';
import { IAuthState } from './types/IAuthState';
import createAuthSlice from './slices/AuthSlice';

const useStore = create<IAuthState>()((...a) => (
    {
        ...createAuthSlice(...a)    
    }
))

export default useStore;