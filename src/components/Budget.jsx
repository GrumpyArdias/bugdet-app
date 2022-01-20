import { AppContext } from "../context/AppContext";
import { useContext } from "react";
export function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>Presupuesto: {budget}€ </span>
    </div>
  );
}
