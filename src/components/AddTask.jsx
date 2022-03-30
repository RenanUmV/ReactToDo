import React, { useState } from "react";
import "./AddTask.css"
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('');

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  };
  
  const handleInputChange = (e) => {setInputData(e.target.value)};
  return (
    <div className="add-task-container">      
      <input type="text"  className="add-task-input" onChange={handleInputChange} value={inputData}/>
      <div className="add-task-button-container">
      <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
}

export default AddTask;