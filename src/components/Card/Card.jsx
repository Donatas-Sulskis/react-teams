/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "./Card.style";

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [votingError, setVotingError] = useState("");

  const initialMount = useRef(true);

  // Fetching teams and updating on change
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      axios
        .get("http://localhost:8080/content/teams", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        })
        .then((res) => setData(res.data))
        .catch((e) => {
          if (e.response !== undefined) {
            setError(`${e.response.data.err}. Try logout and login again. `);
          } else {
            setError("Servers are down. Please try again later.");
          }
        });
    } else {
      axios
        .get("http://localhost:8080/content/teams", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        })
        .then((res) => setData(res.data))
        .catch((e) => console.log(e));
    }
  });

  function add(score) {
    axios
      .post(
        `http://localhost:8080/content/teams/add/${score}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.msg !== undefined) {
          setSuccess(res.data.msg);
        }
      })
      .catch((e) => {
        if (e.response === undefined) {
          setVotingError("Unexpected error occurred.");
        }
      });
  }

  function remove(score) {
    axios
      .post(
        `http://localhost:8080/content/teams/remove/${score}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.msg !== undefined) {
          setSuccess(res.data.msg);
          localStorage.setItem("voted", "true");
        }
      })
      .catch((e) => {
        if (e.response === undefined) {
          setVotingError("Unexpected error occurred.");
        }
      });
  }

  return (
    <S.Container>
      <S.Success>
        {success || <S.VotingError>{votingError}</S.VotingError>}
      </S.Success>
      {data.length <= 0 ? (
        <S.Error>{error}</S.Error>
      ) : (
        data &&
        data.map((item) => (
          <S.Card key={item.id}>
            <S.Image src={item.image} alt="" />
            <S.Score>Score : {item.score}</S.Score>
            <S.Add onClick={() => add(item.id)}>+</S.Add>
            <S.Subtract onClick={() => remove(item.id)}>-</S.Subtract>
          </S.Card>
        ))
      )}
    </S.Container>
  );
};

export default Card;
