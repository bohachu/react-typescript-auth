import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const handleRegistrationSuccess = () => {
    console.log('Registration success.');
  };

  return (
    <div className="App">
      <header className="App-header">
        <RegistrationForm onSuccess={handleRegistrationSuccess} />
        <LoginForm />
      </header>
    </div>

  );
}

export default App;
