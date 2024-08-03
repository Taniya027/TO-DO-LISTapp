import React from 'react'; //Import React

const TodoList = ({ tasks, markAsDone, updateTask, deleteTask, expandedIndex, setExpandedIndex }) => {
  //Function to handle expand/collapse of a task item
  const handleExpandCollapse = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => {
        const taskItemClass = task.completed ? 'task-item completed' : 'task-item';
        return (
          <li
            key={index}
            className={taskItemClass}
          >
            <div className="task-main">
              <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                onChange={() => markAsDone(index)}
              />
              <div className="task-text" onClick={() => handleExpandCollapse(index)}>
                {task.text}
              </div>
            </div>
            <div className="task-buttons">
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
            {expandedIndex === index && (
              <div className="expandable-task">
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => updateTask(index, e.target.value)}
                />
                <p>Last updated: {new Date(task.lastUpdated).toLocaleString()}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;