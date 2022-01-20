import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Budget } from "./components/Budget";
import { Remanining } from "./components/Remaining";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { ExpensesList } from "./components/ExpensesList";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

export function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Planificador de Presupuestos</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remanining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>

        <h3 className="mt-3">Gastos</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpensesList />
          </div>
        </div>
        <h3 className="mt-3">Añadir Gasto</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
