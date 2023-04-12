import { useState } from 'react';

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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={loginInfo.username}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
