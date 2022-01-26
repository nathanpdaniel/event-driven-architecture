import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEventDispatcher } from './context/EventDispatcher';
import { MyEvent } from './events/MyEvent';

function App() {
  const { dispatchEvent } = useEventDispatcher();

  const handleClick = () => {
    const e = new MyEvent(MyEvent.MY_CUSTOM_EVENT, { clicked: true });
    dispatchEvent(e)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
