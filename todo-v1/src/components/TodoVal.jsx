import TodoItem from './TodoItem';
import styles from './TodoVal.module.css'; 
const TodoVal = ({TodoValue, onDeleteClick}) => {

    return (
        <>
        <div className={styles.items}>
        {TodoValue.map(item => (
            <TodoItem 
            key={item.id} // Add a unique key prop
            todoname={item.name} 
            tododate={item.date}
            onDeleteClick={onDeleteClick}
  />
))}
         </div>
        </> 
    )
}

export default TodoVal;