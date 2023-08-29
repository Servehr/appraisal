// .

// import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {  persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { academicSliceReducer } from './slices/AcademicSlice';

export const Untitled = () => 
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

// const store = configureStore({
//       reducer: persistedReducer,
//       middleware: getDefaultMiddleware({
//       serializableCheck: {
//          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//       }),
//  });

//  export const persistor = persistStore(store);

// export default store;










//   const handleCreateTodo = async(todo) => 
//   {
//       const todoService = new TodoService(FetchClient)
//       try 
//       {
//           const createTodo =  await todoService.createService(todo);  
//           setTodos([...todos, createTodo]);
          
//       } catch (error) {
        
//       }
//   }

//   const handleGetTodo = async(todo) => 
//   {
//     const todoService = new TodoService(FetchClient)
//     try 
//     { 
//         const fetchTodos = async () => {
//            try 
//            {
//               const todos =  await todoService.getService(); 
//               setTodos(todos)
//            } catch (error) {
//               console.log()
//            }
//         }
        
//     } catch (error) {
      
//     }
//   }




//   import create from 'zustand'
// import { AuthInitialData, LoginType } from '../type/abstraction/LoginType'

// const useAuthStore = create<LoginType>((Set) = (
//     {
//         user: AuthInitialData.user,
//         role: AuthInitialData.role,
//         loading: AuthInitialData.loading,
//         success: AuthInitialData.success,
//         failure: AuthInitialData.failure,     
//     }
//  ))