import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import styles from './Expenses.module.css'
import { useState } from 'react'
import ExpenseChart from './ExpenseChart'

function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2023')

    const items = props.items
    const filteredItems = items.filter(item => item.date.getFullYear().toString() === filterYear)


    const onFilterYearChangeHandler = (filterYear) => {
        setFilterYear(filterYear)
    }

    return <div>
        <Card className={styles["expenses"]}>
            <ExpenseFilter selected={filterYear} onFilterYearChange={onFilterYearChangeHandler} />
            <ExpenseChart items={filteredItems} />
            <ExpensesList items={filteredItems} year={filterYear} />
        </Card>
    </div>

}

export default Expenses;