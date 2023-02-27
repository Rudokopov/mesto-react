import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup-image">
      <div className="popup-image__container">
        <button
          type="button"
          aria-label="Закрыть форму"
          className="popup__form-close-button popup__form-image-close-button"
        ></button>
        <img className="popup-image__photo" />
        <p className="popup-image__text"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
