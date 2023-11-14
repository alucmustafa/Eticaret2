import "./Dialog.css";
import Proptypes from "prop-types";
const Dialog = ({ isDalogShow, setIsDialogShow }) => {
  const HandleDialogCheck = (event) => {
    const checkChange = event.target.checked; //Burada Check tıklandığında treu değeri dönderecek ama
    localStorage.setItem("dialog", JSON.stringify(!checkChange)); // bizim modalı kapatmamız için fasle değerine ihtiyacımız var bu yüzden değilini aldık.
  };
  return (
    <div className={`modal-dialog ${isDalogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsDialogShow(false)}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="/img/modal-dialog.jpg" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>NEWSLETTER</h3>
            </div>
            <p className="popup-text">
              Sign up to our newsletter and get exclusive deals you won find any
              where else straight to your inbox!
            </p>
            <form className="popup-form">
              <input type="text" placeholder="Enter Email Address Here" />
              <button className="btn btn-primary">SUBSCRIBE</button>
              <label>
                <input type="checkbox" onChange={HandleDialogCheck} />
                <span>Don`t show this popup again</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsDialogShow(false)}
        className="dialog-overlay"
      ></div>
    </div>
  );
};

export default Dialog;

Dialog.protoTypes = {
  isDalogShow: Proptypes.bool,
  setIsDialogShow: Proptypes.func,
};
