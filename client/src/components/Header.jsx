import style from "./less/header.module.less";
import logo from '../assets/images/app/logo.webp';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Home')
  const [showProfile, stShowProfile] = useState(false);
  const menu = ['Home', 'Products', 'About'];

  useEffect(() => {
    const path = window.location.pathname.split('/').slice(1)[0];
    if(path.length > 0){
      setActive(path.charAt(0).toUpperCase() + path.slice(1))
    }
  }, [])

  const handleClick = (ele) => {
    setActive(ele);
    navigate(`/${ele.toLowerCase()}`);
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <img src={logo} className={style.logo} onClick={() => stShowProfile(!showProfile)}/>
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
        <button className={style.btn}>contact me</button>
        </div>
      </div>
      {
        showProfile && (
          <div className={style.showProfileContainer} onClick={() => stShowProfile(!showProfile)}>
            <img src={logo} className={style.showProfile}/>
          </div>
        )
      }
    </>
  );
};

export default Header;
