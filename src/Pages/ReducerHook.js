import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + action.payload.value };
  } else if (action.type === ACTIONS.DECREMENT) {
    return { count: state.count - 1 };
  } else {
    return state;
  }
}

// Instead of if else we can also use Switch case
// function reducer(state, action) {
//   switch (action.type) {
//     case "inc":
//       return { count: state.count + 1 };
//     case "dec":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>reducer</h2>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.INCREMENT, payload: { value: 2 } })
        }
      >
        +
      </button>
      <h3>{state.count}</h3>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DECREMENT, payload: { value: 2 } })
        }
      >
        -
      </button>
    </div>
  );
}

export default ReducerHook;
