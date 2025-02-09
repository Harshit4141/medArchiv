import React, { useState } from "react";
import style from '../Style/OthersCss/Login.module.css'
function Login() {
  const [userType, setUserType] = useState("admin");
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleLogin = () => {
    console.log(`Logging in as ${userType}`, credentials);
    alert(`Logged in as ${userType}`);
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginCard}>
        <h2 className={style.loginTitle}>Login</h2>

        <div className={style.radioGroup}>
          <label>
            <input
              type="radio"
              value="admin"
              checked={userType === "admin"}
              onChange={handleUserTypeChange}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="doctor"
              checked={userType === "doctor"}
              onChange={handleUserTypeChange}
            />
            Doctor
          </label>
          <label>
            <input
              type="radio"
              value="patient"
              checked={userType === "patient"}
              onChange={handleUserTypeChange}
            />
            Patient
          </label>
        </div>

        <input
          type="text"
          className={style.inputField}
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className={style.inputField}
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />

        <button className={style.loginButton} onClick={handleLogin}>
          Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </button>
      </div>
    </div>
  );
}

export default Login;





