import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";
import { CurrentUserCardsContext } from "../contexts/CurrentUserCardsContext";

function Main({
  onEditProfile,
  onAvatarPopup,
  onPlacePopup,
  onCardClick,
  onCardLike,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const userCard = React.useContext(CurrentUserCardsContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img
            src={currentUser.avatar}
            alt="Аватар пользователя"
            className="profile__avatar"
          />
          <button
            type="button"
            className="profile__avatar-wrap-button"
            onClick={onAvatarPopup}
          ></button>
        </div>
        <div className="profile__info">
          <button
            type="button"
            aria-label="Открытие формы с редактированием профиля"
            className="profile__edit-button"
            onClick={onEditProfile}
          ></button>
          <h1 className="profile__user-name">{currentUser.name}</h1>
          <p className="profile__user-description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          aria-label="Открытие формы с добавлением места"
          className="profile__add-button"
          onClick={onPlacePopup}
        ></button>
      </section>
      <section className="cards">
        {userCard.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
