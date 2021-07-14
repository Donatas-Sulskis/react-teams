/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as S from "./Card.style";

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [votingError, setVotingError] = useState();

  const initialMount = useRef(true);

  // Fetching teams and updating on change
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      axios
        .get(
          "https://react-teams-back-26lbx.ondigitalocean.app/content/teams",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        )
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
        .get(
          "https://react-teams-back-26lbx.ondigitalocean.app/content/teams",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        )
        .then((res) => setData(res.data))
        .catch((e) => console.log(e));
    }
  });

  function add(score) {
    axios
      .post(
        `https://react-teams-back-26lbx.ondigitalocean.app/content/teams/add/${score}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setVotingError("");
        }
      })
      .catch((e) => {
        if (e.response === undefined || e.response.data.error.includes("not")) {
          setVotingError("Unexpected error occurred.");
        }
      });
  }

  function remove(score) {
    axios
      .post(
        `https://react-teams-back-26lbx.ondigitalocean.app/content/teams/remove/${score}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )
      .then((res) => {})
      .catch((e) => {
        if (e.response === undefined) {
          setVotingError("Unexpected error occurred.");
        }
      });
  }

  return (
    <S.Container>
      <S.VotingError>{votingError}</S.VotingError>
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
