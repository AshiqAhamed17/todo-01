//import TodoVal from "./TodoVal";
function TodoItem({todoname, tododate}){

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
            <button type="button" className="btn btn-danger aq-btn">Delete</button>
            </div>
          </div>
        </div>
          
    )
}
export default TodoItem;