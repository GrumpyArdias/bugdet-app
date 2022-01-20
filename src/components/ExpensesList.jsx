import { ExpenseItem } from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";

export function ExpensesList() {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpenses) =>
      filteredExpenses.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Buscar..."
        onChange={handleChange}
      />
      <ul class="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
}
