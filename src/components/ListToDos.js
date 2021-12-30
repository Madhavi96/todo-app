import React from 'react';
import { useSelector } from 'react-redux';
import ToDo from './ToDo';

function ListToDos() {
  const { data: todos } = useSelector(state => state.todos);

  return (
    <div className='todo-list'>
        {
            todos.map((todo, index) => (
                <ToDo todoItem={todo} index={index} />
            ))
        }
    </div>
  );
}

export default ListToDos;
