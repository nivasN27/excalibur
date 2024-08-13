import style from "./less/footer.module.less";
import logo from '../assets/images/app/logo.webp';

const Footer = () => {
  return (
    <>
      <div>
        <p className={style.copyRight}>
        Copyright © 2024 by Nivash | All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
