import React from 'react';
import { useSelector } from 'react-redux';
import ToDo from './ToDo';

function ListToDos() {
  const { data: todos } = useSelector(state => state.todos);

  return (
    <div className='todo-list'>
      <ul>
        {
            todos.map((todo, index) => (
                <li key={todo}><ToDo todoItem={todo} index={index} /></li>
            ))
        }
      </ul>
    </div>
  );
}

export default ListToDos;
