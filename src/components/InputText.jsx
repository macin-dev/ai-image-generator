function InputText({ id, name, placeholder, label }) {
  return (
    <label className="form__label" htmlFor={id}>
      {label}
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        className="form__input"
      />
    </label>
  );
}

export default InputText;
