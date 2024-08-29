import Footer from "../components/Footer";
import style from "./less/about.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faCode, faBusinessTime, faHeart } from "@fortawesome/free-solid-svg-icons";
import Education from "../components/education/Education";
import Skill from "../components/skill/Skill";
import Experience from "../components/experience/Experience";
import Hobby from "../components/hobby/Hobby";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.title}>
        <FontAwesomeIcon icon={faUserGraduate} className={style.icon} />
        <h1>Education</h1>
      </div>
      <Education />
    <div className={style.title}>
      <FontAwesomeIcon icon={faCode}  className={style.icon} />
      <h1>Skills</h1>
      </div>
      <Skill />
      <div className={style.title}>
        <FontAwesomeIcon icon={faBusinessTime} className={style.icon} />
        <h1>Experience</h1>
      </div>
      <Experience />
      <div className={style.title}>
        <FontAwesomeIcon icon={faHeart} className={style.icon} />
        <h1>Hobby</h1>
      </div>
      <Hobby />
      <Footer condition={true} />
    </div>
  );
};

export default About;
