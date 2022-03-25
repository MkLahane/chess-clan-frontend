import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { loginQuery } from "../Queries/graphql";
import { setAuthToken } from "../contexts/AuthToken";
import "./Auth.css";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [infocusInput, setInFocusInput] = useState("");

  const [login] = useMutation(loginQuery);
  return (
    <div className="login-div">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await login({
              variables: {
                email,
                password,
              },
            });
            console.log(response);
            setAuthToken(response.data.login.accessToken);
            history.push("/");
          } catch (err) {
            setErrMsg(err["graphQLErrors"][0].message);
          }
        }}
      >
        <input
          className={infocusInput === "email" ? "infocus-input" : ""}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          onFocus={() => setInFocusInput("email")}
          onBlur={() => setInFocusInput("")}
        />
        <input
          className={infocusInput === "password" ? "infocus-input" : ""}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          onFocus={() => setInFocusInput("password")}
          onBlur={() => setInFocusInput("")}
        />
        <button type="submit">Log In</button>
        {errMsg !== "" && <div className="error-div">{errMsg}</div>}
      </form>
    </div>
  );
}
