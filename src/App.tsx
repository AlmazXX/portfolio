import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Toolbar from "./components/Toolbar/Toolbar";
import AboutUs from "./contatiners/About us/AboutUs";
import Home from "./contatiners/Home/Home";
import New from "./contatiners/New/New";
import Trick from "./contatiners/Trick/Trick";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollHeader = {
    background: "var(--container-color)",
  };

  const onScroll = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="header"
        style={isScrolled ? scrollHeader : {}}
      >
        <Toolbar />
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/trick" element={<Trick />} />
          <Route path="/new" element={<New />} />
        </Routes>
        <Newsletter />
      </main>
      <footer className="footer section">
        <Footer />
      </footer>
    </>
  );
}

export default App;