import ExpenseItem from './ExpenseItem'
import styles from './ExpensesList.module.css'

function ExpensesList(props) {
    const items = props.items
    if (items.length === 0) {
        return <h2 className={styles["expenses-list__fallback"]}>No items found</h2>
    }

    return <ul className={styles["expenses-list"]}>
        {items.map(item => 
        <ExpenseItem 
            key={item.id}
            date={item.date} 
            title={item.title} 
            amount={item.amount}/>)}
    </ul>
}

export default ExpensesList;