import "./App.css";
import { useState } from "react";
import { MdDelete, MdAddTask,MdCheckBox  } from "react-icons/md";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };
    let updateTodoArray = [...allTodos];
    updateTodoArray.push(newTodoItem);
    setAllTodos(updateTodoArray);
  };

  const handleCompletedTodo = (index) => {
    let updateTodoArray = [...allTodos];
    let updateCompletedTodo = [...completedTodos];
    updateTodoArray.splice(index, 1);
    updateCompletedTodo.push(allTodos[index]);
    setAllTodos(updateTodoArray);
    setCompletedTodos(updateCompletedTodo);
  };

  const handleDeleteTodo = (index) => {
    let updateTodoArray = [...allTodos];
    updateTodoArray.splice(index, 1);
    setAllTodos(updateTodoArray);
  };

  return (
    <div className="App">
      <h1>MY TODO'S</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="What's the title..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="What's the description..."
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              className="primaryBtn"
              onClick={handleAddTodo}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={
              isCompleteScreen === false
                ? "secondaryBtn active"
                : "secondaryBtn"
            }
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={
              isCompleteScreen !== false
                ? "secondaryBtn active"
                : "secondaryBtn"
            }
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {isCompleteScreen === false
            ? allTodos.map((item, index) => {
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <MdDelete
                        className="delete-icon"
                        onClick={() => handleDeleteTodo(index)}
                      />
                      <MdAddTask
                        className="check-icon"
                        onClick={() => handleCompletedTodo(index)}
                      />
                    </div>
                  </div>
                );
              })
            : completedTodos.map((item, index) => {
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div>  
                      <MdCheckBox 
                        className="check-icon"
                      />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
