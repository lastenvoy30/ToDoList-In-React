import { useState , useRef, use, useContext } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";


function AddTodo({}) {
  const { addNewItem } = useContext(TodoItemsContext);
  
  // const [todoName , setTodoName] = useState("");
  // const [dueDate , setDueDate] = useState("");
  // const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;

  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no of updates are ${noOfUpdates.current}`);
  // }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // setDueDate("");
    // setTodoName("");
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName , dueDate);
  }

  return (
    <div className="container text-center">
      <form className="row kg-row">
        <div className="col-6">
          {/* <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/> */}
          <input type="text" ref = {todoNameElement} placeholder="Enter Todo Here"/>

        </div>
        <div className="col-4">
          {/* <input type="date" value={dueDate} onChange={handleDateChange}/> */}
          <input type="date" ref = {dueDateElement}/>

        </div>
        <div className="col-2">
          <button type="submit" className="btn" onClick={handleAddButtonClicked}>
          {/* <button type="button" className="btn"> */}

            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;