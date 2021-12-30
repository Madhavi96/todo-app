import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import AddToDo from './components/AddToDo';
import ListToDos from './components/ListToDos';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div className='title'>ToDo App</div>
          <AddToDo className='add-todo'/>
          <ListToDos />
        </header>
      </div>
    </Provider>
  );
}

export default App;
