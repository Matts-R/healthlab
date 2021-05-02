import { React, useState } from "react";
import "../Styles/loginStyle.css";

export default function Login() {
  const [isAboutHidden, setIsAbout] = useState(true);
  const [isLoginHidden, setIsLoginHidden] = useState(false);
  const [isRegisterHidden, setIsRegisterHidden] = useState(false);

  function showLogin() {
    setIsAbout(false);
    setIsRegisterHidden(false);

    setIsLoginHidden(true);
  }

  function showRegister() {
    setIsAbout(false);
    setIsLoginHidden(false);

    setIsRegisterHidden(true);
  }
  return (
    <div className="login-container ">
      <div className="background-clip-image background-gradient"></div>
      <div className="login-side">
        <div className="btn-login-options">
          {!isRegisterHidden && !isLoginHidden && (
            <>
              <button
                id="login-btn"
                className="bt-options 
          input-small
          background-gradient"
                onClick={showLogin}
              >
                <img className="img-btn" src="/Assets/login.svg" alt="" /> Login
              </button>

              <button
                id="register-btn"
                className="bt-options
          input-small
          background-gradient"
                onClick={showRegister}
              >
                <img
                  className="img-btn-register"
                  src="/Assets/add.svg"
                  alt=""
                />
                Cadastre-se
              </button>
            </>
          )}
        </div>

        <div className="login-content">
          {isAboutHidden && (
            <div id="about" className="about">
              <h4 className="text-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                rutrum risus sed sapien pulvinar lacinia. Proin scelerisque enim
                commodo urna mattis, eu lacinia purus gravida.
              </h4>
            </div>
          )}

          {isLoginHidden && (
            <form id="login-form" className="form-fields">
              <input
                type="text"
                className="input-medium"
                placeholder="Insira seu nome"
              />
              <input
                type="text"
                className="input-medium  mt-medium"
                placeholder="Insira senha"
              />
              <button className="mt-biggest login-btn input-small">
                {" "}
                Entrar
              </button>
            </form>
          )}

          {isRegisterHidden && (
            <form id="register-form" className="form-fields">
              <input
                type="text"
                className="input-medium"
                placeholder="Insira seu nome"
              />

              <input
                type="text"
                className="input-medium mt-medium"
                placeholder="Insira o nome do seu usuário"
              />

              <input
                type="text"
                className="input-medium mt-medium"
                placeholder="Insira seu e-mail"
              />

              <div className="password-container ">
                <input
                  type="text"
                  className="input-small mt-medium"
                  placeholder="Insira senha"
                />

                <input
                  type="text"
                  className="input-small mt-medium confirm-password"
                  placeholder="Confirme sua senha"
                />
              </div>

              <button
                className="mt-biggest login-btn input-small"
                type="submit"
              >
                {" "}
                Cadastrar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
