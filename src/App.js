import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const buttonHandler = (val) => {
    if (val === "plus") {
      setCount(count + 1)
    } else if (val === "minus" && count > 0) {
      setCount(count - 1)
    } else if (val === "minus" && count === 0) {
      return;
    }
  }

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <button 
        data-test='increment-button'
        onClick={() => buttonHandler("plus")}>
        Increment Counter
      </button>
      <button 
        data-test='decrement-button'
        onClick={() => buttonHandler("minus")}
      >
        Decrement Counter
      </button>

    </div>
    );
}

export default App;
