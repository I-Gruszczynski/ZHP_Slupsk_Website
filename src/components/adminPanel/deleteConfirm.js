import "./deleteConfirm.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const DeleteConfirm = ({ setShowConfirm }) => {
  const { id } = useParams();
  const { tokenId } = useParams();

  const handleDelete = () => {
    console.log("Usuwanie posta z id: " + id);
    axios
      .delete(`http://localhost:3001/news/${tokenId}/${id}`)

      .then((res) => {
        console.log("Usuwanie posta z id: " + id);
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log("Błąd");
        console.log(err);
      });
  };

  return (
    <div className="main-deleteres">
      <div className="main-deleteres-box">
        <h1>Czy na pewno chcesz usunąć wpis?{console.log(id)}</h1>
        <div className="main-deleteres-btn-box">
          <button
            className="main-deleteres-btn-yes"
            onClick={() => {
              handleDelete();
              setShowConfirm(false);
            }}
          >
            Tak
          </button>
          <Link to={`/adminzhp/${tokenId}`}>
            <button
              className="main-deleteres-btn-no"
              onClick={() => {
                setShowConfirm(false);
              }}
            >
              Nie
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
