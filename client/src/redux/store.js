import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './User/UserSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themereducer from './theme/themeslice'


const rootReducer = combineReducers({
  user: userReducer,
  theme:themereducer
})

const persistConfig={
  key:'root',
  storage,
  version:1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store= configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

export const persistor = persistStore(store)