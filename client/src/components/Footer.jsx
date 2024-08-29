import style from "./less/footer.module.less";

const Footer = ({ condition = false}) => {
  return (
    <>
      <div className={style.footer}>
        <p className={condition ? style.copyRight : style.fixedCopyRight}>
        Copyright © 2024 by Nivash | All Rights Reserved.
        </p>
      </div>  
    </>
  );
};

export default Footer;
