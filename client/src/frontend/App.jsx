import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutUs from "../screen/AboutUs";
import Home from "../screen/Home";
import Notes from "../screen/Notes";
import Products from "../screen/Products";
import "../styles/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/products/notes" element={<Notes />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
