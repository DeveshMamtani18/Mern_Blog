import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',  
};

const themeslice=createSlice({
  name: 'theme',
    initialState,
    reducers: {
        setTheme: (state) => {
            state.theme=state.theme==='light'?'dark':'light';
        },
    },
});

export const{setTheme}=themeslice.actions;

export default themeslice.reducer;