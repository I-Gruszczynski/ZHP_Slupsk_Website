import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { MdAccessTime, MdPerson } from "react-icons/md";
import "./news.css";

const NewsDetails = () => {
  const { id } = useParams();

  const [newsDetails, setNewsDetails] = useState(null);

  var randomColor = require("randomcolor");

  useEffect(() => {
    axios
      .get(`https://microtest.toadres.pl/api/news/${id}`)
      .then((news) => setNewsDetails(news.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="NewsDetailsMain">
      {newsDetails && (
        <div className="NewsDetailsMain-context">
          <h1>{newsDetails.title}</h1>
          <hr />
          <div style={{ clear: "both" }}></div>
          <div className="newsMain-context-box-dateauthor">
            <MdAccessTime style={{ color: "#aaa", float: "left" }} size={30} />
            <h3>{new Date(newsDetails.createdAt).toLocaleDateString()}</h3>
          </div>
          {newsDetails.continent && newsDetails.country && (
            <div className="newsMain-context-box-category">
              <h3 style={{ color: randomColor() }}>{newsDetails.continent}</h3>
              <h3 style={{ color: randomColor() }}>{newsDetails.country}</h3>
            </div>
          )}
          <div style={{ clear: "both" }}></div>
          {newsDetails.image &&
            newsDetails.image.length === 1 &&
            newsDetails.image.map((img) => {
              return (
                <div className="newsMain-context-box-image">
                  <img
                    key={img}
                    className="newsMain-context-box-image-image"
                    src={`../apitravel/server/public/images/${img.filename}`}
                    alt="brak zdjecia"
                  />
                </div>
              );
            })}

          {newsDetails.image && newsDetails.image.length !== 1 && (
            <Carousel autoPlay>
              {newsDetails.image.map((img) => {
                return (
                  <div className="newsMain-context-box-image">
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
          <p className="newsMain-context-box-p">{newsDetails.context}</p>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
