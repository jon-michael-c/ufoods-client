import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import ReactLoading from "react-loading";
import "./index.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
    console.log(email, password);
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <div className="auth-header">
          <h1>Sign Up</h1>
        </div>
        <div className="auth-form">
          <form className="auth" onSubmit={handleSubmit}>
            <div className="input">
              <label className="username" for="username">
                Username
              </label>
              <input
                for="username"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <label className="password" for="password">
                Password
              </label>
              <input
                for="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="button-container">
              <button className="btn btn-primary btn-form">
                {isLoading ? (
                  <span className="loading">
                    <ReactLoading
                      id="btn-load"
                      type="bubbles"
                      color="#ffffff"
                      height={40}
                      width={40}
                    />
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
