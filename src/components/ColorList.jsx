const colors = ["red", "orange", "green", "blue", "purple", "white"];

function ColorList({ onChange }) {
  return (
    <div className="form__color-list">
      {colors.map((color) => (
        <label
          className={`form__color-list--item form__color-list--item-${color}`}
          htmlFor={color}
          key={color}
        >
          <input
            type="radio"
            name="color"
            id={color}
            value={color}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
}

export default ColorList;
