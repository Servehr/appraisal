// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';

// import { academicSliceReducer } from './slices/AcademicSlice';

export const before = () => 
{

}

// const reducers = combineReducers(
//    { 
//       academic: academicSliceReducer 
//    }
// );

// const persistConfig = {
//     key: 'resume',
//     storage,
// };

// const rootReducer = (state, action) => 
// {
//     if(action.type === 'RESET')
//     {
//        storage.removeItem('persist:resume');
//        state = {};
//     }
//     return reducers(state, action);
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore(
//    {
//       reducer: {
//          reducer: persistedReducer
//       }
//    }
// );

// export default store;