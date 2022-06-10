import { createSignal} from 'solid-js';

export function AddTodoForm(props) {
    const [newTodo, setNewTodo] = createSignal('');
  
    return (
      <form>
        <input
          value={newTodo()}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.setTodos((todos) => {
              return [...todos, { text: newTodo(), complete: false }];
            });
            setNewTodo('');
          }}
        >
          Add
        </button>
      </form>
    );
}