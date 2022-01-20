import { ExpenseItem } from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export function ExpensesList() {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
