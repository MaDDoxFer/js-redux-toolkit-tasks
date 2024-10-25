import _ from "lodash";
import { combineReducers } from "redux";
const comments = (state = {}, action) => {
  // BEGIN
  switch (action.type) {
    case "TASK_COMMENT_ADD": {
      const { comment } = action.payload;
      for (let i = 0; i < 1e6; i++) {}
      return { ...state, [comment.id]: comment };
    }
    case "TASK_COMMENT_REMOVE": {
      const { id } = action.payload;
      for (let i = 0; i < 1e6; i++) {}
      return _.omit(state, id);
    }
    case "TASK_REMOVE": {
      const { id: taskId } = action.payload;
      for (let i = 0; i < 1e6; i++) {}
      return _.omitBy(state, (comment) => comment.taskId === taskId);
    }
    default:
      return state;
  }
  // END
};
const tasks = (state = {}, action) => {
  // BEGIN
  switch (action.type) {
    case "TASK_ADD": {
      const { task } = action.payload;
      for (let i = 0; i < 1e6; i++) {}
      return { ...state, [task.id]: task };
    }
    case "TASK_REMOVE": {
      const { id } = action.payload;
      for (let i = 0; i < 1e6; i++) {}
      return _.omit(state, id);
    }
    default:
      return state;
  }
  // END
};
export default combineReducers({
  comments,
  tasks,
});
