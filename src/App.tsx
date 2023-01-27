import React from 'react';
import './App.css';

import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Layout from './layout/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <Routes>
        <Route element={<Layout />} path={'/'}>
            { isLoggedIn ? <>
                <Route element={<HomePage />} index />
            </> : <>
                <Route element={<LandingPage />} index />
                <Route element={<LoginPage />} path={'login'} />
                <Route element={<SignupPage />} path={'signup'} />
            </> }
        </Route>
        <Route element={'test'} path={'*'} />
    </Routes>
  );
}

export default App;