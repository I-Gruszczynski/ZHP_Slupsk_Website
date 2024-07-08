import { Link } from "react-router-dom";
import "./news.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdAccessTime, MdPerson } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ClipLoader from "react-spinners/ClipLoader";

const News = ({ itemsPerPage }) => {
  const [allNews, setAllNews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/news`)
      .then((news) => setAllNews(news.data), setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const curretnPost = allNews.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i < Math.ceil(allNews.length / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="newsMain">
      <div className="newsMain-header">
        <h1>Aktualności</h1>
        <hr />
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
                <div style={{ clear: "both" }}></div>
                {currentNew.image &&
                  currentNew.image.length === 1 &&
                  currentNew.image.map((img) => {
                    return (
                      <img
                        className="newsMain-context-box-image-image"
                        src={`images/${img.filename}`}
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
                            src={`images/${img.filename}`}
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
