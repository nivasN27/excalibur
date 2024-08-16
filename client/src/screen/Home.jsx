import Footer from "../components/Footer";
import style from "./less/home.module.less";
import pic from "../assets/images/home/avatar.webp";
import emoji from "../assets/images/home/emoji.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import cv from "../assets/data/cv.pdf";
import { contactNumber } from "../utils/constant";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.intro}>
        <div className={style.leftContent}>
          <div className={style.title}>
            <img src={emoji} className={style.emoji} />
            <h1>Hey, I'm Nivash</h1>
          </div>
          <h1>Frontent Developer.</h1>
          <p>
          I specialize in designing and building responsive, user-friendly web interfaces using HTML, CSS, and JavaScript. My expertise lies in transforming ideas into seamless, interactive experiences that are intuitive, accessible, and visually appealing across all devices. I am committed to delivering high-quality code and exceptional user experiences.
          </p>
          <div className={style.cvBtnWrapper}>
            <a href={cv} download="Nivash N.pdf">
              <button className={style.cvBtn}>Download CV</button>
            </a>
          </div>
          <div className={style.iconWrapper}>
            <a
              href="https://www.linkedin.com/in/nivash-n-272a43235/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
            </a>
            <a href="mailto:nivashnandha27@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${contactNumber}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
            </a>
            <a href="https://github.com/nivasN27" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={style.icon} />
            </a>
            <a href="https://www.instagram.com/nivash_nandhakumar?igsh=MTBtZXJzMm51NXJlaA==" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className={style.icon} />
            </a>
            </div>
        </div>
        <div className={style.rightContent}>
          <img src={pic} className={style.pic} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;