function AddTodo(){
    return (
      <div className="container text-center">
        <div className="row aqrow">
            <div className="col-4">
              <input type="text" placeholder="Enter Here !!!"></input>
            </div>
            <div className="col-4">
              <input type="date"></input>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-primary aq-btn">ADD</button>
            </div>
          </div>
      </div>
    )
    
}
export default AddTodo;