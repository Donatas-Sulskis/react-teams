import styled from "styled-components";

export const Form = styled.form`
  background-color: rgb(243, 243, 243);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 6rem 0;
`;

export const Success = styled.h2`
  color: rgb(0, 128, 0);
  text-align: center;
`;

export const Error = styled.span`
  color: rgb(255, 0, 0);
  text-align: center;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid rgb(215, 215, 215);
  box-sizing: border-box;
  color: rgb(78, 78, 78);
  display: block;
  margin: 0rem auto 1.5rem auto;
  padding: 0.8rem;
  width: 80%;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: rgb(236, 70, 19);
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: block;
  font-weight: 600;
  margin: 0 auto 1.5rem auto;
  padding: 0.8rem;
  width: 80%;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
