import styled from "styled-components";

export const Hero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url("https://cdn.wallpapersafari.com/53/93/aAjJqc.jpg");
  background-size: cover;
  background-position: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 5rem 0;
  margin: 0;
`;

export const Title = styled.h1`
  color: rgb(255, 255, 255);
  margin: 0 auto;
  width: 80%;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 61%;
  }
`;
