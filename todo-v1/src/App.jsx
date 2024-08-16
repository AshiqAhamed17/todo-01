
import AppName from './components/AppName'
import AddTodo from './components/Addtodo';
import { useState } from'react';


import "./App.css";
import TodoVal from './components/TodoVal';
function App() {

  const initialTodo = [
    {
    id:1,
    name: 'Learn React ',
    date: '20/08/2024',
    },
    {
    id:2,
    name: 'Learn Web-3 week-2',
    date: '15/08/2024',
    },
    {
      id:3,
      name: 'DO CP',
      date: '20/08/2024',
    },
    {
      id:3,
      name: 'JS Promises',
      date: '13/08/2024',
    }
  
];

const [todoItems, setTodoItems] = useState(initialTodo);

const handleNewItem = (itemName, itemDate) => {
  console.log(`new item added : ${itemName} Date: ${itemDate}`);
  const newTodoitems = [...todoItems, {name: itemName, date: itemDate}];
  setTodoItems(newTodoitems);
}
 

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo  onNewItem={handleNewItem}/>
        <TodoVal TodoValue={todoItems}/>
        </center>

        
    </>
  );
}
export default App;
