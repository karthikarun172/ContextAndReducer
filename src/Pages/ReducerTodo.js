import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add_todo",
  REMOVE_TODO: "remove_todo",
  UPDATE_TODO: "update_todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, convertToObject(action.payload.name)];

    case ACTIONS.REMOVE_TODO:
      console.log(action.payload._id);
      return todos.filter((c) => c._id != action.payload._id);

    default:
      return todos;
  }
}

const convertToObject = (value) => {
  return { _id: Date.now(), data: value, done: false };
};

function ReducerTodo() {
  const [todos, dispatch] = useReducer(reducer, []);

  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: data } });
    setData("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={data} onChange={(e) => setData(e.target.value)}></input>
      </form>

      <div>
        {todos.map((d) => (
          <div key={d._id}>
            <h4>{d.data}</h4>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.REMOVE_TODO, payload: { _id: d._id } })
              }
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReducerTodo;
