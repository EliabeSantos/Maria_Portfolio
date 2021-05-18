import {
  MainContainer,
  IconContainer,
  ExpBarr,
  InnerExpBarr,
  ExpText,
} from "./style";
import { AiFillHtml5, AiFillGitlab } from "react-icons/ai";
import { FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import { IoIosColorPalette } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { from } from "rxjs";
// ..
AOS.init();

const MyResumeCard = ({ icon, exp }) => {
  return (
    <>
      <MainContainer data-aos="fade-right">
        <IconContainer>
          {icon === "ps" && <DiPhotoshop />}
          {icon === "ca" && <SiCanva />}
          {icon === "co" && <IoIosColorPalette />}
          {icon === "react" && <FaReact />}
          {icon === "python" && <FaPython />}
          {icon === "git" && <AiFillGitlab />}
        </IconContainer>
        <ExpBarr>
          <InnerExpBarr exp={exp}></InnerExpBarr>
        </ExpBarr>
        <ExpText>{exp}</ExpText>
      </MainContainer>
    </>
  );
};

export default MyResumeCard;
