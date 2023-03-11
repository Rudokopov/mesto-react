import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { handleClosePopup, isPlacePopupOpen } = props;
  return (
    <PopupWithForm
      onClose={handleClosePopup}
      isOpen={isPlacePopupOpen}
      title="Новое место"
      name="place"
      btnName={"Создать"}
    >
      <input
        name="name"
        placeholder="Название"
        required
        type="text"
        className="popup__form-input popup__form-place-name"
        id="name"
        minLength="2"
        maxLength="30"
      />
      <span className="name-error error-message"></span>
      <input
        name="link"
        placeholder="Ссылка на картинку"
        required
        type="url"
        className="popup__form-input popup__form-place-link"
        id="image"
      />
      <span className="image-error error-message"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
