import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const menuMobile = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navToggle &&
        menuMobile.current &&
        !menuMobile.current.contains(event.target)
      ) {
        setNavToggle(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navToggle]);
  return (
    <nav>
      <div className="App-header-logo">
        <Link to="/">
          <img src="/images/logoZHP.png" alt="Logo ZHP" height={60} />
        </Link>
      </div>

      <div className="App-header-menu-mobile" ref={menuMobile}>
        <button
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={() => {
            setNavToggle((prev) => !prev);
          }}
        >
          {navToggle ? (
            <MdClose
              style={{
                width: "36px",
                height: "36px",
                color: "white",
              }}
            />
          ) : (
            <FiMenu
              style={{
                width: "36px",
                height: "36px",
                color: "white",
              }}
            />
          )}
        </button>

        <ul className={`menu-nav${navToggle ? " show-menu" : " close-menu"}`}>
          <Link to="/" className="App-header-menu-mobile-list">
            <li className="App-header-menu-mobile-list-li">Aktualności</li>
          </Link>
          <Link to="/about" className="App-header-menu-mobile-list">
            <li className="App-header-menu-mobile-list-li">O nas</li>
          </Link>
          <Link to="/activity" className="App-header-menu-mobile-list">
            <li className="App-header-menu-mobile-list-li">Działalność</li>
          </Link>
          <Link to="/contact" className="App-header-menu-mobile-list">
            <li className="App-header-menu-mobile-list-li">Kontakt</li>
          </Link>
        </ul>
      </div>
      <div className="App-header-menu">
        <ul>
          <li>
            <Link to="./" className="App-header-menu-list">
              Aktualności
            </Link>
          </li>
          <li>
            <Link to="/about" className="App-header-menu-list">
              O nas
            </Link>
          </li>
          <li>
            <Link className="App-header-menu-list-disable">Działalność</Link>
          </li>
          <li>
            <Link to="/contact" className="App-header-menu-list">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
