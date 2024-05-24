import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/signup.css';

function SignupPage() {
  const [userType, setUserType] = useState("student");
  const [username, setUsername] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  // Function to check password strength
  const isPasswordStrong = (password) => {
    return password.length >= 8;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup clicked!", { userType, username, studentId, password, email });
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
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
      <form onSubmit={handleSignup}>
        {userType === "student" && (
          <>
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
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </>
        )}
        {userType === "parent" && (
          <>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
          </>
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
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {!isPasswordStrong(password) && (
          <p className="password-strength">Password must be at least 8 characters long</p>
        )}
        {password !== confirmPassword && (
          <p className="password-mismatch">Passwords do not match</p>
        )}
        <Link to="">
          <button type="submit">Signup</button>
        </Link>
      </form>
    </div>
  );
}

export default SignupPage;
