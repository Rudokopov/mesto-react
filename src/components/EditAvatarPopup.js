import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvattarPopup(props) {
  const { onEditAvatar, avatarRef } = props;
  const [avatar, setNewAvatar] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onEditAvatar({
      imageAvatar:
        avatarRef.current.src /* Значение инпута, полученное с помощью рефа */,
    });
  }

  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      title="Обновить аватар"
      name="avatar"
      btnName={"Сохранить"}
      onSubmit={handleSubmit}
    >
      <input
        name="link"
        placeholder="Ссылка на картинку"
        required
        type="url"
        className="popup__form-input popup__form-avatar-link"
        id="imageAvatar"
      />
      <span className="imageAvatar-error error-message"></span>
    </PopupWithForm>
  );
}

export default EditAvattarPopup;
