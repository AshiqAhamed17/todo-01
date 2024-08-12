
import AppName from './components/AppName'
import AddTodo from './components/Addtodo';


import "./App.css";
import TodoVal from './components/TodoVal';
function App() {

  const todoVal = [
    {
    id:1,
    name: 'Learn React ',
    date: '08/08/2024',
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
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoVal TodoValue={todoVal}/>
        </center>

        
    </>
  );
}
export default App;
