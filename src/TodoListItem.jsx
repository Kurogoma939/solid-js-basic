export function TodoListItem(props) {
    return (
      <li
        style={{
          'text-decoration': props.todo.complete ? 'line-through' : undefined,
        }}
      >
        <label>
          <input type="checkbox" checked={props.todo.complete} />
          {props.todo.text}
        </label>
      </li>
    );
}
