import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { ExpenseItem } from "./ExpenseItem";

export function Remanining() {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Restante: {budget - totalExpenses}€</span>
    </div>
  );
}
