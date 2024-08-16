import notesIcon from "../assets/images/notes/notesIcon.png";
import style from "./less/products.module.less";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Products = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("notes");
  };
  return (
    <>
      <div className={style.prductContainerWrapper}>
        <div
          className={style.prductContainer}
          onClickCapture={() => handleClick()}
        >
          <img src={notesIcon} alt="notesIcon" className={style.notesIcon} />
          <div className={style.wordWrapper}>
            <h1 className={style.name}>Keep-notes</h1>
            <p className={style.morals}>
              A cluttered mind leads to a cluttered life. Keep your notes tidy
              and your thoughts clear.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
