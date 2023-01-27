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
    user: {},
};

const authSlice = createSlice({ name: 'auth', initialState, reducers: {
    login(state) {
        state.isAuthenticated = true;
        state.user = {
            name: 'asddsa'
        }
    }
}});

export const authActions = authSlice.actions;
export default authSlice;