import Footer from "../components/Footer";
import style from "./less/about.module.less";
import Education from "../components/education/Education";
import Skill from "../components/skill/Skill";
import Experience from "../components/experience/Experience";

const hobbyData = [
  {
    name: 'surfing the Internet'
  },
  {
    name: 'Playing Chess'
  },
  {
    name: 'Travelling'
  }
]

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <Education />
      <Skill />
      <Experience/>
      <div className={style.hobbyContainer}>
        <h1>Hobby</h1>
        {
          hobbyData.map((ele, idx) => (
            <div>
              <p>{ele.name}</p>
            </div>
          ))
        }
        
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default About;
