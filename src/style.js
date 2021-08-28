import styled from "styled-components";
import image from "./images/back00.jpg";
import image2 from "./images/back01.jpg";
import wave from "./images/wave.svg";

// Header section

export const Header = styled.div`
  width: 100%;
  height: 4rem;

  background-color: #8000db90;
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
`;

// container principal

export const MainContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

// aqui vai o container de apresentacao

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${image});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  width: 20rem;
  height: 20rem;

  border-radius: 10px;
  background-color: #8000db90;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoImg = styled.img`
  width: 10rem;
  height: 10rem;
  border: solid 10px #cccccc90;
  border-radius: 100%;
  margin-bottom: 1rem;
`;

export const InfoTitles = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Contact = styled.p`
  color: white;
  font-size: 35px;
  margin: 1rem 1rem 0 1rem;
  text-decoration: none;
  a {
    text-decoration: none;
    color: white;
  }
  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
  }
`;

// aqui comeca a sessao de aboutme

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #6d2fc2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutMeInfoContainer = styled.div`
  width: 45rem;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const AboutMeTitle = styled.h2`
  font-weight: normal;
  color: #ffffff;
  text-shadow: 0 0 0.25em currentColor;
`;

export const AboutMeDescription = styled.h3`
  font-weight: normal;
  color: white;
`;

export const AboutMeText = styled.p`
  max-width: 600px;
  color: white;
  line-height: 29px;
  padding: 2rem 0 0 0;
  @media (max-width: 680px) {
    font-size: 14px;
  }
`;

//My resume session

export const MyResumeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  overflow: hidden;

  background-image: url(${image2});
  background-size: cover;
  background-position: center;
`;

export const ResumeTitle = styled.h1`
  font-weight: normal;
  color: white;
  padding: 3rem;
  text-shadow: 0 0 0.25em currentColor;
`;

export const CardsContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

//portfolio session

export const PortfolioContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #6d2fc2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  height: 23vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PortfolioTitle = styled.h1`
  font-weight: lighter;
  color: white;
  padding: 3rem;
  text-shadow: 0 0 0.25em currentColor;
`;
