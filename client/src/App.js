import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Employee from "./components/Employee";
import Admin from "./components/Admin";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/invalid' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
