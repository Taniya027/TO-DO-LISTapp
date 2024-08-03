import React, { useState } from 'react'; //Import React and the useState hook

function TodoInput({ addTask }) {
  const [inputText, setInputText] = useState(''); // State to manage the input text

  //Function to handle changes in the input field
  const handleInputChange = (e) => {
    setInputText(e.target.value); //Update the inputText state with the new value
  };

  // Function to handle adding a task
  const handleAddTask = () => {
    if (inputText.trim()) { //Check if the input text is not empty or just whitespace
      addTask(inputText); // Call addTask with the input text
      setInputText(''); // Clear the input field
    }
  };

  // Function to handle pressing the Enter Key
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') { // Check if the present key is Enter
      handleAddTask(); // Call handleAddTask if Enter is pressed
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task" //Placeholder text for the input field
        value={inputText} // Set value of the input
        onChange={handleInputChange} // Call handleInputChange on input change
        onKeyDown={handleEnterPress} // Call handleEnterPress on key down
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TodoInput; //Export the TodoInput component