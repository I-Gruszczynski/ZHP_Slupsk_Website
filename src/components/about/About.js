import { useRef, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./about.css";

const About = () => {
  const sliderRef = useRef();

  const [komendaHufca, setKomendaHufca] = useState(true);
  const [komisjaRewizyjna, setKomisjaRewizyjna] = useState(false);
  const [jednostki, setJednostki] = useState(false);
  const [zespolyInstruktorskie, setZespolyIntruktorskie] = useState(false);

  const [komisjaStopniInstr, setKomisjaStopniInstr] = useState(true);
  const [biuroOrganizacji, setBiuroOrganizacji] = useState(false);
  const [promocja, setPromocja] = useState(false);
  const [kapitulaStopni, setKapitulaStopni] = useState(false);
  const [zespolKadry, setZespolKadry] = useState(false);
  const [namiestnictwa, setNamiestnictwa] = useState(false);

  return (
    <div className="aboutMain">
      <div className="aboutMain-header">
        <h1>O nas</h1>
        <hr />
        <p>Hufiec ZHP Ziemi Słupskiej</p>
      </div>
      <div className="aboutMain-nav">
        <ul>
          <li
            onClick={() => {
              setKomendaHufca(true);
              setKomisjaRewizyjna(false);
              setJednostki(false);
              setZespolyIntruktorskie(false);
              sliderRef.current.style.transform = "translateX(0%)";
            }}
          >
            Komenda Hufca
          </li>
          <li
            onClick={() => {
              setKomendaHufca(false);
              setKomisjaRewizyjna(true);
              setJednostki(false);
              setZespolyIntruktorskie(false);
              sliderRef.current.style.transform = "translateX(100%)";
            }}
          >
            Komisja Rewizyjna
          </li>
          <li
            onClick={() => {
              setKomendaHufca(false);
              setKomisjaRewizyjna(false);
              setJednostki(true);
              setZespolyIntruktorskie(false);
              sliderRef.current.style.transform = "translateX(200%)";
            }}
          >
            Jednostki
          </li>
          <li
            onClick={() => {
              setKomendaHufca(false);
              setKomisjaRewizyjna(false);
              setJednostki(false);
              setZespolyIntruktorskie(true);
              sliderRef.current.style.transform = "translateX(300%)";
            }}
          >
            Zespoły instruktorskie
          </li>
        </ul>
        <div className="aboutMain-slider" ref={sliderRef}></div>
      </div>
      <div className="aboutMain-context">
        {komendaHufca && (
          <div className="aboutMain-context-komendaHufca">
            <div className="aboutMain-context-komendaHufca-main">
              <h1>Komendantka Hufca Ziemi Słupskiej</h1>
              <BsPersonCircle size={320} color="#000069" />
              <h1>Natalia Przybyszewska</h1>
              <h3>email: nataprzy@gmail.com</h3>
            </div>

            <div className="aboutMain-context-komendaHufca-rest">
              <div className="aboutMain-context-komendaHufca-rest-box">
                <BsPersonCircle size={320} color="#000069" />
                <p>Natalia Przybyszewska</p>
                <p>email: nataprzy@gmail.com</p>
              </div>
              <div className="aboutMain-context-komendaHufca-rest-box">
                <BsPersonCircle size={320} color="#000069" />
                <p>Natalia Przybyszewska</p>
                <p>email: nataprzy@gmail.com</p>
              </div>
              <div className="aboutMain-context-komendaHufca-rest-box">
                <BsPersonCircle size={320} color="#000069" />
                <p>Natalia Przybyszewska</p>
                <p>email: nataprzy@gmail.com</p>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        )}
        {komisjaRewizyjna && (
          <div className="aboutMain-context-komisjaRewizyjna">
            <div className="aboutMain-context-zespoly-main-context-mainImage">
              <h1>Komendantka Hufca Ziemi Słupskiej</h1>
              <BsPersonCircle size={320} color="#000069" />
              <h1>Natalia Przybyszewska</h1>
              <h3>email: nataprzy@gmail.com</h3>
            </div>

            <div className="aboutMain-context-zespoly-main-context-restImage">
              <div className="aboutMain-context-zespoly-main-context-restImage-box">
                <BsPersonCircle size={320} color="#000069" />
                <p>Natalia Przybyszewska</p>
                <p>email: nataprzy@gmail.com</p>
              </div>
              <div className="aboutMain-context-zespoly-main-context-restImage-box">
                <BsPersonCircle size={320} color="#000069" />
                <p>Natalia Przybyszewska</p>
                <p>email: nataprzy@gmail.com</p>
              </div>

              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        )}
        {jednostki && (
          <div className="aboutMain-context-jednostki">
            <div className="aboutMain-context-jednostki-szczepy">
              <h1>Szczepy</h1>
              <div className="aboutMain-context-jednostki-szczepy-main">
                <div className="aboutMain-context-jednostki-szczepy-main-box">
                  <BsPersonCircle size={200} color="#000069" />
                  <p>Szczep Ognia</p>
                </div>
                <div className="aboutMain-context-jednostki-szczepy-main-box">
                  <BsPersonCircle size={200} color="#000069" />
                  <p>Szczep Wody</p>
                </div>
                <div className="aboutMain-context-jednostki-szczepy-main-box">
                  <BsPersonCircle size={200} color="#000069" />
                  <p>Szczep Ziemi</p>
                </div>
                <div className="aboutMain-context-jednostki-szczepy-main-box">
                  <BsPersonCircle size={200} color="#000069" />
                  <p>Szczep Wiatru</p>
                </div>
                <div className="aboutMain-context-jednostki-szczepy-main-box">
                  <BsPersonCircle size={200} color="#000069" />
                  <p>Szczep Avatara</p>
                </div>
                <div style={{ clear: "both" }}></div>
              </div>
            </div>
            <hr />
            <div className="aboutMain-context-jednostki-main">
              <h1>Jednostki</h1>
              <div className="aboutMain-context-jednostki-main-boxes">
                <div className="aboutMain-context-jednostki-main-boxes-box">
                  <h1>Jednostka Strzelca</h1>
                  <p>Drużynowa</p>
                  <p>pwd. Weronika Połomska</p>
                  <p>waero@gmail.com</p>
                  <p>Miejsce działania: Gdańsk</p>
                </div>
                <div className="aboutMain-context-jednostki-main-boxes-box">
                  <h1>Jednostka Strzelca</h1>
                  <p>Drużynowa</p>
                  <p>pwd. Weronika Połomska</p>
                  <p>waero@gmail.com</p>
                  <p>Miejsce działania: Gdańsk</p>
                </div>
                <div className="aboutMain-context-jednostki-main-boxes-box">
                  <h1>Jednostka Strzelca</h1>
                  <p>Drużynowa</p>
                  <p>pwd. Weronika Połomska</p>
                  <p>waero@gmail.com</p>
                  <p>Miejsce działania: Gdańsk</p>
                </div>
                <div className="aboutMain-context-jednostki-main-boxes-box">
                  <h1>Jednostka Strzelca</h1>
                  <p>Drużynowa</p>
                  <p>pwd. Weronika Połomska</p>
                  <p>waero@gmail.com</p>
                  <p>Miejsce działania: Gdańsk</p>
                </div>
                <div className="aboutMain-context-jednostki-main-boxes-box">
                  <h1>Jednostka Strzelca</h1>
                  <p>Drużynowa</p>
                  <p>pwd. Weronika Połomska</p>
                  <p>waero@gmail.com</p>
                  <p>Miejsce działania: Gdańsk</p>
                </div>
                <div className="aboutMain-context-jednostki-main-boxes-box">
                  <h1>Jednostka Strzelca</h1>
                  <p>Drużynowa</p>
                  <p>pwd. Weronika Połomska</p>
                  <p>waero@gmail.com</p>
                  <p>Miejsce działania: Gdańsk</p>
                </div>
                <div style={{ clear: "both" }}></div>
              </div>
            </div>
          </div>
        )}
        {zespolyInstruktorskie && (
          <div className="aboutMain-context-zespoly-main">
            <div className="aboutMain-context-zespoly-main-list">
              <ul>
                <li
                  className={
                    komisjaStopniInstr === true
                      ? "aboutMain-context-zespoly-main-list-li-active"
                      : "aboutMain-context-zespoly-main-list-li"
                  }
                  onClick={(e) => {
                    setKomisjaStopniInstr(true);
                    setBiuroOrganizacji(false);
                    setPromocja(false);
                    setKapitulaStopni(false);
                    setZespolKadry(false);
                    setNamiestnictwa(false);
                  }}
                >
                  Komisja Stopni Instruktorskich
                </li>
                <li
                  className={
                    biuroOrganizacji === true
                      ? "aboutMain-context-zespoly-main-list-li-active"
                      : "aboutMain-context-zespoly-main-list-li"
                  }
                  onClick={(e) => {
                    setKomisjaStopniInstr(false);
                    setBiuroOrganizacji(true);
                    setPromocja(false);
                    setKapitulaStopni(false);
                    setZespolKadry(false);
                    setNamiestnictwa(false);
                  }}
                >
                  Biuro Organizacji i Komunikacji
                </li>
                <li
                  className={
                    promocja === true
                      ? "aboutMain-context-zespoly-main-list-li-active"
                      : "aboutMain-context-zespoly-main-list-li"
                  }
                  onClick={(e) => {
                    setKomisjaStopniInstr(false);
                    setBiuroOrganizacji(false);
                    setPromocja(true);
                    setKapitulaStopni(false);
                    setZespolKadry(false);
                    setNamiestnictwa(false);
                  }}
                >
                  Promocja
                </li>
                <li
                  className={
                    kapitulaStopni === true
                      ? "aboutMain-context-zespoly-main-list-li-active"
                      : "aboutMain-context-zespoly-main-list-li"
                  }
                  onClick={(e) => {
                    setKomisjaStopniInstr(false);
                    setBiuroOrganizacji(false);
                    setPromocja(false);
                    setKapitulaStopni(true);
                    setZespolKadry(false);
                    setNamiestnictwa(false);
                  }}
                >
                  Kapituła Stopni Wędrowniczych
                </li>
                <li
                  className={
                    zespolKadry === true
                      ? "aboutMain-context-zespoly-main-list-li-active"
                      : "aboutMain-context-zespoly-main-list-li"
                  }
                  onClick={(e) => {
                    setKomisjaStopniInstr(false);
                    setBiuroOrganizacji(false);
                    setPromocja(false);
                    setKapitulaStopni(false);
                    setZespolKadry(true);
                    setNamiestnictwa(false);
                  }}
                >
                  Zespół Kadry Kształcącej
                </li>
                <li
                  className={
                    namiestnictwa === true
                      ? "aboutMain-context-zespoly-main-list-li-active"
                      : "aboutMain-context-zespoly-main-list-li"
                  }
                  onClick={(e) => {
                    setKomisjaStopniInstr(false);
                    setBiuroOrganizacji(false);
                    setPromocja(false);
                    setKapitulaStopni(false);
                    setZespolKadry(false);
                    setNamiestnictwa(true);
                  }}
                >
                  Namiestnictwa
                </li>
              </ul>
            </div>
            {komisjaStopniInstr && (
              <div className="aboutMain-context-zespoly-main-context">
                <h1>Komisja Stopni</h1>
                <div className="aboutMain-context-zespoly-main-context-mainImage">
                  <BsPersonCircle size={320} color="#000069" />
                  <h2>Natalia Przybyszewska</h2>
                  <p>email: nataprzy@gmail.com</p>
                </div>

                <div className="aboutMain-context-zespoly-main-context-restImage">
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>

                  <div style={{ clear: "both" }}></div>
                </div>
              </div>
            )}
            {biuroOrganizacji && (
              <div className="aboutMain-context-zespoly-main-context">
                <h1>Biuro Organizacji</h1>
                <div className="aboutMain-context-zespoly-main-context-mainImage">
                  <BsPersonCircle size={320} color="#000069" />
                  <h2>Natalia Przybyszewska</h2>
                  <p>email: nataprzy@gmail.com</p>
                </div>

                <div className="aboutMain-context-zespoly-main-context-restImage">
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>

                  <div style={{ clear: "both" }}></div>
                </div>
              </div>
            )}
            {promocja && (
              <div className="aboutMain-context-zespoly-main-context">
                <h1>Promocja</h1>
                <div className="aboutMain-context-zespoly-main-context-mainImage">
                  <BsPersonCircle size={320} color="#000069" />
                  <h2>Natalia Przybyszewska</h2>
                  <p>email: nataprzy@gmail.com</p>
                </div>

                <div className="aboutMain-context-zespoly-main-context-restImage">
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>

                  <div style={{ clear: "both" }}></div>
                </div>
              </div>
            )}
            {kapitulaStopni && (
              <div className="aboutMain-context-zespoly-main-context">
                <h1>Kapituła Stopni</h1>
                <div className="aboutMain-context-zespoly-main-context-mainImage">
                  <BsPersonCircle size={320} color="#000069" />
                  <h2>Natalia Przybyszewska</h2>
                  <p>email: nataprzy@gmail.com</p>
                </div>

                <div className="aboutMain-context-zespoly-main-context-restImage">
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>

                  <div style={{ clear: "both" }}></div>
                </div>
              </div>
            )}
            {zespolKadry && (
              <div className="aboutMain-context-zespoly-main-context">
                <h1>Zespół Kadry</h1>
                <div className="aboutMain-context-zespoly-main-context-mainImage">
                  <BsPersonCircle size={320} color="#000069" />
                  <h2>Natalia Przybyszewska</h2>
                  <p>email: nataprzy@gmail.com</p>
                </div>

                <div className="aboutMain-context-zespoly-main-context-restImage">
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>

                  <div style={{ clear: "both" }}></div>
                </div>
              </div>
            )}
            {namiestnictwa && (
              <div className="aboutMain-context-zespoly-main-context">
                <h1>Namiestnictwa</h1>
                <div className="aboutMain-context-zespoly-main-context-mainImage">
                  <BsPersonCircle size={320} color="#000069" />
                  <h2>Natalia Przybyszewska</h2>
                  <p>email: nataprzy@gmail.com</p>
                </div>

                <div className="aboutMain-context-zespoly-main-context-restImage">
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>
                  <div className="aboutMain-context-zespoly-main-context-restImage-box">
                    <BsPersonCircle size={320} color="#000069" />
                    <h2>Natalia Przybyszewska</h2>
                    <p>email: nataprzy@gmail.com</p>
                  </div>

                  <div style={{ clear: "both" }}></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
