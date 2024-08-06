
import AppName from './components/AppName'
import AddTodo from './components/Addtodo';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/Todoitem2';
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className='items'>
        <TodoItem1/>
        <TodoItem2/>

         </div>
        </center>

        
    </>
  );
}
export default App;
