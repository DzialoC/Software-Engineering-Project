import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const verifyToken = () => async (dispatch) => {
    try{
        const response = await axios.get('http://localhost:5000/verify', {
            withCredentials: true,
        });

        if(response.status === 200){
            dispatch(loginSuccess());
        }
        else{
            //dispatch action for token expiration
            dispatch(logoutDueToTokenExpired());
        }
    }catch(error){
        console.error('Token verification failed:', error);
        dispatch(logout());
    }
}

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },

        logoutDueToTokenExpired: (state) => {
            state.isAuthenticated = false;
        }

    }
});

export const { loginSuccess, logout, logoutDueToTokenExpired} = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;