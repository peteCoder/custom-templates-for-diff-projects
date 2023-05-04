import React from "react";
import { AboutUs, ContactUs, Home, Login, SignIn, Hotel } from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
      <Routes>
        {/* All Routes */}
        <Route element={<Home/>} path="/" />
        <Route element={<Login/>} path="/login" />
        <Route element={<SignIn/>} path="/register" />
        <Route element={<ContactUs haveNavBar={true} />} path="/contact" />
        <Route element={<AboutUs />} path="/about" />
        <Route element={<Hotel />} path="/hotel" />
      </Routes> 
  )
}