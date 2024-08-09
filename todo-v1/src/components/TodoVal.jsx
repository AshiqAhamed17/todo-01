import TodoItem from './TodoItem';
import styles from './TodoVal.module.css'; 
const TodoVal = ({TodoValue}) => {

    return (
        <>
        <div className={styles.items}>
        {TodoValue.map(item => (
            <TodoItem 
            key={item.id} // Add a unique key prop
            todoname={item.name} 
            tododate={item.date} 
  />
))}
         </div>
        </> 
    )
}

export default TodoVal;