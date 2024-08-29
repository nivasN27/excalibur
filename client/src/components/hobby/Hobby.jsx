import style from './hobby.module.less';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import {  faRoute, faChess  } from "@fortawesome/free-solid-svg-icons";

const hobbyData = [
  {
    name: 'Travelling',
    icon: faRoute
  },
  {
    name: 'Playing Chess',
    icon: faChess
  },
  {
    name: 'surfing the Internet',
    icon: faInternetExplorer
  },
]

const Hobby = () => {
  return (
    <div className={style.hobbyContainer}>
      <div className={style.hobbyWrapper}>
        {
          hobbyData.map((ele, idx) => (
            <div className={style.hobby} key={`hobby${idx}`}>
              <FontAwesomeIcon icon={ele.icon} className={style.icon} />
              <p>{ele.name}</p>
              {
                idx !== hobbyData.length - 1 && (
                  <p>|</p>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default Hobby;