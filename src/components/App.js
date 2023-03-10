import React from "react";
import { api } from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CurrentUserCardsContext } from "../contexts/CurrentUserCardsContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);

  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()]).then(
      ([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
        // Проблема при распарсе карточек на клиенте
      }
    );
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if ((card, !isLiked)) {
      api.likeCard(card).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.deleteLike(card).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleCardDelete(card) {}

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditPopupOpen = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAvatarPopupOpen = () => {
    setAvatarPopupOpen(true);
  };

  const handlePlacePopupOpen = () => {
    setPlacePopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedCard({});
    setAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setPlacePopupOpen(false);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentUserCardsContext.Provider value={cards}>
          <Header />
          <Main
            onEditProfile={handleEditPopupOpen}
            onAvatarPopup={handleAvatarPopupOpen}
            onPlacePopup={handlePlacePopupOpen}
            onCardClick={(card) => handleCardClick(card)}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <PopupWithForm
            onClose={handleClosePopup}
            isOpen={isEditProfilePopupOpen}
            title="Редактировать профиль"
            name="edit"
            btnName="Сохранить"
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
          </PopupWithForm>
          <PopupWithForm
            onClose={handleClosePopup}
            isOpen={isAvatarPopupOpen}
            title="Обновить аватар"
            name="avatar"
            btnName={"Сохранить"}
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
          <Footer />
          <ImagePopup
            onClose={() => handleClosePopup({})}
            isOpen={selectedCard}
          />
        </CurrentUserCardsContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
