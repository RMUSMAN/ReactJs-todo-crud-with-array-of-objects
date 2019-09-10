import React from "react";
import { thisExpression } from "@babel/types";
import Create from "../components/todos/create";
import Update from "../components/todos/update";
import TodoList from "../components/todos/TodoList";
class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, task: "first" },
        { id: 2, task: "second" },
        { id: 3, task: "three" },
        { id: 4, task: "fourth" }
      ],
      id: "",
      task: "",
      edit: false,
      add: true,
      error: false
    };
    this.addTodos = this.addTodos.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  } // constructer end
  changeHandler(e) {
    this.setState({
      task: e.target.value,
      error: false
    });
  }
  editHandler(id) {
    var array = [...this.state.todos];
    var index = array.findIndex(x => x.id === id);
    this.setState({
      id: array[index].id,
      task: array[index].task,
      edit: true
    });
  }
  updateHandler() {
    if (this.state.task === "") {
      this.setState({
        error: true
      });
    } else {
      var array = [...this.state.todos];
      var id = this.state.id;
      var task = this.state.task;

      var index = array.findIndex(x => x.id === id);
      var obj = { id: id, task: task };
      array.splice(index, 1, obj);
      this.setState({
        todos: array,
        id: "",
        task: "",
        edit: false
      });
    }
  }
  addTodos() {
    if (this.state.task === "") {
      this.setState({
        error: true
      });
    } else {
      var array = [...this.state.todos];
      var task = this.state.task;
      var len = array.length;
      var obj = { id: len + 1, task: task };
      array.splice(len + 1, 0, obj);
      this.setState({
        todos: array,
        task: ""
      });
    }
  }
  deleteHandler(id) {
    var array = [...this.state.todos];
    var index = array.findIndex(x => x.id === id);
    array.splice(index, 1);
    this.setState({
      todos: array
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container ">
          {this.state.todos.length > 0 ? (
            <table className="table table-sm shadow ">
              <thead class="thead-light">
                <tr>
                  <th>ID</th>
                  <th>TASK</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((item, i) => (
                  <TodoList
                    key={item.id}
                    todos={item}
                    delete={this.deleteHandler}
                    edit={this.editHandler}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className="p-4 mt-4 text-danger shadow-lg">
              No data to display
            </h2>
          )}
        </div>
        {this.state.edit ? (
          <Update
            task={this.state.task}
            taskChange={this.changeHandler}
            update={this.updateHandler}
            error={this.state.error}
          />
        ) : (
          <Create
            task={this.state.task}
            taskChange={this.changeHandler}
            add={this.addTodos}
            error={this.state.error}
          />
        )}
      </div>
    );
  }
}

export default Todos;
