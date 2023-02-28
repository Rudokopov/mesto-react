function PopupWithForm({ title, name, btnName, isOpen, children, onClose }) {
  return (
    <div className={isOpen ? `popup popup_opened` : `popup`}>
      <div className="popup__container">
        <h2 className="popup__form-title">{title}</h2>
        <button
          type="button"
          aria-label="Закрыть форму"
          className="popup__form-close-button"
          onClick={onClose}
        ></button>
        <form
          name={`form-${name}`}
          className={`popup__form popup__form-${name}`}
          noValidate
        >
          {children}
          <input
            name="submit"
            type="submit"
            value={btnName}
            className="popup__form-submtit"
            id="popup__form-submtit popup__form-submtit-profile-edit"
          />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
