import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Hasło:", password);
    navigate("/posts");
  };

  return (
    <div className="login-container">
      <h1>LOGOWANIE</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Wpisz email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Hasło:</label>
        <input
          type="password"
          placeholder="Wpisz hasło..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
}

export default Login;
