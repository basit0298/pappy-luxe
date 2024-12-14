import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './App.css'; 
const App = () => {
  const [userName, setUserName] = useState(null); // State to store the logged-in user's name
  const [isLoginVisible, setIsLoginVisible] = useState(false); // State to control visibility of the login form

  // Handle login success (this will update the button text with the user's name)
  const handleLoginSuccess = (name) => {
    setUserName(name); // Set the user's name after successful login
  };

  // Toggle login form visibility
  const toggleLoginForm = () => {
    setIsLoginVisible((prev) => !prev);
  };

  return (
    <div>
      <Navbar userName={userName} onLoginClick={toggleLoginForm} />
      <Login
        isVisible={isLoginVisible}
        onClose={() => setIsLoginVisible(false)} // Close login form
        onLoginSuccess={handleLoginSuccess} // Pass login success handler
      />
    </div>
  );
};

export default App;