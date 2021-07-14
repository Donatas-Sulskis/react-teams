import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80%;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1440px) {
    &::after {
      content: "";
      flex: 0 30%;
    }
  }
`;

export const Success = styled.h2`
  color: rgb(0, 128, 0);
  text-align: center;
  width: 100%;
`;

export const VotingError = styled.span`
  color: rgb(255, 0, 0);
  text-align: center;
  width: 100%;
`;

export const Error = styled.h2`
  color: rgb(255, 0, 0);
  margin: 5.5rem auto;
  text-align: center;
  width: 80%;
`;

export const Card = styled.div`
  border: 1px solid #eee;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem 0;
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1440px) {
    width: 30%;
    &::after {
      content: "";
      flex: auto;
    }
  }
`;

export const Image = styled.img`
  height: 10rem;
`;

export const Score = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Add = styled.button`
  background-color: rgb(0, 128, 0);
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  padding: 0.2rem 2rem;
`;

export const Subtract = styled.button`
  background-color: rgb((238, 238, 238));
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  padding: 0.2rem 2rem;
`;
