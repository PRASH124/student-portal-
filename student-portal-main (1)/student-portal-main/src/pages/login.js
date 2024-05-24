import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/login.css';

function LoginPage() {
  const [userType, setUserType] = useState("student");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked!", { userType, studentId, userId, password });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="button-container">
        <button
          className={userType === "student" ? "active" : ""}
          onClick={() => setUserType("student")}
        >
          Student
        </button>
        <button
          className={userType === "parent" ? "active" : ""}
          onClick={() => setUserType("parent")}
        >
          Parent
        </button>
      </div>
      <form onSubmit={handleLogin}>
        {userType === "student" && (
          <div className="input-group">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>
        )}
        {userType === "parent" && (
          <div className="input-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Login</button>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
