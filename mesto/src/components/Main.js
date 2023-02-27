import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const { onEditProfile, onAvatarPopup, onPlacePopup, onCardClick } = props;

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileInfo()])
      .then(([cards, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards)

      })
      .catch((err) => console.log(err));
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img
            src={userAvatar}
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
          <h1 className="profile__user-name">{userName}</h1>
          <p className="profile__user-description">{userDescription}</p>
        </div>
        <button
          type="button"
          aria-label="Открытие формы с добавлением места"
          className="profile__add-button"
          onClick={onPlacePopup}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
