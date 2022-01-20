export function ViewBudget(props) {
  return (
    <>
      <span> Presupuesto: {props.budget}€ </span>
      <div className="mx-3"></div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Editar
      </button>
    </>
  );
}
