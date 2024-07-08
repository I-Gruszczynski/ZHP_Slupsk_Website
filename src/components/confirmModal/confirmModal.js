import "./confirmModal.css";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ConfirmModal = ({ setShowSend }) => {
  let navigate = useNavigate();
  return (
    <div className="confirmModal-background">
      <div className="confirmModal-main">
        <h1>Post został dodany</h1>
        <FaCheck size={320} />
        <button
          onClick={() => {
            setShowSend(false);
            navigate("/");
          }}
        >
          {" "}
          Powrót do strony głównej
        </button>
        <button
          onClick={() => {
            setShowSend(false);
            window.location.reload();
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
