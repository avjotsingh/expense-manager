import styles from './ExpenseDate.module.css'

function ExpenseDate(props) {
    const expenseDate = new Date(props.date)
    const day = expenseDate.toLocaleDateString('en-US', {day: '2-digit'})
    const month = expenseDate.toLocaleString('en-US', {month: 'long'})
    
    const year = expenseDate.getFullYear()

    return <div className={styles["expense-date"]}>
        <div className={styles["expense-date__month"]}>{month}</div>
        <div className={styles["expense-date__year"]}>{year}</div>
        <div className={styles["expense-date__day"]}>{day}</div>
    </div>
}

export default ExpenseDate;