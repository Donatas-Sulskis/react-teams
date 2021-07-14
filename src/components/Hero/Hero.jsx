import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.style";

const Hero = ({ children }) => {
  return (
    <S.Hero>
      <S.Title>{children}</S.Title>
    </S.Hero>
  );
};

Hero.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Hero;
