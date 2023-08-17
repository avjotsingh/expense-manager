import { useState } from "react";
import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onStartEditing = () => {
    setIsEditing(true);
  };

  const onCancel = () => {
    console.log('cancel')
    setIsEditing(false);
  };

  const onAddExpense = (expense) => {
    if (expense.title && expense.date && expense.amount) {
        props.onAddExpense({
            ...expense,
            id: Math.random.toString(),
          });
    }

    setIsEditing(false);
  };

  return (
    <div className={styles["new-expense"]}>
      {!isEditing ? (
        <button type="button" onClick={onStartEditing}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm onCancel={onCancel} onAddExpense={onAddExpense} />
      )}
    </div>
  );
}

export default NewExpense;
