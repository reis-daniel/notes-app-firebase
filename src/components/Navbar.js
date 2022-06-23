import React from "react";
// Styling
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarStyled>
      <a href="#">Reisnotes</a>
      <ul>
        <li>
          <a href="#">Recent Notes</a>
        </li>
        <li>
          <a href="#">Notebooks</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
      </ul>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #faedcd;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  a {
  }
  ul {
    display: flex;
    gap: 6rem;
    list-style: none;
  }
  a {
    display: block;
    position: relative;
    text-decoration: none;
    color: #faedcd;
    font-size: 1.5rem;
    font-weight: 300;
    transition: 0.4s all ease-in;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.115em;
      background-color: #ccd5ae;
      transform: translate3d(-101%, 0, 0);
      transition: opacity 600ms, transform 600ms;
    }
    &:hover,
    &:hover::after,
    &:focus::after {
      color: #ccd5ae;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
