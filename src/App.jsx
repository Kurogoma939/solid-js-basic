import logo from './logo.svg';
import styles from './App.module.css';

import { createSignal, For } from 'solid-js';
import { AddTodoForm } from './AddTodoForm';
import { TodoListItem } from './TodoListItem';

function App() {
  const [todos, setTodos] = createSignal([
    { text: 'Walk the dog', complete: false },
    { text: 'Do homework', complete: true },
  ]);

  return (
    <div>
      <ul>
        <For each={todos()}>
          {(todo) => <TodoListItem todo={todo} setTodos={setTodos} />}
        </For>
      </ul>
      <AddTodoForm setTodos={setTodos} />
    </div>
  );
}

export default App;