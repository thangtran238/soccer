import React, { useState } from 'react';
import axios from "axios";
import './Sign_up.css';
function Sign_up() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    function signUp() {
      const data = {
        name: name,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:3000/user", data)
        .then((response) => {
          if (response.status >0){
            setShowSuccessMessage(true);
           
          } else {
            console.error("Registration Failed!");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
  
    return (
      <div className="register-container">
        {showSuccessMessage ? (
          window.location.href = "/Sign_in"
        ) : (
          <div>
            <h1>Register Page</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input-field"
            />
            <br />
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
            <button onClick={signUp} className="sign-up-button">
              Sign up
            </button>
          </div>
        )}
      </div>
    );
  }
  
  export default Sign_up;