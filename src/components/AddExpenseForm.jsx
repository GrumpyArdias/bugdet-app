export function AddExpenseForm() {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label for="name">Nombre</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="cost"
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-4">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
