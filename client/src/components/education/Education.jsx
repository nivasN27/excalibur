import style from './education.module.less'
import clgLogo from '../../assets/images/about/clgLogo.webp'
import sclLogo from '../../assets/images/about/sclLogo.webp'

const eduData = [
  {
    class: "SSLC",
    duration: "2017-2018",
    institution: "The Modern Academy Matric Hr.Sec School",
    institutionAdd: "N.Pudupatti, Namakkal",
    institutionLink: "http://themodernacademy.net/",
    institutionLogo: sclLogo,
    style: "leftContent",
  },
  {
    class: "Hsc",
    duration: "2018-2020",
    institution: "The Modern Academy Matric Hr.Sec School",
    institutionAdd: "N.Pudupatti, Namakkal",
    institutionLink: "http://themodernacademy.net/",
    institutionLogo: sclLogo,
    style: "rightContent",
  },
  {
    class: "B.E, Electronics and Communication Engineering",
    duration: "2020-2024",
    institution: "VSB Engineering College",
    institutionAdd: "Karudayampalayam, Karur",
    institutionLink: "https://www.vsbec.com/",
    institutionLogo: clgLogo,
    style: "leftContent",
  },
];

const Education = () => {
  return (
    <div className={style.educationContainer}>
      <h1>Education</h1>
      <div className={style.eduMapContainer}>
        {eduData.map((ele, ind) => (
          <div
            key={`edu${ind}`}
            className={`${style.eduMapWrapper} ${
              ele.style === "rightContent" && style.rightContent
            }`}
          >
            <div className={style.eduContent}>
              <p className={style.class}>{ele.class}</p>
              <p>{ele.duration}</p>
              <p>{ele.institution}</p>
              <p>{ele.institutionAdd}</p>
            </div>
            <div className={style.eduLogoWrapper}>
              <a href={ele.institutionLink} target='_blank'>
              <img src={ele.institutionLogo} className={style.eduLogo} />
              </a>
            </div>
          </div>
        ))}
        <div className={style.verticalLine}></div>
      </div>
    </div>
  );
};
export default Education;
