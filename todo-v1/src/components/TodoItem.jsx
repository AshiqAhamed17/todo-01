//import TodoVal from "./TodoVal";
            
function TodoItem({todoname, tododate,onDeleteClick }){

    return (
        <div className="container ">
        <div className="row aqrow">
            <div className="col-4">
              {todoname}
            </div>
            <div className="col-4">
              {tododate}
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-danger aq-btn"
            onClick={() => onDeleteClick(todoname)}
            >Delete</button>
            </div>
          </div>
        </div>
          
    ) 
}
export default TodoItem;