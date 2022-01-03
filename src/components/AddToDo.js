import React from 'react';
import { Input } from 'antd';

const addNewToDo = (newToDo) => {
  console.log('Added new todo : ', newToDo);
};

function AddToDo() {
  return (
    <div className='add-todo'>
      <Input className='input' placeholder="add new todo..." onPressEnter={addNewToDo}/>
    </div>
  );
}

export default AddToDo;
