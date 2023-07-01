import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    userExist: false,
}


const userExist = createSlice({
    name: 'user',
    initialState,
    reducers: {

        setUserExist: (state, action) => {
            state.userExist = action.payload;
        }

    }

});


export const {setUserExist} = userExist.actions;

export default userExist.reducer
