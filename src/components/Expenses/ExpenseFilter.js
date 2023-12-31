import styles from './ExpenseFilter.module.css';

function ExpenseFilter(props) {
    
    const onFilterYearChange = (event) => {
        props.onFilterYearChange(event.target.value)
    }

    return <div className={styles["expense-filter"]}>
        <div className={styles["expense-filter__control"]}>
        <label>Filter by year</label>
            <select value={props.selected} type="select" onChange={onFilterYearChange}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>
}

export default ExpenseFilter;