function CardImage({ src, style }) {
  return (
    <div className="card" style={style}>
      <img
        src={`/src/assets/ai-images/${src}`}
        alt="placeholder"
        className="generated-image"
      />

      {/* <div className="card__info">
        <img
          src="/src/assets/ai-images/profile.jpeg"
          alt="creator picture"
          className="creator-picture"
        />
        <span className="card__creator-username">Sonja Smith</span>
        <div className="card__img-bookmark">
          <img src="/src/assets/bookmark.svg" alt="bookmark icon" />
        </div>
      </div> */}
    </div>
  );
}

export default CardImage;
