import { useState } from "react";
import Card from "../UI/Card";
import styles from "./ExpenseForm.module.css";

function ExpenseForm(props) {
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const onTitleChange = (event) => {
    setExpense((prevExpense) => ({
      ...prevExpense,
      title: event.target.value,
    }));
  };

  const onAmountChange = (event) => {
    setExpense((prevExpense) => ({
      ...prevExpense,
      amount: Number(event.target.value),
    }));
  };

  const onDateChange = (event) => {
    setExpense((prevExpense) => ({
      ...prevExpense,
      date: new Date(event.target.value),
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault()
    props.onAddExpense(expense)
  }

  return (
    <form>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" onChange={onTitleChange}></input>
        </div>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" type="number" step="0.1" onChange={onAmountChange}></input>
        </div>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" onChange={onDateChange}></input>
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={onSubmit}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
