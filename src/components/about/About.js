import { useRef, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();

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

  const handleCountryClick = (countryName) => {
    navigate(`/country/${encodeURIComponent(countryName)}`);
  };

  return (
    <div className="aboutMain">
      <div className="aboutMain-header">
        <h1>Zwiedzone kraje</h1>
        <hr />
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
            Europa
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
            Azja
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
            Ameryka
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
            Afryka
          </li>
        </ul>
        <div className="aboutMain-slider" ref={sliderRef}></div>
      </div>
      <div className="aboutMain-context">
        {komendaHufca && (
          <div className="aboutMain-context-komendaHufca">
            <h1>Europa</h1>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Hiszpania")}
            >
              <img src="./images/Flag_of_Spain.svg.png" alt="Flag of Spain" />
              <p>Hiszpania</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Portugalia")}
            >
              <img
                src="./images/Flag_of_Portugal.svg.png"
                alt="Flag of Portugal"
              />
              <p>Portugalia</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Gibraltar")}
            >
              <img
                src="./images/Flag_of_Gibraltar.svg.png"
                alt="Flag of Gibraltar"
              />
              <p>Gibraltar</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Belgia")}
            >
              <img
                src="./images/Flag_of_Belgium.svg.png"
                alt="Flag of Belgium"
              />
              <p>Belgia</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Finlandia")}
            >
              <img
                src="./images/Flag_of_Finland.svg.png"
                alt="Flag of Finland"
              />
              <p>Finlandia</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Norwegia")}
            >
              <img src="./images/Flag_of_Norway.svg.png" alt="Flag of Norway" />
              <p>Norwegia</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Czarnogóra")}
            >
              <img
                src="./images/Flag_of_Montenegro.svg.png"
                alt="Flag of Montenegro"
              />
              <p>Czarnogóra</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Serbia")}
            >
              <img src="./images/Flag_of_Serbia.svg.png" alt="Flag of Serbia" />
              <p>Serbia</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Rumunia")}
            >
              <img
                src="./images/Flag_of_Romania.svg.png"
                alt="Flag of Romania"
              />
              <p>Rumunia</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Włochy")}
            >
              <img src="./images/Flag_of_Italy.svg.png" alt="Flag of Italy" />
              <p>Włochy</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Bułgaria")}
            >
              <img
                src="./images/Flag_of_Bulgaria.svg.png"
                alt="Flag of Bulgaria"
              />
              <p>Bułgaria</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Francja")}
            >
              <img src="./images/Flag_of_France.svg.png" alt="Flag of France" />
              <p>Francja</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Austria")}
            >
              <img
                src="./images/Flag_of_Austria.svg.png"
                alt="Flag of Austria"
              />
              <p>Austria</p>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        )}
        {komisjaRewizyjna && (
          <div className="aboutMain-context-komisjaRewizyjna">
            <h1>Azja</h1>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Chiny")}
            >
              <img
                src="./images/Flag_of_the_People's_Republic_of_China.svg.png"
                alt="Flag of China"
              />
              <p>Chiny</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Japonia")}
            >
              <img src="./images/Flag_of_Japan.svg.png" alt="Flag of Japan" />
              <p>Japonia</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Zjednoczone Emiraty Arabskie")}
            >
              <img
                src="./images/Flag_of_the_United_Arab_Emirates.svg.png"
                alt="Flag of United Arab Emirates"
              />
              <p>Zjednoczone Emiraty Arabskie</p>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        )}
        {jednostki && (
          <div className="aboutMain-context-jednostki">
            <h1>Ameryka</h1>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Stany Zjednoczone")}
            >
              <img
                src="./images/Flag_of_the_United_States.svg.png"
                alt="Flag of United States"
              />
              <p>Stany Zjednoczone</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Puerto Rico")}
            >
              <img
                src="./images/Flag_of_Puerto_Rico.svg.png"
                alt="Flag of Puerto Rico"
              />
              <p>Puerto Rico</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Jamajka")}
            >
              <img
                src="./images/Flag_of_Jamaica.svg.png"
                alt="Flag of Jamaica"
              />
              <p>Jamajka</p>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        )}
        {zespolyInstruktorskie && (
          <div className="aboutMain-context-zespoly">
            <h1>Afryka</h1>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Maroko")}
            >
              <img
                src="./images/Flag_of_Morocco.svg.png"
                alt="Flag of Morocco"
              />
              <p>Maroko</p>
            </div>
            <div
              className="aboutMain-context-country"
              onClick={() => handleCountryClick("Tunezja")}
            >
              <img
                src="./images/Flag_of_Tunisia.svg.png"
                alt="Flag of Tunisia"
              />
              <p>Tunezja</p>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
