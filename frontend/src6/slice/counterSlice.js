import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    count:0
}
let counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count = state.count+1

        },
        decreemnt:(state)=>{
            state.count = state.count-1

        },
        customValue:(state,action) =>{
            state.count = action.payload

        }
    }
})


 export const {increment,decreemnt,customValue} = counterSlice.actions

 export default counterSlice.reducer

