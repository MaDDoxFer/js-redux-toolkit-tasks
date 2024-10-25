import React from 'react';
import Spinner from './Spinner.jsx';
import TodoForm from './TodoForm.jsx';
import { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation } from '../services/tasksApi';

const TodoBox = () => {
  const { data: tasks = [], isLoading } = useGetTasksQuery();
  const [createTask] = useCreateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = async (event, id) => {
    event.preventDefault();
    await deleteTask(id);
  };

  const handleSubmitForm = async (event, newTaskText) => {
    event.preventDefault();
    try {
      const newTask = await createTask({ text: newTaskText }).unwrap(); // Unwrap to handle response
      console.log('Task created:', newTask); // Log the newly created task
    } catch (error) {
      console.error('Failed to create task:', error); // Handle errors here if needed
    }
  };

  const renderTodo = () => (
    <TodoForm submitHandler={handleSubmitForm} />
  );

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="mb-3">
        {renderTodo()}
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="row">
            <div className="col-1">
              {task.id}
            </div>
            <div className="col">
              <a href="" className="todo-task" onClick={(event) => handleDeleteTask(event, task.id)}>
                {task.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
