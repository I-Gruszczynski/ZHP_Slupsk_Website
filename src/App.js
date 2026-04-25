import "./App.css";
import { useEffect, useRef } from "react";

import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import News from "./components/news/News";
import NewsDetails from "./components/news/NewsDetails";
import AdminPanel from "./components/adminPanel/adminPanel";
import LoginModal from "./components/loginModal/loginModal";

function App() {
  const backgroundBlack = useRef();
  const appHeader = useRef();
  const backgroundTitle = useRef();
  const backgroundTitleBottom = useRef();

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (backgroundBlack) {
          const y = 0.8 - window.scrollY / 500;
          const x = 1 - window.scrollY / 150;
          backgroundBlack.current.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${
            1 - y
          })`;
          appHeader.current.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${
            1 - y * 2
          })`;
          backgroundTitle.current.style.color = `rgba(${255}, ${255}, ${255}, ${
            1 + x
          })`;
          backgroundTitleBottom.current.style.color = `rgba(${255}, ${255}, ${255}, ${
            1 + x
          })`;
        }
      },
      [backgroundBlack],
    );
  });

  return (
    <div className="App">
      <div className="App-background">
        <h1 ref={backgroundTitle} className="App-background-title">
          Osobisty blog podróżniczy
        </h1>
        <h3 ref={backgroundTitleBottom} className="App-background-title-bottom">
          Igor Gruszczyński
        </h3>
        <img src={"./images/Image_20250320075007.jpg"} alt="Background" />

        <div ref={backgroundBlack} className="App-background-black">
          <header ref={appHeader} className="App-header">
            <Header />
          </header>
        </div>
      </div>
      <div className="App-context">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/main" element={<News />} />
          <Route path="/main/country/:countryName" element={<News />} />
          <Route path="/country/:countryName" element={<News />} />
          <Route path="/:id" element={<NewsDetails />} />
          <Route path="/main/:id" element={<NewsDetails />} />
          <Route
            path="/main/country/:countryName/:id"
            element={<NewsDetails />}
          />
          <Route path="/country/:countryName/:id" element={<NewsDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminzhp" element={<LoginModal />} />
          <Route path="/adminzhp/:tokenId" element={<AdminPanel />} />
          <Route path="/adminzhp/:tokenId/:id" element={<AdminPanel />} />
        </Routes>
      </div>
      <div className="App-footer">
        <p>
          Prawa autorskie © 2025 Igor Gruszczyński. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </div>
  );
}

export default App;
