import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #6d2fc290;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
  @media (max-width: 600px) {
    justify-content: center;
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: 1s ease-out 0s 1 slideInFromLeft;
`;

export const Titles = styled.h3`
  color: #cd48ff;
  font-weight: normal;
  font-size: 28px;
  width: 70%;
  margin: 0;
  padding-left: 2rem;

  text-shadow: 0 0 0.25em currentColor;
  @media (max-width: 600px) {
    width: auto;
    text-align: center;
    padding: 0;
  }
`;

export const MenuOptions = styled.h3`
  color: white;
  font-weight: normal;
  margin: 0;
  padding: 0 1rem 0 0;
  :hover {
    cursor: pointer;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuOptionsContainer = styled.div`
  width: 30%;

  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    display: none;
  }
  @media (min-width: 600px) and (max-width: 920px) {
    width: 50%;
  }
`;
