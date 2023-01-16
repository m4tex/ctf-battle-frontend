import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
        avatar: string;
    }
}

const initialState = {
    isAuthenticated: false,
    user: null,
} : AuthState;

const authSlice = createSlice({ name: 'auth', initialState, reducers: {
    login(state) {
        state.isLoggedIn = true;
        state.user = {

        }
    }
}});

export const authActions = authSlice.actions;
export default authSlice;