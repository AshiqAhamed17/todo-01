
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
    name: 'Complete WEB 3.0 assign',
    date: '08/08/2024',
    },
    {
      id:3,
      name: 'DO CP',
      date: '12/08/2024',
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
