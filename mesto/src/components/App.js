import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);

  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);

  const [isPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false)

  const handleEditPopupOpen = () => {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAvatarPopupOpen = () => {
    setAvatarPopupOpen(!isAvatarPopupOpen);
  };

  const handlePlacePopupOpen = () => {
    setPlacePopupOpen(!isPlacePopupOpen);
  };

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditPopupOpen}
        onAvatarPopup={handleAvatarPopupOpen}
        onPlacePopup={handlePlacePopupOpen}
      />
      <PopupWithForm
        onClose={handleEditPopupOpen}
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="edit"
      >
        <input
          name="name"
          placeholder="Имя"
          required
          type="text"
          className="popup__form-input popup__form-user-name"
          id="user"
          minLength="2"
          maxLength="40"
        />
        <span className="user-error error-message"></span>
        <input
          name="name"
          placeholder="Описание"
          required
          type="text"
          className="popup__form-input popup__form-user-description"
          id="description"
          minLength="2"
          maxLength="200"
        />
        <span className="description-error error-message"></span>
        <input
          name="submit"
          type="submit"
          value="Сохранить"
          className="popup__form-submtit"
          id="popup__form-submtit popup__form-submtit-profile-edit"
        />
      </PopupWithForm>
      <PopupWithForm
        onClose={handleAvatarPopupOpen}
        isOpen={isAvatarPopupOpen}
        title="Обновить аватар"
        name="avatar"
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
        <input
          name="submit"
          type="submit"
          value="Сохранить"
          className="popup__form-submtit popup__form-submtit-avatar"
          id="popup__form-submtit popup__form-submtit-avatar"
        />
      </PopupWithForm>
      <PopupWithForm
        onClose={handlePlacePopupOpen}
        isOpen={isPlacePopupOpen}
        title="Новое место"
        name="place"
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
        <input
          name="submit"
          type="submit"
          value="Создать"
          className="popup__form-submtit popup__form-submtit-place"
          id="popup__form-submtit popup__form-submtit-place"
        />
      </PopupWithForm>
      <Footer />
    </div>
  );
}

export default App;
