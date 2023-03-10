import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { onClose, isOpen, onUpdateUser } = props;
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      description,
    });
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      title="Редактировать профиль"
      name="edit"
      btnName="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        value={name}
        placeholder="Имя"
        required
        type="text"
        className="popup__form-input popup__form-user-name"
        id="user"
        minLength="2"
        maxLength="40"
        onChange={handleChangeName}
      />
      <span className="user-error error-message"></span>
      <input
        name="name"
        value={description}
        placeholder="Описание"
        required
        type="text"
        className="popup__form-input popup__form-user-description"
        id="description"
        minLength="2"
        maxLength="200"
        onChange={handleChangeDescription}
      />
      <span className="description-error error-message"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
