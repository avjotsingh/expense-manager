import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';
import { useState } from 'react';

const dummyExpenses = [
  {
    id: 'item1',
    title: 'Toilet paper',
    amount: 5,
    date: new Date(2023, 8, 12)
  },
  {
    id: 'item2',
    title: 'Digestive biscuits',
    amount: 10,
    date: new Date(2023, 7, 29)
  },
  {
    id: 'item3',
    title: 'BenQ Monitor',
    amount: 500,
    date: new Date(2022, 9, 10)
  }
]


function App() {
  const [expenses, setExpenses] = useState(dummyExpenses)
  
  const onAddExpense = (expense) => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
