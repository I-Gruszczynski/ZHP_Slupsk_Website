import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "./news.css";

const NewsDetails = () => {
  const { id } = useParams();

  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/news/${id}`)
      .then((news) => setNewsDetails(news.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="NewsDetailsMain">
      {newsDetails && (
        <div className="NewsDetailsMain-context">
          <h1>{newsDetails.title}</h1>
          <hr />
          {newsDetails.image &&
            newsDetails.image.length === 1 &&
            newsDetails.image.map((img) => {
              return (
                <div className="newsMain-context-box-image">
                  <img
                    key={img}
                    className="newsMain-context-box-image-image"
                    src={`images/${img.filename}`}
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
                      src={`images/${img.filename}`}
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
