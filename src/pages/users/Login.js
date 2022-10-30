import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import styles from "../../styles/login.module.css";

const LOGIN_URL = "http://challenge.broobe.net/api/v1/login";

const Login = () => {
  const errorRef = useRef();
  const emailRef = useRef();

  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let headers = new Headers({
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    //   Authorization: "Bearer <token>",
    //   Origin: "http://localhost:3000",
    // });

    // fetch(LOGIN_URL, {
    //   mode: "no-cors",
    //   credentials: "include",
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify({
    //     email: email,
    //     password: pwd,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     //   const accessToken = response?.data?.accessToken;
    //     //   const roles = response?.data?.roles;
    //     setAuth({ email, pwd });
    //     setEmail("");
    //     setPwd("");
    //     setSuccess(true);
    //   })
    //   .catch((err) => {
    //     if (!err?.response) {
    //       setErrorMsg("No hubo respuesta del servidor.");
    //     } else if (err.response?.status === 400) {
    //       setErrorMsg("Email o contraseña faltante.");
    //     } else if (err.response?.status === 401) {
    //       setErrorMsg("No autorizado.");
    //     } else {
    //       setErrorMsg("Falló el inicio de sesión, intenta nuevamente.");
    //     }
    //     errorRef.current.focus();
    //   });
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.title}>
          <h2>¡Bienvenido/a!</h2>
          <p>Gestiona tus issues y llevá tu organización a un nuevo nivel.</p>
        </div>
        <p ref={errorRef} className={styles.errorMsg}>
          {errorMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="emailname">Email:</label>
            <input
              placeholder="tuemail@email.com"
              ref={emailRef}
              type="text"
              id="emailname"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Contraseña:</label>
            <input
              placeholder="123456"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>
          <button>Iniciar sesión</button>
          <p>
            ¿Aún no tienes cuenta?{" "}
            <Link to="/new-user">
              <a>Crear una nueva</a>
            </Link>
          </p>
        </form>
      </section>
      <div className={styles.sectionBG} />
    </>
  );
};

export default Login;
