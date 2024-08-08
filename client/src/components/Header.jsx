import style from "./less/header.module.less";
import logo from '../assets/images/app/logo.webp';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Home')
  const menu = ['Home', 'Products', 'About us'];
  const handleClick = (ele) => {
    setActive(ele);
    navigate(`/${ele.toLowerCase().replace(/\s+/g, '')}`);
  }
  return (
    <>
      <div className={style.container}>
        <div>
          <img src={logo} className={style.logo} onClick={() => navigate('/')}/>
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
        </div>
        <button className={style.btn}>Login</button>
      </div>
    </>
  );
};

export default Header;
