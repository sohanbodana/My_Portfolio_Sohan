import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

const App=() => {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route />
    </Routes>
  );
};
export default App;
