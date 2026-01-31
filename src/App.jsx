import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to gym",
  //     dueDate: "right now",
  //   }
  // ];

  // const [todoItems , setTodoItems] = useState(initialTodoItems);
  const [todoItems, setTodoItems] = useState([]);

  // const handleNewItem = (itemName, itemDueDate) => {
  const addNewItem = (itemName, itemDueDate) => {

    // console.log(`new item added: ${itemName} date: ${itemDueDate}`);
    // const newTodoItems = [
    //   ...todoItems ,
    //   { name : itemName , dueDate : itemDueDate} ,
    // ];
    // setTodoItems(newTodoItems)
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  // const handleDeleteItem = (todoItemName) => {
  const deleteItem = (todoItemName) => {

    // console.log(`Item deleted: ${todoItemName}` );
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  
  // const defualtTodoItems = [{ name: "buy ghee", dueDate: "today" }]

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem, 
      deleteItem,
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo/>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={deleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
