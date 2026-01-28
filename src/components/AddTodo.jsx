import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";


function AddTodo({onNewItem}) {
  const [todoName , setTodoName] = useState("");
  const [dueDate , setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    

  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName , dueDate);
    setDueDate("");
    setTodoName("");
  }

  return (
    <div className="container text-center">
      <form className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn" onClick={handleAddButtonClicked}>
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;