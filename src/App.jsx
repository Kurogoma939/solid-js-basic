import logo from './logo.svg';
import styles from './App.module.css';

import { createSignal } from 'solid-js';
import { TodoListItem } from './TodoListItem';

function App() {
  const [todos, setTodos] = createSignal([
    { text: 'Walk the dog', complete: false },
    { text: 'Do homework', complete: true },
  ]);

  return (
    <ul>
      <TodoListItem todo={todos()[0]} />
      <TodoListItem todo={todos()[1]} />
    </ul>
  );
}

export default App;