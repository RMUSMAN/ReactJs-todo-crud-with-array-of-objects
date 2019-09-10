import React from "react";
const Create = props => {
  return (
    <div className="container shadow col-sm-* col-md-6 col-lg-8 p-4">
      <h4 className="text-warning">create Todos</h4>
      <input
        className="form-control"
        type="text"
        name="task"
        value={props.task}
        onChange={props.taskChange}
      />
      {props.error ? (
        <h6 className="text-danger">please enter task</h6>
      ) : (
        <h6 />
      )}
      <button className="btn btn-primary" type="submit" onClick={props.add}>
        add Todo
      </button>
    </div>
  );
};
export default Create;
