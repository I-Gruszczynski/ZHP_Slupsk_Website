import { useState } from "react";
import "./loginModal.css";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  let navigate = useNavigate();

  const username = "adminzhp";
  const password = "!QAZ@WSX#EDC";

  const [inputUsername, SetInputUsername] = useState("");
  const [inputPassword, SetInputPassword] = useState("");

  const [err, SetErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputUsername === username && inputPassword === password) {
      let token = (Math.random() + 1).toString(36).substring(2);
      localStorage.clear();
      localStorage.setItem("token", token);
      navigate(`/adminzhp/${token}`);
    } else {
      console.log("Zły");
      SetErr("Podano błędną nazwę użytkownika lub hasło");
    }
  };
  return (
    <div className="loginModal-background">
      <div className="loginModal-main">
        <h1>Logowanie do panelu admina</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>Nazwa użytkownika</label>
          <input
            className={err !== "" ? "loginModal-main-input-err" : ""}
            type="text"
            placeholder="Nazwa użytkownika"
            value={inputUsername}
            onChange={(e) => SetInputUsername(e.target.value)}
          />

          <label>Hasło</label>
          <input
            className={err !== "" ? "loginModal-main-input-err" : ""}
            type="password"
            placeholder="Hasło"
            value={inputPassword}
            onChange={(e) => SetInputPassword(e.target.value)}
          />
          <p className="loginModal-main-err">{err}</p>
          <div style={{ clear: "both" }}></div>
          <button className="loginModal-main-btn-login" type="submit">
            Zaloguj
          </button>
          <button
            className="loginModal-main-btn-cancel"
            onClick={() => {
              navigate("/");
            }}
          >
            Anuluj
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
