import { useState } from "react";
import ColorList from "./ColorList";
import ResolutionList from "./ResolutionList";

function Form() {
  const [formData, setFormData] = useState({
    prompt: "",
    negativePrompt: "",
    color: "",
    resolution: "",
    guidance: 5,
  });

  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!formData.prompt.trim()) {
      newErrors.prompt = "Prompt is required";
    }

    return newErrors;
  }

  function handleChange(event) {
    event.preventDefault();

    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validatationErrors = validateForm();

    if (Object.keys(validatationErrors).length > 0) {
      setErrors(validatationErrors);
      return;
    }

    setErrors({});
    console.log(formData);
  }

  return (
    <form className="form container" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="prompt">
        Prompt
        <textarea
          name="prompt"
          id="prompt"
          value={formData.prompt}
          onChange={handleChange}
          className={errors.prompt ? "form__input-error" : ""}
          placeholder="Breathtaking digital art illustration of a celestial galaxy, bursting with vibrant colors and sparkling stars, reminiscent of an infinite cosmic journey"
        ></textarea>
        {errors.prompt && (
          <span className="error-message">{errors.prompt}</span>
        )}
      </label>

      <label className="form__label" htmlFor="negativePrompt">
        Negative Prompt (Optional)
        <input
          type="text"
          name="negativePrompt"
          id="negativePrompt"
          value={formData.negativePrompt}
          onChange={handleChange}
          placeholder="Enter the prompt"
        />
      </label>

      <div className="form__group">
        <h3 className="form__group-title">Colors</h3>
        <ColorList colorId={formData.color} onChange={handleChange} />
      </div>

      <div className="form__group">
        <h3 className="form__group-title">Resolution</h3>
        <ResolutionList
          resolutionId={formData.resolution}
          onChange={handleChange}
        />
      </div>

      <div className="form__group">
        <label className="form__group-title" htmlFor="guidance">
          Guidance (5.0)
        </label>
        <input
          type="range"
          name="guidance"
          min={0}
          value={formData.guidance}
          max={10}
          onChange={handleChange}
          id="guidance"
          className="slider"
        />
      </div>

      <button type="submit" className="form__submit-btn">
        <img src="/src/assets/Magic.svg" alt="two-star icon" />
        Generate Image
      </button>
    </form>
  );
}

export default Form;
