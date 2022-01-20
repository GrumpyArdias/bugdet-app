import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export function ExpenseTotal() {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Gastos: {totalExpenses}€</span>
    </div>
  );
}
