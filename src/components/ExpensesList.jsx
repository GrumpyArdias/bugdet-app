import { ExpenseItem } from "./ExpenseItem";
export function ExpensesList() {
  const expenses = [
    { id: 12344, name: "Compras", cost: 50 },
    { id: 12344, name: "A", cost: 100 },
    { id: 123456, name: "B", cost: 300 },
    { id: 123556, name: "C", cost: 80 },
    { id: 12344, name: "D", cost: 250 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
