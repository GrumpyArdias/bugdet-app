import { TiDelete } from "react-icons/ti";
export function ExpenseItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div className="d-flex">
        <span className="badge rounded-pill bg-primary mr-3">
          {props.cost}€
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
}
