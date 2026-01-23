import ColorList from "./ColorList";
import ResolutionList from "./ResolutionList";

function Form() {
  return (
    <form className="form container">
      <label className="form__label" htmlFor="prompt">
        Prompt
        <textarea
          name="prompt"
          id="prompt"
          placeholder="Breathtaking digital art illustration of a celestial galaxy, bursting with vibrant colors and sparkling stars, reminiscent of an infinite cosmic journey"
        ></textarea>
      </label>

      <label className="form__label" htmlFor="navigate-prompt">
        Navigate Prompt (Optional)
        <input
          type="text"
          name="navigate-prompt"
          id="navigate-prompt"
          placeholder="Enter the prompt"
        />
      </label>

      <div className="form__group">
        <h3 className="form__group-title">Colors</h3>
        <ColorList />
      </div>

      <div className="form__group">
        <h3 className="form__group-title">Resolution</h3>
        <ResolutionList />
      </div>

      <div className="form__group">
        <label className="form__group-title" htmlFor="guidence">
          Guidence (5.0)
        </label>
        <input type="range" name="guidence" id="guidence" />
      </div>

      <button type="submit" className="form__submit-btn">
        <img src="/src/assets/Magic.svg" alt="two-star icon" />
        Generate Image
      </button>
    </form>
  );
}

export default Form;
