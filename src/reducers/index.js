import { createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "counter/incremented" });

export { store };

export default combineReducers({
  form: formReducer,
  counter: counterReducer,
});
