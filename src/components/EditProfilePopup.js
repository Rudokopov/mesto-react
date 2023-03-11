import React from "react";
import PopupWithForm from "./PopupWithForm";

// Добрых дней, есть проблема, я глянул добрый десяток видосов на эту тему, читал ссылку что ведет в ошибке, я понял в чем проблема
// Но не понимаю как решить
// У нас идет неконтролируемая установка значений в инпутах при рендере приложения, а потом уже контролируемый за счет функций
// Реакт хочет что бы был один способ, но как это обойти, я не понял. Рефом можно, но в ТЗ указано что тут должны быть контролируемые изменения
// Я наставнику задал вопрос, но выходные, он не ответил.
// Поэтому отправляю на интерацию так, надеюсь вы мне подскажете =)

function EditProfilePopup(props) {
  const { onClose, isOpen, onUpdateUser, currentUser } = props;
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      description,
    });
  };

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
