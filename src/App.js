import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount(state => state + 1);
  };

  const handleDecrease = () => {
    setCount(state => state - 1);
  };

  return (
    <div>
      Count: {count}
      <hr />
      <div>
        <button type="button" onClick={handleIncrease}>
          Increase
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
