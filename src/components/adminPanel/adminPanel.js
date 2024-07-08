import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./adminPanel.css";
import axios from "axios";
import {
  MdFileUpload,
  MdImageNotSupported,
  MdAccessTime,
  MdPerson,
  MdKeyboardArrowDown,
} from "react-icons/md";
import DeleteConfirm from "./deleteConfirm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ConfirmModal from "../confirmModal/confirmModal";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { tokenId } = useParams();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState([]);
  //const [old_image, setOldImage] = useState([]);
  //const [image, setImage] = useState([]);

  const [titleEdit, setTitleEdit] = useState("");
  const [contextEdit, setContextEdit] = useState("");
  const [authorEdit, setAuthorEdit] = useState("");
  const [fileEdit, setFileEdit] = useState([]);
  const [imageEdit, setImageEdit] = useState(null);

  const [showPost, setShowPost] = useState(false);
  const [showEditDelete, setShowEditDelete] = useState(true);

  const [allNews, setAllNews] = useState([]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSend, setShowSend] = useState(false);

  const [j, SetJ] = useState(0);

  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Klik");

    const formData = new FormData();

    formData.append("title", title);
    formData.append("context", context);
    formData.append("author", author);

    [...e.target.files.files].map((file, i) => {
      formData.append("files", file);
      return 0;
    });

    setShowSend(true);

    axios
      .post(`http://localhost:3001/news`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      .then((res) => {
        console.log("Post wysłany");
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log("Błąd");
        console.log(err);
      });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", titleEdit);
    formData.append("context", contextEdit);
    console.log(e.target.files);
    [...e.target.files.files].map((file, i) => {
      formData.append("files", file);
      return 0;
    });

    axios
      .put(`http://localhost:3001/news/${tokenId}/${id}`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      .then((res) => {
        console.log("Edytowanie posta z id: " + id);
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log("Zepsuło się");
        console.log(err);
      });
  };

  const deleteImage = (img) => {
    const formData = new FormData();

    formData.append("files", img.filename);
    console.log(JSON.stringify(img));
    axios
      .put(`http://localhost:3001/news/${tokenId}/${id}/image`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      .then((res) => {
        console.log("Usuwanie zdjecia posta o id: " + id);
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log("Błąd");
        console.log(err);
      });
  };

  let [count, SetCount] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("Id " + tokenId);
    if (tokenId !== localStorage.getItem("token")) {
      console.log("Nie istnieje");
      navigate("/");
    } else {
      console.log("Istnieje");
    }

    axios
      .get(`http://localhost:3001/news`)
      .then((news) => setAllNews(news.data), setLoading(false))
      .catch((err) => console.log(err));
  }, [navigate, tokenId]);

  return (
    <div className="adminpanelMain">
      <h1>Panel administratora</h1>
      <nav className="adminpanelMain-nav">
        <ul>
          <li
            className={showPost ? "active" : ""}
            onClick={() => {
              setShowPost(true);
              setShowEditDelete(false);
            }}
          >
            Dodaj post
          </li>
          <li
            className={showEditDelete ? "active" : ""}
            onClick={() => {
              setShowPost(false);
              setShowEditDelete(true);
            }}
          >
            Edytuj lub usuń
          </li>
        </ul>
      </nav>
      {showPost && (
        <div className="adminpanelMain-context">
          <div className="adminpanelMain-context-input">
            <form onSubmit={handleSubmit}>
              <label>Tytuł</label>
              <input
                type="text"
                placeholder="Podaj tytuł"
                className="adminpanelMain-headline"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              {/* <label>Autor</label>
              <input
                type="text"
                placeholder="Podaj autora"
                className="adminpanelMain-author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              /> */}
              <div className="adminpanelMain-context-labelimage1">
                <div className="adminpanelMain-context-labelimage">
                  <label htmlFor="adminpanelMain-context-inputimage">
                    <MdFileUpload
                      size={420}
                      onMouseOver={({ target }) => {
                        target.style.color = "#030392";
                        target.style.cursor = "pointer";
                      }}
                      onMouseOut={({ target }) =>
                        (target.style.color = "black")
                      }
                    />
                    <h1 className="adminpanelMain-context-labelimage-headline">
                      Załącz zdjęcie
                    </h1>
                  </label>
                </div>
              </div>
              <input
                id="adminpanelMain-context-inputimage"
                type="file"
                name="files"
                multiple
                onChange={(e) => {
                  for (let i = 0; i < e.target.files.length; i++) {
                    setFile(e.target.files[i]);
                    var image = document.createElement("img");
                    var button = document.createElement("button");
                    image.src = URL.createObjectURL(e.target.files[i]);
                    image.id = `output${i}`;
                    image.className = "adminpanelMain-context-inputimage-image";
                    button.innerHTML = "X";
                    button.id = `button${i}`;
                    button.type = "button";

                    button.onclick = function () {
                      document.getElementById(`output${i}`).remove();
                      document.getElementById(`button${i}`).remove();
                      return false;
                    };
                    button.className =
                      "adminpanelMain-context-inputimage-buttonNew";
                    document.querySelector(`.cont`).style.position = "relative";
                    document.querySelector(".cont").appendChild(image);
                    document.querySelector(".cont").appendChild(button);
                  }
                }}
              />
              <label>Treść</label>
              <textarea
                type="text"
                className="adminpanelMain-textarea"
                placeholder="Podaj treść"
                name="context"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                required
              />

              <div className="adminpanelMain-button">
                <button type="submit">Opublikuj</button>
              </div>
            </form>
          </div>
          {showSend && <ConfirmModal setShowSend={setShowSend} />}
          <div className="adminpanelMain-context-show">
            <label>Tytuł</label>
            <h1>{title}</h1>
            {/* <label>Autor</label>
            <h4>{author}</h4> */}
            <label>Załączone zdjęcie</label>
            <p className="cont"></p>
            <label>Treść</label>
            <p>{context}</p>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      )}
      {showEditDelete && (
        <div className="adminpanelMain-context">
          <h1>Opublikowane wpisy</h1>
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
          {allNews &&
            allNews.map((currentNew, i) => {
              return (
                <form onSubmit={handleEdit}>
                  <div
                    className={
                      i === j
                        ? "adminpanelMain-context-box-active"
                        : "adminpanelMain-context-box"
                    }
                  >
                    <div className="adminpanelMain-context-box-static">
                      <div className="adminpanelMain-context-img">
                        {currentNew.image && (
                          <div className="adminpanelMain-context-img-carousel">
                            {!showEdit &&
                              !imageEdit &&
                              currentNew.image.length === 1 &&
                              currentNew.image.map((img, i) => {
                                return (
                                  <div
                                    className="adminpanelMain-context-img2"
                                    key={i}
                                  >
                                    {/* ee */}
                                    <img
                                      src={`/images/${img.filename}`}
                                      alt="brak zdjecia"
                                    />
                                  </div>
                                );
                              })}
                            {showEdit &&
                              !imageEdit &&
                              currentNew.image.length === 1 &&
                              currentNew.image.map((img, i) => {
                                return (
                                  <div
                                    className="adminpanelMain-context-img2"
                                    key={i}
                                  >
                                    {/*ee2*/}
                                    <img
                                      src={`/images/${img.filename}`}
                                      alt="brak zdjecia"
                                    />
                                    {i === j && (
                                      <p
                                        className="adminpanelMain-context-carousel-delete"
                                        onClick={() => {
                                          deleteImage(img);
                                        }}
                                      >
                                        Usuń zdjęcie
                                      </p>
                                    )}
                                  </div>
                                );
                              })}
                            {!showEdit &&
                              !imageEdit &&
                              currentNew.image.length !== 1 && (
                                <Carousel className="adminpanelMain-context-carousel">
                                  {Array.from(currentNew.image).map(
                                    (img, i) => {
                                      return (
                                        <div key={i}>
                                          {/* qq */}
                                          <img
                                            className="adminpanelMain-context-carousel-img"
                                            src={`/images/${img.filename}`}
                                            alt="brak zdjecia"
                                          />
                                        </div>
                                      );
                                    }
                                  )}
                                </Carousel>
                              )}
                            {/* <p class="imageSingle"></p> */}
                            {i === j && showEdit && imageEdit && (
                              <Carousel>
                                {Array.from(currentNew.image).map((img, i) => {
                                  return (
                                    <div key={i}>
                                      {/* ww */}
                                      <img
                                        className="adminpanelMain-context-carousel-img"
                                        src={`/images/${img.filename}`}
                                        alt="brak zdjecia"
                                      />
                                    </div>
                                  );
                                })}
                              </Carousel>
                            )}
                            {i !== j &&
                              showEdit &&
                              imageEdit &&
                              currentNew.image.length !== 1 && (
                                <Carousel>
                                  {Array.from(currentNew.image).map(
                                    (img, i) => {
                                      return (
                                        <div key={i}>
                                          {/* rr */}
                                          <img
                                            className="adminpanelMain-context-carousel-img"
                                            src={`/images/${img.filename}`}
                                            alt="brak zdjecia"
                                          />
                                        </div>
                                      );
                                    }
                                  )}
                                </Carousel>
                              )}
                            {showEdit &&
                              !imageEdit &&
                              currentNew.image.length !== 1 && (
                                <Carousel>
                                  {Array.from(currentNew.image).map(
                                    (img, i) => {
                                      return (
                                        <div key={i}>
                                          {/* rr */}
                                          <img
                                            className="adminpanelMain-context-carousel-img"
                                            src={`/images/${img.filename}`}
                                            alt="brak zdjecia"
                                            name="files"
                                          />
                                          {i === j && (
                                            <p
                                              className="adminpanelMain-context-carousel-delete"
                                              onClick={() => {
                                                deleteImage(img);
                                              }}
                                            >
                                              Usuń zdjęcie
                                            </p>
                                          )}
                                        </div>
                                      );
                                    }
                                  )}
                                </Carousel>
                              )}
                            {i === j &&
                              showEdit &&
                              currentNew.image.length !== 0 && (
                                <div style={{ clear: "both" }}>
                                  <input
                                    id="adminpanelMain-context-inputimage"
                                    type="file"
                                    name="files"
                                    multiple
                                    onChange={(e) => {
                                      for (
                                        let i = 0;
                                        i < e.target.files.length;
                                        i++
                                      ) {
                                        setFileEdit(e.target.files[i]);
                                        var image =
                                          document.createElement("img");
                                        var button =
                                          document.createElement("button");
                                        button.innerHTML = "X";
                                        button.id = `button${i}`;
                                        button.type = "button";
                                        button.onclick = function () {
                                          document

                                            .getElementById(`output${i}`)
                                            .remove();
                                          document

                                            .getElementById(`button${i}`)
                                            .remove();
                                          return false;
                                        };
                                        button.className =
                                          "adminpanelMain-context-inputimage-button";
                                        image.src = URL.createObjectURL(
                                          e.target.files[i]
                                        );
                                        image.id = `output${i}`;
                                        image.style.marginBottom = "0";
                                        image.width = "200";

                                        document.querySelector(
                                          ".imageSingle"
                                        ).style.position = "relative";
                                        document
                                          .querySelector(".imageSingle")
                                          .appendChild(button);
                                        document
                                          .querySelector(".imageSingle")
                                          .appendChild(image);
                                      }
                                    }}
                                  />
                                  {currentNew.image.length !== 0 && (
                                    <label
                                      htmlFor="adminpanelMain-context-inputimage"
                                      className="adminpanelMain-context-inputimage-label"
                                    >
                                      <p className="adminpanelMain-context-inputimage-headline">
                                        Załącz zdjęcie
                                      </p>
                                    </label>
                                  )}
                                  <h2>Załączone zdjęcia</h2>
                                  <input
                                    type="hidden"
                                    name="old_image"
                                    value={currentNew.image}
                                  />
                                </div>
                              )}
                          </div>
                        )}
                        {currentNew.image.length === 0 && (
                          <div>
                            <div className="adminpanelMain-context-img-none">
                              <MdImageNotSupported size={200} />
                              <p>Brak zdjęcia</p>
                            </div>
                            {i === j &&
                              showEdit &&
                              currentNew.image.length === 0 && (
                                <div style={{ clear: "both" }}>
                                  <input
                                    id="adminpanelMain-context-inputimage"
                                    type="file"
                                    name="files"
                                    multiple
                                    onChange={(e) => {
                                      for (
                                        let i = 0;
                                        i < e.target.files.length;
                                        i++
                                      ) {
                                        setFileEdit(e.target.files[i]);
                                        var image =
                                          document.createElement("img");
                                        var button =
                                          document.createElement("button");
                                        button.innerHTML = "X";
                                        button.id = `button${i}`;
                                        button.type = "button";
                                        button.onclick = function () {
                                          document

                                            .getElementById(`output${i}`)
                                            .remove();
                                          document

                                            .getElementById(`button${i}`)
                                            .remove();
                                          return false;
                                        };
                                        button.className =
                                          "adminpanelMain-context-inputimage-button";
                                        image.src = URL.createObjectURL(
                                          e.target.files[i]
                                        );
                                        image.id = `output${i}`;
                                        image.style.marginBottom = "0";
                                        image.width = "200";

                                        document.querySelector(
                                          ".imageSingle"
                                        ).style.position = "relative";
                                        document
                                          .querySelector(".imageSingle")
                                          .appendChild(button);
                                        document
                                          .querySelector(".imageSingle")
                                          .appendChild(image);
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor="adminpanelMain-context-inputimage"
                                    className="adminpanelMain-context-inputimage-label"
                                  >
                                    <p className="adminpanelMain-context-inputimage-headline">
                                      Załącz zdjęcie
                                    </p>
                                  </label>
                                  <h2>Załączone zdjęcia</h2>
                                  {imageEdit && (
                                    <img src={imageEdit} alt="Attach to news" />
                                  )}
                                  <input
                                    type="hidden"
                                    name="old_image"
                                    value={currentNew.image}
                                  />
                                </div>
                              )}
                          </div>
                        )}
                      </div>

                      <div className="adminpanelMain-context-text">
                        {i === j && showEdit ? (
                          <h2 key={i}>
                            <input
                              className="adminpanelMain-context-headline"
                              type="text"
                              placeholder="Podaj tytuł"
                              defaultValue={currentNew.title}
                              onChange={(e) => {
                                setTitleEdit(e.target.value);
                              }}
                            />
                          </h2>
                        ) : (
                          <h2 key={i}>{currentNew.title}</h2>
                        )}
                        <div className="adminpanelMain-context-dateauthor">
                          <MdAccessTime
                            style={{
                              color: "#aaa",
                              float: "left",
                              margin: "5px",
                            }}
                            size={24}
                          />
                          <p key={i}>
                            {new Date(
                              currentNew.createdAt
                            ).toLocaleDateString()}
                          </p>
                        </div>

                        {currentNew.author && (
                          <div className="adminpanelMain-context-dateauthor">
                            <MdPerson
                              style={{
                                color: "#aaa",
                                float: "left",
                                margin: "5px",
                              }}
                              size={24}
                            />
                            {i === j && showEdit ? (
                              <input
                                type="text"
                                placeholder="Podaj autora..."
                                defaultValue={currentNew.author}
                                onChange={(e) => setAuthorEdit(e.target.value)}
                              />
                            ) : (
                              <p key={i}>{currentNew.author}</p>
                            )}
                          </div>
                        )}

                        <div style={{ clear: "both" }}></div>
                      </div>

                      {/* <p className="adminpanelMain-context-box-p" key={i}>
                        {currentNew.context}
                      </p> */}

                      <div className="adminpanelMain-context-button">
                        <button
                          type="button"
                          key={i}
                          onClick={() => {
                            SetCount(count + 1);
                            if (count % 2) {
                              SetJ(null);
                              count++;
                            } else {
                              SetJ(i);
                            }
                            //SetExpandContext(true);
                          }}
                        >
                          <MdKeyboardArrowDown
                            size={80}
                            className={
                              i === j
                                ? "adminpanelMain-context-box-arrow-active"
                                : "adminpanelMain-context-box-arrow"
                            }
                          />
                        </button>
                      </div>
                    </div>
                    <div style={{ clear: "both" }}></div>
                    {i === j && showEdit && !imageEdit && (
                      <div>
                        {/* <p className="adminpanelMain-context-inputimage-headline">
                          Załączone zdjęcia
                        </p> */}
                        <div class="imageSingle"></div>
                      </div>
                    )}
                    {i === j && (
                      <div
                        className={
                          i !== j
                            ? "adminpanelMain-context-box-rest-inactive"
                            : "adminpanelMain-context-box-rest"
                        }
                      >
                        {i === j && showEdit ? (
                          <textarea
                            type="text"
                            placeholder="Podaj treść..."
                            defaultValue={currentNew.context}
                            onChange={(e) => setContextEdit(e.target.value)}
                          />
                        ) : (
                          <p key={i}>{currentNew.context}</p>
                        )}
                        {!showEdit && (
                          <Link to={`/adminzhp/${tokenId}/${currentNew._id}`}>
                            <button
                              type="button"
                              className="adminpanelMain-context-box-rest-btn-edit"
                              onClick={() => {
                                setShowEdit(true);
                              }}
                            >
                              Edytuj
                            </button>
                          </Link>
                        )}
                        {!showEdit && (
                          <Link to={`/adminzhp/${tokenId}/${currentNew._id}`}>
                            <button
                              type="button"
                              key={currentNew._id}
                              onClick={() => {
                                setShowConfirm(true);
                              }}
                              className="adminpanelMain-context-box-rest-btn-delete"
                            >
                              Usuń
                            </button>
                          </Link>
                        )}
                        {showEdit && (
                          <Link to={`/adminzhp/${tokenId}`}>
                            <button
                              type="button"
                              className="adminpanelMain-context-box-rest-btn-delete"
                              onClick={() => {
                                setShowEdit(false);
                              }}
                            >
                              Anuluj
                            </button>
                          </Link>
                        )}
                        {showEdit && (
                          <button
                            key={currentNew._id}
                            type="submit"
                            className="adminpanelMain-context-box-rest-btn-save"
                          >
                            Zapisz
                          </button>
                        )}
                      </div>
                    )}
                    {showConfirm && (
                      <DeleteConfirm
                        setShowConfirm={setShowConfirm}
                        id={currentNew._id}
                      />
                    )}
                  </div>
                </form>
              );
            })}

          {!allNews && <h1>No data</h1>}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
