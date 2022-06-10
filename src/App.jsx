import logo from './logo.svg';
import styles from './App.module.css';

import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);

  // 一定間隔での処理
  setInterval(() => {
    setCount(count() + 1);
  }, 1000);
  
function App() {

  return (
    <div>
      <h1>カウント数 : {count()}</h1>
      <button
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        ＋１カウンター
      </button>
    </div>
  );
}

export default App;