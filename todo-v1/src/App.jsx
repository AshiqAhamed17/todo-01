
import AppName from './components/AppName'
import AddTodo from './components/Addtodo';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/Todoitem2';
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem1/>
        <TodoItem2/>

        </center>

        
    </>
  );
}
export default App;
