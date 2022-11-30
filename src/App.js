import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState(["Wash the dishes"]);
  const toDoRef = useRef();
  /**
   *
   * Whenever we click on the add toDo button we want to add the value typed
   * inside of the input to the todoList state array
   *
   * Then we want to display inside the <ul> as an <li> each item inside of the todoList array
   * using the .map method
   */
  return (
    <div className="App">
      <input type="text" ref={toDoRef} />
      <button
        onClick={function () {
          setTodoList([...todoList, toDoRef.current.value]);
          toDoRef.current.value = "";
        }}
      >
        Add todo
      </button>
      <ul>
        {todoList.map(function (value, index) {
          return <li>{value}</li>;
        })}
      </ul>
    </div>
  );
}
