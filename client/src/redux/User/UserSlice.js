import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error:null,
  loading:false
};

const userslice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInstart:(state)=>{
            state.loading=true
            state.error=null
        },
        signInSuccess:(state,action)=>{
            state.loading=false
            state.user=action.payload
            state.error=null
        },
        signInFail:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
    }       
})

export const {signInstart,signInSuccess,signInFail}=userslice.actions
export default userslice.reducer