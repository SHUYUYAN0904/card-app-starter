import { useState } from "react";

export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
  disabled,
}) {
  const [localValues, setLocalValues] = useState({
    card_name: "",
    card_pic: "",
  });

  const formValues = values ?? localValues;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (onChange) {
      onChange(e);
      return;
    }

    setLocalValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formValues);
  };

  const isBusy = Boolean(busy || disabled);

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, marginTop: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label>
          Card Name
          <input
            name="card_name"
            value={formValues.card_name || ""}
            onChange={handleChange}
            disabled={isBusy}
            placeholder="Enter card name"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label>
          Card Picture URL
          <input
            name="card_pic"
            value={formValues.card_pic || ""}
            onChange={handleChange}
            disabled={isBusy}
            placeholder="https://..."
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        {error && <p style={{ margin: 0 }}>{error}</p>}

        <button type="submit" disabled={isBusy} style={{ padding: 10 }}>
          {submitText || (isBusy ? "Please wait..." : "Submit")}
        </button>
      </div>
    </form>
  );
}
