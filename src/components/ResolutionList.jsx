const resolutions = [
  { id: "1024x1024", name: "1024 x 1024 (1:1)" },
  { id: "1152x896", name: "1152 x 896 (9:7)" },
  { id: "896x1152", name: "896 x 1152 (7:9)" },
  { id: "1344x768", name: "1344 x 768 (7:4)" },
  { id: "768x1344", name: "768 x 1344 (4:7)" },
];

function ResolutionList({ resolutionId, onChange }) {
  return (
    <div className="form__resolution-list">
      {resolutions.map((resolution) => (
        <label
          className={`form__resolution-list--item ${resolutionId === resolution.name ? "form__resolution-list--item-selected" : ""}`}
          htmlFor={resolution.id}
          key={resolution.id}
        >
          {resolution.name}
          <input
            type="radio"
            name="resolution"
            id={resolution.id}
            value={resolution.name}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
}

export default ResolutionList;
