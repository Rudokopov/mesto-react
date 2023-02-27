function Card(props) {
    const {card} = props
    return(
        <div className="card">
          <img className="card__image" style={{ backgroundImage: `url(${card.link})` }} alt={card.name} />
          <button className="card__trash-button"></button>
          <div className="card__bottom">
            <h2 className="card__description">{card.name}</h2>
            <div className="card__tools">
              <button className="card__heart-button"></button>
              <span className="card__heart-count">{card.likes.length}</span>
            </div>
          </div>
        </div>
    )
}

export default Card