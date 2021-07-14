import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import * as S from "./Form.style";

const Form = ({ button, path }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  function useDidMount() {
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
      setDidMount(true);
    }, []);

    return didMount;
  }

  const didMount = useDidMount();

  useEffect(() => {
    if (didMount)
      axios
        .post(
          `https://react-teams-back-26lbx.ondigitalocean.app/auth/${path}`,
          {
            email: email,
            password: password,
          }
        )
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("user", res.data.token);
          }

          if (res.data.msg.includes("logged")) {
            // eslint-disable-next-line no-restricted-globals
            location.replace(
              "https://react-teams-38zlh.ondigitalocean.app/dashboard"
            );
          }

          setMessage(res.data.msg);
        })
        .catch((e) => {
          if (e.response === undefined) {
            setError("Servers are down. Please try again later.");
          } else {
            setError(e.response.data.error);
          }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  function handleSubmit(e) {
    e.preventDefault();

    setEmail(e.target.email.value);
    setPassword(e.target.password.value);

    e.target.email.value = "";
    e.target.password.value = "";
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      {(error !== undefined && <S.Error>{error}</S.Error>) ||
        (message !== undefined && <S.Success>{message}</S.Success>)}

      <S.Input placeholder="Email*" type="email" name="email" required />
      <S.Input
        placeholder="Password*"
        type="password"
        name="password"
        required
      />
      <S.Button onClick={() => setError(undefined) && setMessage(undefined)}>
        {button}
      </S.Button>
    </S.Form>
  );
};

Form.propTypes = {
  button: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Form;
