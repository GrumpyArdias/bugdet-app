import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div className="d-flex">
        <span className="badge rounded-pill bg-primary mr-3">
          {props.cost}€
        </span>
        <div className="mx-2"></div>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}
