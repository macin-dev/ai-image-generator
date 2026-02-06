import { useState } from "react";

function CardImage({ src, style }) {
  const [loaded, setLoaded] = useState(false);
  const { backgroundColor, width, transform } = style;

  return (
    <div
      className="card"
      style={{
        width,
        transform,
        backgroundColor: `${!loaded ? backgroundColor : "transparent"}`,
      }}
    >
      <div
        className={`card__img-wrapper ${loaded ? "card__img-wrapper--inset-shadow" : ""}`}
      >
        <img
          src={`/src/assets/ai-images/${src}`}
          alt="placeholder"
          className={`generated-image ${loaded ? "loaded" : ""}`}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="card__info">
        <img
          src="/src/assets/ai-images/profile.jpeg"
          alt="creator picture"
          className="creator-picture"
        />
        <span className="card__creator-username">Sonja Smith</span>
        <div className="card__img-bookmark">
          <img src="/src/assets/bookmark.svg" alt="bookmark icon" />
        </div>
      </div>
    </div>
  );
}

export default CardImage;
