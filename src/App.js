import {
  MainContainer,
  ProfileContainer,
  InfoContainer,
  InfoTitles,
  ContactContainer,
  Contact,
  InfoImg,
  AboutMeContainer,
  AboutMeInfoContainer,
  AboutMeTitle,
  AboutMeDescription,
  AboutMeText,
  MyResumeContainer,
  ResumeTitle,
  CardsContainer,
  PortfolioContainer,
  PortfolioTitle,
  Ocean,
  Wave,
} from "./style";
import MyPhoto from "./images/Profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import TextAnimation from "react-animate-text";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "./Header";
import MyResumeCard from "./MyResumeCard";
AOS.init();

const App = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <ProfileContainer>
          <div id="particles-js"></div>
          <InfoContainer data-aos="fade-up">
            <InfoImg src={MyPhoto} />
            <TextAnimation>
              <InfoTitles>Maria Petra</InfoTitles>
              <InfoTitles>Professional Designer</InfoTitles>
              <ContactContainer>
                <Contact>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={"https://api.whatsapp.com/send?phone=55+41+997646043"}
                  >
                    <IoLogoWhatsapp />
                  </a>
                </Contact>
                <Contact>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={"https://api.whatsapp.com/send?phone=55+41+997646043"}
                  >
                    <IoLogoWhatsapp />
                  </a>
                </Contact>
              </ContactContainer>
            </TextAnimation>
          </InfoContainer>
        </ProfileContainer>
        <AboutMeContainer>
          <AboutMeInfoContainer>
            <AboutMeTitle
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              About Me
            </AboutMeTitle>
            <AboutMeDescription
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              I am a Marketing Professional Designer
            </AboutMeDescription>
            <AboutMeText
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Descricao da mulher mais incrivel do mundo, feliz um ano de
              namoro! eu te amo demais sua linda do krl slc.
            </AboutMeText>
          </AboutMeInfoContainer>
        </AboutMeContainer>
        <MyResumeContainer>
          <ResumeTitle>My Resume</ResumeTitle>
          <CardsContainer>
            <MyResumeCard icon={"html"} exp="100%" />
            <MyResumeCard icon={"css"} exp="90%" />
            <MyResumeCard icon={"js"} exp="100%" />
            <MyResumeCard icon={"react"} exp="85%" />
            <MyResumeCard icon={"python"} exp="40%" />
            <MyResumeCard icon={"git"} exp="100%" />
          </CardsContainer>
        </MyResumeContainer>
        <PortfolioContainer>
          <PortfolioTitle>Portfolio</PortfolioTitle>
        </PortfolioContainer>
      </MainContainer>
    </>
  );
};

export default App;
