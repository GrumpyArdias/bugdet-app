import { useState } from "react";

export function EditBudget(props) {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required="required"
        type="number"
        class="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Guardar
      </button>
    </>
  );
}
