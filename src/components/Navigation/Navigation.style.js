import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  background-color: rgba(0, 0, 0, 0.95);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem 0;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.85);
  color: rgb(255, 255, 255);
  font-size: 1.1em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  height: 7rem;
  margin-right: 1rem;
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0;
  width: 80%;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const ListItem = styled.li`
  display: inline;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    text-decoration: underline;
  }
`;
