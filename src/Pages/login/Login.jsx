import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import logo from "../../assets/movix-logo.svg";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onLoginSuccess = () => {
    navigate("/home");
    localStorage.setItem("USERNAME", username);
    localStorage.setItem("PASSWORD", password);
  };

  const onLoginFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const onSubmitForm = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const predefinedUsername = "surya";
    const predefinedPassword = "surya@2023";

    if (username === predefinedUsername && password === predefinedPassword) {
      onLoginSuccess();
    } else {
      onLoginFailure("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
       <img
            className="website-logo"
            alt="movix logo"
            src={`${logo}`}
          />
      <form className="login-form-container" onSubmit={onSubmitForm}>
        <h1 className="heading-login">Login</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="input-field"
            type="text"
            id="username"
            placeholder="surya"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input-field"
            type="password"
            id="password"
            placeholder="surya@2023"
          />
        </div>
        {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
