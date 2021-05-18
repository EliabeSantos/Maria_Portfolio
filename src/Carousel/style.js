import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  a {
    text-decoration: none;
    :hover {
      cursor: pointer;
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      transition: 1s ease;
    }
  }
  @media (max-width: 400px) {
    margin: 10vh 0 0 0;
    height: 40vh;
  }
`;
export const ItemImg = styled.img`
  width: 100px;
`;
