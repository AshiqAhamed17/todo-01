function AddTodo(){
    return (
        <div className="row">
            <div className="col-4">
              <input type="text" placeholder="Enter Here !!!"></input>
            </div>
            <div className="col-4">
              <input type="date"></input>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-primary">ADD</button>
            </div>
          </div>
    )
    
}
export default AddTodo;