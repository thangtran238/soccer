import React, { useState } from "react";
import './Sign_in.css';
import axios from 'axios';

function Sign_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); 
  function handleLogin() {
    // Kiểm tra dữ liệu đăng nhập
    if (email && password) {
      axios
        .get("http://localhost:3000/user")
        .then((response) => {
          const userData = response.data;
          const user = userData.find(
            (user) => user.email === email && user.password === password
          );
          if (user) {
            setIsLoggedIn(true);
            setUserData(user);
            console.log("Login Successful!");
            window.location.href = "/Content"; // Chuyển hướng đến trang Home nếu đăng nhập thành công
          } else {
            console.log("Invalid credentials!");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    } else {
      console.log("Please enter email and password!");
    }
  }
  
  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input-field"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input-field"
      />
      <br />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}
export default Sign_in;
