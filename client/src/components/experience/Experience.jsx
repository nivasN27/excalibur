import style from './experience.module.less'

const expData = [
  {
    company: "Amphisoft technologies Pvt.Ltd",
    position: 'Frontend Developer',
    expYear: '1Y',
    content:
      "I have been working as a Frontend Developer at Amphisoft Technologies Pvt Ltd for the past year. During this time, I have contributed to the development of user-friendly, responsive web applications using modern frontend technologies. My responsibilities include translating design mockups into fully functional interfaces, optimizing performance across various devices and browsers, and collaborating closely with backend developers and UI/UX designers to ensure seamless integration and a consistent user experience. My role has also involved maintaining and improving existing codebases, as well as staying up-to-date with industry trends to implement best practices in our projects.",
    duration: "2023-2024",
  }
];


const Experience = () => {
  return (
    <div className={style.experienceContainer}>
      <div className={style.expMapContainer}>
        {expData.map((ele, idx) => (
          <div key={`exp${idx}`} className={style.expWrapper}>
            <h2>{ele.company}</h2>
            <h3>{ele.position} <span>({ele.expYear})</span></h3>
            <p>{ele.content}</p>
            <p className={style.expDuration}>{ele.duration}</p>
          </div>
        ))}

        <div className={style.verticalLine}></div>
      </div>
    </div>
  );
};
export default Experience;
