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
  CarouselContainer,
} from "./style";
import MyPhoto from "./images/Profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import TextAnimation from "react-animate-text";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Header from "./Header";
import MyResumeCard from "./MyResumeCard";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
                    href={"https://api.whatsapp.com/send?phone=55+41+97646043"}
                  >
                    <IoLogoWhatsapp />
                  </a>
                </Contact>
                <Contact>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/maria-petra-422484211"
                  >
                    <AiFillLinkedin />
                  </a>
                </Contact>
                <Contact>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/mariah_petrah/"
                  >
                    <AiFillInstagram />
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
              Designer de Marketing Tenho 18 anos, brasileira e vivo no Paraná. 
              Comecei no Design em 2016 fazendo capas e edições para livros
              online. Em 2020 iniciei na área de propaganda onde comecei a
              trabalhar de vez como autônoma.  Utilizo as ferramentas Figma e
              Canva onde consigo expressar melhor minha forma de trabalho, tendo
              liberdade para explorar a minha criatividade. Em meus trabalhos
              busco me especializar e melhorar ainda mais na área. 
            </AboutMeText>
          </AboutMeInfoContainer>
        </AboutMeContainer>
        <MyResumeContainer>
          <ResumeTitle>My Resume</ResumeTitle>
          <CardsContainer>
            <MyResumeCard icon={"ps"} exp="40%" />
            <MyResumeCard icon={"ca"} exp="90%" />
            <MyResumeCard icon={"co"} exp="85%" />
          </CardsContainer>
        </MyResumeContainer>
        <PortfolioContainer>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <CarouselContainer>
            <Carousel />
          </CarouselContainer>
        </PortfolioContainer>
      </MainContainer>
    </>
  );
};

export default App;
