import React, { useState } from "react";
import "./Auth.css";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  return (
    <div className="register-div">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // try {
          //   const response = await register({
          //     variables: {
          //       email,
          //       password,
          //     },
          //   });
          //   setPassword("");
          //   setEmail("");
          //   console.log(response);
          // } catch (err) {
          //   setErrMsg(err.message);
          // }
          console.log("Submitted!");
        }}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="submit">Register</button>
        {errMsg !== "" && <div className="error-div">{errMsg}</div>}
      </form>
    </div>
  );
}
