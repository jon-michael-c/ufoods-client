import { useEffect, useState } from "react";
import Loading from "react-loading";
import { Navigate, Router } from "react-router";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const { user } = useAuthContext();
  const { login, error, isLoading } = useLogin("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      setTimeout(() => {
        setAuth(true);
      }, 500);
    }
    await login(email, password);
  };

  useEffect(() => {}, []);
  return (
    <>
      {auth ? (
        <Navigate to="/" />
      ) : (
        <div className="auth-page">
          <div className="auth-form-container">
            <div className="auth-header">
              <h1>Login</h1>
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
                  <button className="btn">
                    {isLoading ? "Loading..." : "Sign In"}
                  </button>
                </div>
                {error && <div className="error">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
