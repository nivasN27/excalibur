import style from './skill.module.less'
import c from '../../assets/images/about/c.webp'
import py from '../../assets/images/about/py.webp'
import htmlCss from '../../assets/images/about/htmlCss.webp'
import js from '../../assets/images/about/js.webp'
import react from '../../assets/images/about/react.webp'
import express from '../../assets/images/about/express.webp'
import konva from '../../assets/images/about/konva.webp'
import sql from '../../assets/images/about/sql.webp'

const skillData = [
  {
    name: 'C',
    logo: c
  }, 
  {
    name: 'Python',
    logo: py
  }, 
  {
    name: 'HTML & CSS',
    logo: htmlCss
  }, 
  {
    name: 'Javascript',
    logo: js
  }, 
  {
    name: 'React',
    logo: react
  }, 
  {
    name: 'Express Js',
    logo: express
  }, 
  {
    name: 'Konva Js',
    logo: konva
  }, 
  {
    name: 'SQL',
    logo: sql
  }
]

const Skill = () => {
  return (
    <div className={style.SkillContainer}>
    <h1>Skills</h1>
    <div className={style.SkillWrapper}>
      {
        skillData.map((ele, ind) => (
          <div 
            key={`skill${ind}`}
            className={style.skillCard}
          >
            <div className={style.skillLogoWrapper}>
            <img src={ele.logo} className={style.skillLogo}/>
            </div>
            <p className={style.skill}>{ele.name}</p>
          </div>
        ))
      }
    </div>
  </div>
  );
};
export default Skill;
