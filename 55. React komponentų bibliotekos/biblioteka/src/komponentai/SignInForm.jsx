import React, { useState, useEffect} from "react";

function SignInForm({users, setLoggedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        setLoggedIn(true);
      } else {
        // Display error message to user
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    );
}

export default SignInForm;