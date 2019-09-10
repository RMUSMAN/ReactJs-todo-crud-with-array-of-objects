import React from "react";
const TodoList = props => {
  return (
    <tr>
      <td>{props.todos.id}</td>
      <td>{props.todos.task}</td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => props.edit(props.todos.id)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.delete(props.todos.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default TodoList;
