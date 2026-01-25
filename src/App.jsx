import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Go to College",
    //   dueDate: "4/10/2023",
    // },
    // {
    //   name: "Like this video",
    //   dueDate: "right now",
    // },
  ];

  const [todoItems , setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName , itemDueDate) => {
    console.log(`new item added: ${itemName} date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems , 
      { name : itemName , dueDate : itemDueDate} ,
    ];
    setTodoItems(newTodoItems)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;