import React from 'react';
import { Button, Icon, Card } from 'antd';

const markDone = index => {
  console.log('done todo', index);
}

const deleteToDo = index => {
    console.log('delete todo', index);
}

function ToDo({todoItem, index}) {
  return (
    <div class='todo'>
        <Card className='todo-card'>
        {todoItem}        
        </Card>
        <Button className='actions done' onClick={() => markDone(index)}>✓</Button>{' '}
        <Button className='actions delete'  onClick={() => deleteToDo(index)}>✕</Button>{' '}
    </div>
  );
}

export default ToDo;
