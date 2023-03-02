import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationForm/>
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
