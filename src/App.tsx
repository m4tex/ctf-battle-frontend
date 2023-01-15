import React from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import Header from "./layout/header";

function App() {
  return (
    <Routes>
        <Route element={<Header/>} path={'*'}>

        </Route>
    </Routes>
  );
}

export default App;