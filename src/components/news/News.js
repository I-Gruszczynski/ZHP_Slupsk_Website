import { Link, useParams, useNavigate } from "react-router-dom";
import "./news.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MdAccessTime, MdPerson } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ClipLoader from "react-spinners/ClipLoader";

const News = ({ itemsPerPage }) => {
  const [allNews, setAllNews] = useState([]);
  const navigate = useNavigate();
  const { countryName } = useParams();
  var randomColor = require("randomcolor");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [loading, setLoading] = useState(true);

  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(countryName || "");
  const [availableCountries, setAvailableCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://microtest.toadres.pl/api/news`)
      .then((news) => {
        setAllNews(news.data);
        if (countryName) {
          const filtered = news.data.filter(
            (item) => item.country === countryName,
          );
          setFilteredNews(filtered);
          setSelectedCountry(countryName);
        } else {
          setFilteredNews(news.data);
        }
        setLoading(false);

        const countries = [
          ...new Set(
            news.data
              .filter((item) => item.country)
              .map((item) => item.country),
          ),
        ];
        setAvailableCountries(countries.sort());
      })
      .catch((err) => console.log(err));
  }, [countryName]);

  useEffect(() => {
    if (selectedCountry === "") {
      setFilteredNews(allNews);

      if (countryName) {
        navigate("/", { replace: true });
      }
    } else {
      const filtered = allNews.filter(
        (news) => news.country === selectedCountry,
      );
      setFilteredNews(filtered);

      if (!countryName || selectedCountry !== countryName) {
        navigate(`/country/${encodeURIComponent(selectedCountry)}`, {
          replace: true,
        });
      }
    }
    setCurrentPage(1);
  }, [selectedCountry, allNews, navigate, countryName]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const curretnPost = filteredNews.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(filteredNews.length / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="newsMain">
      <div className="newsMain-header">
        <h1>Aktualności</h1>
        <hr />
        {!loading && filteredNews.length > 0 && (
          <div className="newsMain-filter">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Wszystkie kraje</option>
              {availableCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      {loading && (
        <div className="newsMain-loading">
          <ClipLoader
            color={"blue"}
            loading={loading}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {curretnPost &&
        curretnPost.map((currentNew, i) => {
          const isLast = curretnPost.length - 1 === i;
          return (
            <div className="newsMain-context">
              <div className="newsMain-context-box" key={i}>
                <h1>{currentNew.title}</h1>
                <div className="newsMain-context-box-dateauthor">
                  <MdAccessTime
                    style={{ color: "#aaa", float: "left" }}
                    size={30}
                  />
                  <h3>{new Date(currentNew.createdAt).toLocaleDateString()}</h3>
                </div>
                {currentNew.author && (
                  <div className="newsMain-context-box-dateauthor">
                    <MdPerson
                      style={{ color: "#aaa", float: "left" }}
                      size={30}
                    />
                    <h3>{currentNew.author}</h3>
                  </div>
                )}

                {currentNew.continent && currentNew.country && (
                  <div className="newsMain-context-box-category">
                    <h3 style={{ color: randomColor() }}>
                      {currentNew.continent}
                    </h3>
                    <h3 style={{ color: randomColor() }}>
                      {currentNew.country}
                    </h3>
                  </div>
                )}
                {currentNew.country && !currentNew.continent && (
                  <h3>{currentNew.country}</h3>
                )}

                <div style={{ clear: "both" }}></div>
                {currentNew.image &&
                  currentNew.image.length === 1 &&
                  currentNew.image.map((img) => {
                    return (
                      <img
                        className="newsMain-context-box-image-image"
                        src={`../apitravel/server/public/images/${img.filename}`}
                        alt="brak zdjecia"
                      />
                    );
                  })}

                {currentNew.image && currentNew.image.length !== 1 && (
                  <Carousel autoPlay>
                    {currentNew.image.map((img) => {
                      return (
                        <div>
                          <img
                            className="newsMain-context-box-image-image"
                            src={`../apitravel/server/public/images/${img.filename}`}
                            alt="brak zdjecia"
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                )}

                <p className="newsMain-context-box-p">
                  {currentNew.context.substring(0, 500)}
                  {"(...)"}
                </p>
                <div className="newsMain-context-box-button">
                  <Link to={`${currentNew._id}`}>
                    <button>Czytaj więcej</button>
                  </Link>
                </div>
              </div>
              {!isLast && <hr />}
            </div>
          );
        })}

      {!loading && filteredNews.length === 0 && (
        <div className="newsMain-no-results">
          <div className="newsMain-no-results-content">
            <h2>Brak wpisów</h2>
            <p>
              {selectedCountry
                ? `Nie znaleziono żadnych aktualności dla kraju: ${selectedCountry}`
                : "Nie znaleziono żadnych aktualności"}
            </p>
            {selectedCountry && (
              <button
                onClick={() => setSelectedCountry("")}
                className="newsMain-no-results-button"
              >
                Pokaż wszystkie aktualności
              </button>
            )}
          </div>
        </div>
      )}

      <div className="newsMain-btns">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default News;
