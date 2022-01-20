import { TiDelete } from "react-icons/ti";
export function ExpenseItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div className="px-3">
        <span className="badge rounded-pill bg-primary mr-3 ">
          {props.cost}€
        </span>
        <button className="badge rounded-pill bg-dark ml-3">X</button>
        {/* <TiDelete size="1.5em"></TiDelete> */}
      </div>
    </li>
  );
}
