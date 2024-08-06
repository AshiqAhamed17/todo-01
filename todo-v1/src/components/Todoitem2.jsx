function TodoItem2(){
    let name  = 'Complete Reactjs';
    let date = '10/08/2024';
    return (
        <div className="container text-center">
        <div className="row">
            <div className="col-4">
              {name}
            </div>
            <div className="col-4">
              {date}
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
          
    )
}
export default TodoItem2;