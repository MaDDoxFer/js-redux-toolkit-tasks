import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)
const reducer = (state = {}, action) => {
    switch (action.type) {
      case "TASK_ADD": {
        const { task } = action.payload;
        for (let i = 0; i < 1e6; i++) {}
  
        return { ...state, [task.id]: task };
      }
      case "TASK_REMOVE": {
        const { id } = action.payload;
        for (let i = 0; i < 1e6; i++) {}
  
        return omit(state, id);
      }
      default:
        return state;
    }
  };
  
  export default (initialState = {}) => createStore(reducer, initialState);
// END
