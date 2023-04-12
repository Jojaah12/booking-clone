import React, { useState } from 'react';
import './LoginPage.css'; // import your CSS file

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', loginInfo);
    // TODO: Implement the actual login logic here
  };

  return (
    <div className="form-container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={loginInfo.username}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
