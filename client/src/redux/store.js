import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './User/UserSlice'
export default configureStore({
  reducer: {
    user: userReducer,
  },
})