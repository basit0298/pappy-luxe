import { useState } from 'react';
import './Login.css'; // For styling

const Login = ({ isVisible, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isVisible) return null;

  // Form validation
  const validateForm = () => {
    if (!name || !email || !password) {
      setErrorMessage('All fields are required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email');
      return false;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validate form before submitting

    const response = await fetch('http://localhost:5000/api/users/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('Login successful:', data.name);
      onLoginSuccess(data.name); // Pass the name to App.jsx
      onClose(); // Close the login form
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-form">
        <h2>Login</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn">Login</button>
          <button type="button" className="btn-close" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Login;