import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function App() {
  const handleRegistrationSuccess = () => {
    console.log('Registration success.');
    // 在這裡可以處理註冊成功後的行為，例如顯示成功訊息等等
  };

  return (
    <div className="App">
      <header className="App-header">
        <RegistrationForm onSuccess={handleRegistrationSuccess}/>
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
