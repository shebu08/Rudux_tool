import { createSlice } from "@reduxjs/toolkit";
const STATUS = Object.freeze( {
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'

})

const initialState = [];
const productslice = createSlice({
    name : 'product',
    initialState : {
        data:[],
        status : STATUS.IDLE,

    }, 
    reducers : {
        add(state , action){
            // Redux 
            state .push(action.payload);



        },

        remove(state , action){
           return  state = state.filter(item=> item.id !== action.payload)
        },
    }
});

export const {add , remove} = cartSlice.actions;
export default cartSlice.reducer;