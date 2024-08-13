import notesIcon from "../assets/images/notes/notesIcon.png";
import coverImg from "../assets/images/notes/coverImg.png";
import style from "./less/products.module.less";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('notes')
  }
  return (
    <>
      <div className={style.container} onClickCapture={()=> handleClick()}>
        <div className={style.listContainer}>
          <img src={coverImg} className={style.coverImg} />
          <div className={style.content}>
            <img src={notesIcon} alt="notesIcon" className={style.notesIcon} />
            <p className={style.name}>notes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
