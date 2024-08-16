import style from "./less/header.module.less";
import logo from '../assets/images/app/logo.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Home')
  const menu = ['Home', 'Products', 'About', 'contact'];
  const handleClick = (ele) => {
    setActive(ele);
    navigate(`/${ele.toLowerCase().replace(/\s+/g, '')}`);
  }
  const showProfile = () => {
    <></>
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <img src={logo} className={style.logo} onClick={() => showProfile()}/>
          <h2 className={style.title}>Nivash Nandhakumar</h2>
        </div>
        <div className={style.menuContainer}>
          {
            menu.map((ele, idx) => (
              <p
                className={`${style.menu} ${active === ele && style.active}`}
                key={idx}
                onClick={() => handleClick(ele)}
              >
                {ele}
              </p>
            ))
          }
        <button className={style.btn}>login</button>
        </div>
      </div>
    </>
  );
};

export default Header;
