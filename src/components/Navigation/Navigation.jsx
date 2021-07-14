import React from "react";
import * as S from "./Navigation.style";

const Navigation = () => {
  return (
    <S.Navigation>
      <S.StyledLink to="/dashboard">
        <S.Image
          src="https://i.ibb.co/cJyYc9z/kisspng-201718-uefa-champions-league-2018-uefa-champion-liga-champion-5b47ce349eb491-242549231531432.png"
          alt="company logo"
        />
      </S.StyledLink>
      <S.List>
        {localStorage.getItem("user") ? (
          <></>
        ) : (
          <S.ListItem>
            <S.StyledLink to="/">Sign Up</S.StyledLink>
          </S.ListItem>
        )}
        {localStorage.getItem("user") ? (
          <></>
        ) : (
          <S.ListItem>
            <S.StyledLink to="/login">Sign In</S.StyledLink>
          </S.ListItem>
        )}
        {localStorage.getItem("user") ? (
          <S.ListItem>
            <S.StyledLink to="/dashboard">Dashboard</S.StyledLink>
          </S.ListItem>
        ) : (
          <> </>
        )}
        {localStorage.getItem("user") ? (
          <S.ListItem>
            <S.Button
              onClick={() => {
                localStorage.removeItem("user");
                // eslint-disable-next-line no-restricted-globals
                location.replace("http://localhost:3000/login");
              }}
            >
              Logout
            </S.Button>
          </S.ListItem>
        ) : (
          <></>
        )}
      </S.List>
    </S.Navigation>
  );
};

export default Navigation;
