import Header from "../components/Header";
import About from "../screen/About";
import ContactMe from "../screen/ContactMe";
import Home from "../screen/Home";
import Notes from "../screen/Notes";
import Products from "../screen/Products";
import style from "../styles/App.module.less";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <div className={style.backImage}/>
    <div className={style.app}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactMe />} />
        <Route exact path="/products/notes" element={<Notes />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
