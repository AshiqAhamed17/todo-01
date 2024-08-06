function TodoItem2(){
    let name  = 'Complete Reactjs';
    let date = '10/08/2024';
    return (
        <div className="container"> 
        <div className="row aqrow">
            <div className="col-4">
              {name}
            </div>
            <div className="col-4">
              {date}
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-danger aq-btn">Delete</button>
            </div>
          </div>
        </div>
          
    )
}
export default TodoItem2;