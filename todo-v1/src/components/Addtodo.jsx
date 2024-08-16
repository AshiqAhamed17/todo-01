import { useState } from "react";

function AddTodo({onNewItem}){

   const [todoName, setTodoName] = useState();
   const [todoDate, setTodoDate] = useState(); 

   const handleNameChange = (e) => {
     setTodoName(e.target.value);
   }
   const handleDateChange = (e) => {
    setTodoDate(e.target.value);
   }

   const handleAddButton = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
   }


    return (
      <div className="container text-center">
        <div className="row aqrow">
            <div className="col-4">
              <input type="text" placeholder="Enter Here !!!"
              value={todoName}
              onChange={handleNameChange}></input>
            </div>
            <div className="col-4">
              <input type="date" onChange={handleDateChange}
              value={todoDate}
              ></input>
            </div>
            <div className="col-2">
            <button  type="button" className="btn btn-primary aq-btn"
            onClick={handleAddButton}
            >ADD</button>
            </div>
          </div>
      </div>
    )
    
}
export default AddTodo;